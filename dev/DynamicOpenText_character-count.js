export default class CharacterCount {
    constructor(question, characterCount) {
        this.ccQuestion = question;
        this.maxCharacterCount = characterCount && characterCount > 0 ? characterCount : 150;
    }

    render() {
        let questionElement = document.getElementById(this.ccQuestion.id);
        let questionElement_content = questionElement.querySelectorAll('.cf-question__content')[0];
        let questionElement_textarea = questionElement_content.querySelectorAll('textarea')[0];

        let ccElement = document.createElement('div');
        ccElement.className += 'cf-question__dynamic-character-counter';
        ccElement.textContent = "0/" + this.maxCharacterCount;
        questionElement_content.insertAdjacentElement("beforeend", ccElement);

        questionElement_textarea.addEventListener("input", this.updateCount);
    }

    updateCount = () => {
        let questionElement = document.getElementById(this.ccQuestion.id);
        let questionElement_content = questionElement.querySelectorAll('.cf-question__content')[0];
        let questionElement_textarea = questionElement_content.querySelectorAll('textarea')[0];

        let currentCharacterCount = questionElement_textarea.value.length;
        let countElement = questionElement.getElementsByClassName("cf-question__dynamic-character-counter")[0];

        countElement.textContent = currentCharacterCount + "/" + this.maxCharacterCount;
        countElement.style.color = '#000000';

    }
}