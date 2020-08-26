/*export default class CharacterCount {
    constructor(question, count) {
        this.pbQuestion = question;
        this.characterCount = count;
    }

    render() {
    }
}*/

function characterCounter(question, characterCount) {
    var ccQuestion = question;
    var maxCharacterCount = characterCount && characterCount > 0 ? characterCount : 150;

    var questionElement = document.getElementById(ccQuestion.id);
    var questionElement_content = questionElement.querySelectorAll('.cf-question__content')[0];
    var questionElement_textarea = questionElement_content.querySelectorAll('textarea')[0];

    var ccElement = document.createElement('div');
    ccElement.className += 'cf-question__dynamic-character-counter';
    ccElement.textContent = "0/" + maxCharacterCount;
    questionElement_content.insertAdjacentElement("beforeend", ccElement);

    questionElement_textarea.addEventListener("input", function () {
        var currentCharacterCount = questionElement_textarea.value.length;
        if (currentCharacterCount <= maxCharacterCount) {
            ccElement.textContent = currentCharacterCount + "/" + maxCharacterCount;
            ccElement.style.color = '#000000';
        } else {
            ccElement.textContent = currentCharacterCount + "/" + maxCharacterCount + " You have reached the limit.";
            ccElement.style.color = '#ff0000';
        }
    })
}