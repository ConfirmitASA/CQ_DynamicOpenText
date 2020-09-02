export default class ProgressBar {
    constructor(question, pbHeight, pbPosition, pbMinValues, pbColors, pbPrompts) {
        this.pbQuestion = question;
        this.pbHeight = pbHeight && pbHeight > 0 ? pbHeight : 5;
        this.pbPosition = pbPosition ? pbPosition : '1';
        this.pbMinValues = pbMinValues && pbMinValues.length > 0 ? pbMinValues : [1,15,30];
        this.pbColors = pbColors && pbColors.length > 0 ? pbColors : ['#ff0000','#ffff00','#00ff00'];
        this.pbPrompts = pbPrompts && pbPrompts.length > 0 ? pbPrompts : ['Good start','A little more information would be appreciated','Fantastic! Many thanks for your feedback'];
        this.pbBackgroundColor = '#F0F2F5';
        this.allValues = this.createArrayOfAllValues(this.pbMinValues, this.pbColors, this.pbPrompts);
    }

    render() {
        if(this.allValues.length > 0) {
            let questionElement = document.getElementById(this.pbQuestion.id);

            let questionElement_content = questionElement.querySelectorAll('.cf-question__content')[0];
            let questionElement_textarea = questionElement.querySelectorAll('textarea')[0];

            let pbElement = this.createBarElement(this.pbHeight, questionElement_textarea.offsetWidth, this.pbBackgroundColor);
            questionElement.insertBefore(pbElement, questionElement_content);

            let promptElement = this.createPromptElement();

            switch (this.pbPosition) {
                case "1":
                    questionElement.insertBefore(promptElement, pbElement);
                    break;
                case "2":
                    if (this.pbHeight < 15) {
                        questionElement.insertBefore(promptElement, pbElement);
                    } else {
                        pbElement.lastElementChild.appendChild(promptElement);
                    }
                    break;
                case "3":
                    questionElement.insertBefore(promptElement, pbElement.nextSibling);
                    break;
            }


            questionElement_textarea.addEventListener("input", this.updatePrompt);
            questionElement_textarea.addEventListener("keyup", this.updateBarColor);
            questionElement_textarea.addEventListener("mouseup", this.updateBarWidth);
        }
    }

    updatePrompt = () => {
        let questionElement = document.getElementById(this.pbQuestion.id);
        let questionElement_textarea = questionElement.querySelectorAll('textarea')[0];
        let promptElement = questionElement.getElementsByClassName('cf-question__dynamic-progress-prompt')[0];

        let textLength = questionElement_textarea.value.length;


        if(textLength >= this.allValues[this.allValues.length - 1].value) {
            promptElement.innerHTML = this.allValues[this.allValues.length - 1].prompt;
        } else {
            if(textLength < this.allValues[0].value) {
                promptElement.innerHTML = "";
            } else {
                for(let i = 0; i < this.allValues.length - 1; i++) {
                    if(textLength >= this.allValues[i].value && textLength < this.allValues[i + 1].value) {
                        promptElement.innerHTML = this.allValues[i].prompt;
                    }
                }

            }
        }
    }

    updateBarColor = () => {
        let questionElement = document.getElementById(this.pbQuestion.id);
        let questionElement_textarea = questionElement.querySelectorAll('textarea')[0];
        let pbElement = questionElement.getElementsByClassName('cf-question__dynamic-progress-bar')[0];

        let textLength = questionElement_textarea.value.length;
        let pbElementContent = pbElement.lastElementChild;

        if(textLength >= this.allValues[this.allValues.length - 1].value) {
            pbElementContent.style.backgroundColor = this.allValues[this.allValues.length - 1].color;
            this.setWidth(pbElementContent, 100, "%");
        } else {
            if(textLength < this.allValues[0].value) {
                pbElementContent.style.backgroundColor = "transparent";
                this.setWidth(pbElementContent, 100, "%");
            } else {
                for(let i = 0; i < this.allValues.length - 1; i++) {
                    if(textLength >= this.allValues[i].value && textLength < this.allValues[i + 1].value) {
                        let newWidth = 100/this.allValues.length * (i+1);
                        pbElementContent.style.backgroundColor = this.allValues[i].color;
                        this.setWidth(pbElementContent, newWidth, "%");
                    }
                }

            }
        }
    }

    updateBarWidth = () => {
        let questionElement = document.getElementById(this.pbQuestion.id);
        let questionElement_textarea = questionElement.querySelectorAll('textarea')[0];
        let pbElement = questionElement.getElementsByClassName('cf-question__dynamic-progress-bar')[0];

        pbElement.style.width = questionElement_textarea.offsetWidth + 'px';
    }

    createBarElement(height, width, backgroundColor) {
        let pbElement = document.createElement('div');
        pbElement.className += 'cf-question__dynamic-progress-bar';
        pbElement.style.height = height + 'px';
        pbElement.style.width = width + 'px';
        pbElement.style.backgroundColor = backgroundColor;

        let pbElementContent = document.createElement('div');
        pbElementContent.className = "dynamic-progress-bar__content";
        pbElement.appendChild(pbElementContent);

        return pbElement;
    }

    createPromptElement() {
        let promptElement = document.createElement('div');
        promptElement.className += 'cf-question__dynamic-progress-prompt';

        return promptElement;
    }

    createArrayOfAllValues(minValues, colors, prompts) {
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

    setWidth(pbElement, width, widthType) {
        pbElement.style.width = width + widthType;
    }
}
