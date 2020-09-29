export default class CharacterCount {
    constructor(question, showCharacterLimit) {
        this.ccQuestion = question;
        this.characterLimit = this.ccQuestion.maxLength;
        this.showCharacterLimit = showCharacterLimit;
    }

    render() {
        let questionElement = document.getElementById(this.ccQuestion.id);
        let questionElement_content = questionElement.querySelectorAll('.cf-question__content')[0];
        let questionElement_textarea = questionElement_content.querySelectorAll('textarea')[0];

        let ccElement = document.createElement('div');
        ccElement.className += 'cf-question__dynamic-character-counter';
        ccElement.textContent = "0"
        if (this.showCharacterLimit && !!this.characterLimit) {
            ccElement.textContent += "/" + this.characterLimit;
        }
        //questionElement_content.insertAdjacentElement("beforeend", ccElement);
        questionElement.appendChild(ccElement);

        questionElement_textarea.addEventListener("input", this.updateCount);
    }

    updateCount = () => {
        let questionElement = document.getElementById(this.ccQuestion.id);
        let questionElement_content = questionElement.querySelectorAll('.cf-question__content')[0];
        let questionElement_textarea = questionElement_content.querySelectorAll('textarea')[0];

        let currentCharacterCount = questionElement_textarea.value.length;
        let countElement = questionElement.getElementsByClassName("cf-question__dynamic-character-counter")[0];

        countElement.textContent = currentCharacterCount;
        if(this.showCharacterLimit && !!this.characterLimit) {
            countElement.textContent += "/" + this.characterLimit;
        }
        //countElement.style.color = '#000000';
    }
}