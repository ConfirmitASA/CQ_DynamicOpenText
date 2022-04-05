import QuestionElementsGetters from "./QuestionElementsGetters";

export const promptPosition = Object.freeze({
    "above": "1",
    "inside": "2",
    "below": "3"
});

export default class ProgressBar {
    constructor(question, settings) {
        this.currentLanguage = String(Confirmit.page.surveyInfo.language);

        this.question = question;
        this.height = settings.height && settings.height > 0 ? settings.height : 5;
        this.position = settings.position ? settings.position : promptPosition.above;
        this.minValues = settings.minValues && settings.minValues.length > 0 ? settings.minValues : [1,15,30];
        this.colors = settings.colors && settings.colors.length > 0 ? settings.colors : ['#ff0000','#ffff00','#00ff00'];
        this.prompts = settings.prompts[this.currentLanguage] && settings.prompts[this.currentLanguage].length > 0 ? settings.prompts[this.currentLanguage] : ["", "", ""];
        this.backgroundColor = '#F0F2F5';
        this.promptsSettings = this.createArrayOfPromptsSettings(this.minValues, this.colors, this.prompts);

        this.questionElement = QuestionElementsGetters.getQuestionElement(this.question.id);
        this.questionElement_textarea = QuestionElementsGetters.getQuestionElement_Textarea(this.questionElement);
    }

    render() {
        if(this.promptsSettings.length > 0) {
            let questionElement_content = QuestionElementsGetters.getQuestionElement_Content(this.questionElement);

            let barElement = this.createBarElement(this.height, this.questionElement_textarea.offsetWidth, this.backgroundColor);
            this.questionElement.insertBefore(barElement, questionElement_content);

            let promptElement = this.createPromptElement();

            switch (this.position) {
                case promptPosition.above:
                    this.questionElement.insertBefore(promptElement, barElement);
                    break;
                case promptPosition.inside:
                    if (this.height < 15) {
                        this.questionElement.insertBefore(promptElement, barElement);
                    } else {
                        barElement.lastElementChild.appendChild(promptElement);
                    }
                    break;
                case promptPosition.below:
                    this.questionElement.insertBefore(promptElement, barElement.nextSibling);
                    break;
            }

            this.updatePrompt();
            this.updateBarColor();

            if(this.questionElement_textarea.offsetWidth > 0) {
                this.updateBarWidth();
            }
            else {
                let barElement = QuestionElementsGetters.getProgressBarElement(this.questionElement);

                barElement.style.width = '480px';
            }

            this.questionElement_textarea.addEventListener("input", this.updatePrompt);
            this.questionElement_textarea.addEventListener("keyup", this.updateBarColor);
            this.questionElement_textarea.addEventListener("mouseup", this.updateBarWidth);

            if(this.position === promptPosition.inside && this.height >= 15) {
                promptElement.classList.add("cf-question__dynamic-progress-prompt--inside");
                this.adjustPromptPositionIfInsideBar();

                this.questionElement_textarea.addEventListener("mouseup", this.adjustPromptPositionIfInsideBar);
                this.questionElement_textarea.addEventListener("input", this.adjustPromptPositionIfInsideBar);
                window.addEventListener("resize", this.adjustPromptPositionIfInsideBar);
            }
        }
    }

    updatePrompt = () => {
        let promptElement = QuestionElementsGetters.getProgressBarPromptElement(this.questionElement);

        let answerTextLength = this.questionElement_textarea.value.length;

        if(answerTextLength >= this.promptsSettings[this.promptsSettings.length - 1].value) {
            promptElement.innerHTML = this.promptsSettings[this.promptsSettings.length - 1].prompt;
        } else {
            if(answerTextLength < this.promptsSettings[0].value) {
                promptElement.innerHTML = "";
            } else {
                for(let i = 0; i < this.promptsSettings.length - 1; i++) {
                    if(answerTextLength >= this.promptsSettings[i].value && answerTextLength < this.promptsSettings[i + 1].value) {
                        promptElement.innerHTML = this.promptsSettings[i].prompt;
                    }
                }

            }
        }
    }

    updateBarColor = () => {
        let barElement = QuestionElementsGetters.getProgressBarElement(this.questionElement);

        let answerTextLength = this.questionElement_textarea.value.length;
        let barElementContent = barElement.lastElementChild;

        if(answerTextLength >= this.promptsSettings[this.promptsSettings.length - 1].value) {
            barElementContent.style.backgroundColor = this.promptsSettings[this.promptsSettings.length - 1].color;
            this.setWidth(barElementContent, 100, "%");
        } else {
            if(answerTextLength < this.promptsSettings[0].value) {
                barElementContent.style.backgroundColor = "transparent";
                this.setWidth(barElementContent, 0, "%");
            } else {
                for(let i = 0; i < this.promptsSettings.length - 1; i++) {
                    if(answerTextLength >= this.promptsSettings[i].value && answerTextLength < this.promptsSettings[i + 1].value) {
                        let newWidth = 100/this.promptsSettings.length * (i+1);
                        this.setWidth(barElementContent, newWidth, "%");

                        barElementContent.style.backgroundColor = this.promptsSettings[i].color;
                    }
                }

            }
        }
    }

    updateBarWidth = () => {
        let barElement = QuestionElementsGetters.getProgressBarElement(this.questionElement);

        barElement.style.width = this.questionElement_textarea.offsetWidth + 'px';
    }

    adjustPromptPositionIfInsideBar = () => {
        let barElement = QuestionElementsGetters.getProgressBarElement(this.questionElement);
        let promptElement = QuestionElementsGetters.getProgressBarPromptElement(this.questionElement);

        let barWidth = this.questionElement.querySelectorAll('textarea')[0].offsetWidth;
        let promptWidth = promptElement.scrollWidth;

        const promptInsideClass = "cf-question__dynamic-progress-prompt--inside";

        if(promptElement.classList.contains(promptInsideClass)
            && barWidth < promptWidth) {
                this.questionElement.insertBefore(promptElement, barElement);
                promptElement.classList.remove(promptInsideClass);
        }

        if(!promptElement.classList.contains(promptInsideClass)
            && barWidth > promptWidth) {
            barElement.lastElementChild.appendChild(promptElement);
            promptElement.classList.add(promptInsideClass);
        }
    }

    createBarElement(height, width, backgroundColor) {
        let barElement = document.createElement('div');
        barElement.className += 'cf-question__dynamic-progress-bar';
        barElement.style.height = height + 'px';
        barElement.style.width = width + 'px';
        barElement.style.backgroundColor = backgroundColor;

        let barElementContent = document.createElement('div');
        barElementContent.className = "dynamic-progress-bar__content";
        barElement.appendChild(barElementContent);

        return barElement;
    }

    createPromptElement() {
        let promptElement = document.createElement('div');
        promptElement.className += 'cf-question__dynamic-progress-prompt';

        return promptElement;
    }

    createArrayOfPromptsSettings(minValues, colors, prompts) {
        let values = [];
        for(let i = 0; i < minValues.length; i++) {
            if(!!minValues[i]) {
                let obj = {
                    value: minValues[i],
                    color: colors[i],
                    prompt: prompts[i]
                };
                values.push(obj);
            }
        }

        values.sort(this.sortMinValuesAscending);

        return values;
    }

    sortMinValuesAscending(a, b) {
        if (a.value > b.value ) return 1;
        if (a.value === b.value) return 0;
        if (a.value < b.value) return -1;
    }

    setWidth(barElement, width, widthType) {
        barElement.style.width = width + widthType;
    }
}
