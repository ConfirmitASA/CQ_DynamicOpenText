import ProgressBar from "./DynamicOpenText_progress-bar";
import CharacterCount from "./DynamicOpenText_character-count";
import Keywords from "./DynamicOpenText_keywords";
import QuestionElementsGetters from "./QuestionElementsGetters";
import WordCount from "./DynamicOpenText_word-count";
import SoftWarning from "./DynamicOpenText_soft-warning";

export default class DynamicOpenText {

    constructor(question, settings) {
        this.question = question;
        this.settings = settings;
    }

    render() {
        this.renderStandardQuestionMarkup();
        const questionInputTextarea = document.getElementById(this.question.id + "_input");
        if(!!questionInputTextarea) {
            questionInputTextarea.addEventListener("input", this.setValueToQuestion);
        }
        else {
            console.log('Could not find DOT textarea');
        }

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

        if(this.settings.softWarning.isEnabled) {
            let softWarning = new SoftWarning(this.question, this.settings.softWarning);
            softWarning.render();
        }

        this.setValidation();
    }

    renderStandardQuestionMarkup = () => {
        document.getElementById(this.question.id).innerHTML = '<div class="cf-question__text" id="' + this.question.id + '_text">' + this.question.text + '</div>' +
            '<div class="cf-question__instruction" id="' + this.question.id + '_instruction">' + this.question.instruction + '</div>' +
            '<div class="cf-question__error cf-error-block cf-error-block--bottom cf-error-block--hidden" id="' + this.question.id + '_error" role="alert" aria-labelledby="' + this.question.id + '_error_list">' +
            '<ul class="cf-error-list" id="' + this.question.id + '_error_list"></ul></div>' +
            '<div class="cf-question__content cf-question__content--no-padding"><div class="cf-open-answer">' +
            '<textarea class="cf-open-answer__input cf-text-area  " id="' + this.question.id + '_input" aria-labelledby="' + this.question.id + '_text" aria-required="true" aria-invalid="false" aria-errormessage="' + this.question.id + '_error"></textarea>' +
            '</div></div>';
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