import QuestionElementsGetters from "./QuestionElementsGetters";

const characterCounterClass = "cf-question__dynamic-character-counter";
export default class CharacterCount {
    constructor(question, settings) {
        this.question = question;
        this.characterLimit = this.question.maxLength;
        this.isCharacterLimitEnabled = settings.isCharacterLimitEnabled;

        this.questionElement = QuestionElementsGetters.getQuestionElement(this.question.id);
        this.questionElement_textarea = QuestionElementsGetters.getQuestionElement_Textarea(this.questionElement);
    }

    render() {
        let element = document.createElement('div');
        element.className += characterCounterClass;
        element.textContent = "0";
        if (this.isCharacterLimitEnabled && !!this.characterLimit) {
            element.textContent += "/" + this.characterLimit;
        }

        this.questionElement.appendChild(element);
        this.questionElement_textarea.addEventListener("input", this.updateCount);
    }

    updateCount = () => {
        let currentCharacterCount = this.questionElement_textarea.value.length;
        let countElement = this.questionElement.querySelectorAll('.' + characterCounterClass)[0];

        countElement.textContent = currentCharacterCount;
        if(this.isCharacterLimitEnabled && !!this.characterLimit) {
            countElement.textContent += "/" + this.characterLimit;
        }
    }
}