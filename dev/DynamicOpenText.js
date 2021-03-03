import ProgressBar from "./DynamicOpenText_progress-bar";
import CharacterCount from "./DynamicOpenText_character-count";
import Keywords from "./DynamicOpenText_keywords";
import QuestionElementsGetters from "./QuestionElementsGetters";
import WordCount from "./DynamicOpenText_word-count";

export default class DynamicOpenText {

    constructor(question, settings) {
        this.question = question;
        this.settings = settings;
    }

    render() {
        let questionInput = document.getElementById(this.question.id + "_input");
        questionInput.addEventListener("input", this.setValueToQuestion);

        if(this.settings.progressBar.isEnabled) {
            let progressBar = new ProgressBar(this.question, this.settings.progressBar);
            progressBar.render();
        }

        if(this.settings.characterCount.isEnabled) {
            let counter;
            switch(this.settings.characterCount.type) {
                case "character":
                    counter = new CharacterCount(this.question, this.settings.characterCount);
                    break;
                case "word":
                    counter = new WordCount(this.question);
            }
            counter.render();
        }

        if(this.settings.keywords.isEnabled) {
            let keywords = new Keywords(this.question, this.settings.keywords);
            keywords.render();
        }

        this.setValidation();
    }

    setValueToQuestion = () => {
        let questionInput = document.getElementById(this.question.id + "_input");
        if(questionInput) {
            this.question.setValue(questionInput.value);
        }
    }

    setValidation = () => {
        this.question.validationEvent.on(this.showValidationResultMessages);
    }

    showValidationResultMessages = (validationResult) => {
        let questionElement = QuestionElementsGetters.getQuestionElement(this.question.id);
        let errorList;
        try {
            errorList = questionElement.getElementsByClassName("cf-error-list")[0];
        }
        catch {
            console.log("Could not find error list element");
            return;
        }
        this.clearErrorList(errorList);

        let errorsCount = validationResult.errors.length;
        if(errorsCount > 0) {
            errorList.parentElement.classList.remove("cf-error-block--hidden");
            validationResult.errors.forEach(error => {
                    let errorItem = this.createErrorListItem(error.message);
                    errorList.appendChild(errorItem);
                }
            );
        }
    }

    clearErrorList(errorList) {
        let errorLiElement = errorList.lastElementChild;
        while (errorLiElement) {
            errorList.removeChild(errorLiElement);
            errorLiElement = errorList.lastElementChild;
        }
        errorList.parentElement.classList.add("cf-error-block--hidden");
    }

    createErrorListItem(message) {
        let item = document.createElement('li');
        item.className += "cf-error-list__item";
        item.innerText = message;

        return item;
    }
}