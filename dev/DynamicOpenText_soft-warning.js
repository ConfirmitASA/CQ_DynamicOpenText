import QuestionElementsGetters from "./QuestionElementsGetters";

export default class SoftWarning {

    constructor(question, settings) {
        this.currentLanguage = String(Confirmit.page.surveyInfo.language);

        this.question = question;
        this.threshold = settings.threshold;
        this.text = settings.text[this.currentLanguage];

        this.questionElement = QuestionElementsGetters.getQuestionElement(this.question.id);
        this.questionElement_textarea = QuestionElementsGetters.getQuestionElement_Textarea(this.questionElement);
    }

    render = () => {
        window.Confirmit.page.beforeNavigateEvent.on(this.toggleSoftWarning);

        this.question.validationCompleteEvent.on((validationResults) => {
             this.question.validationEvent.off(this.pushError);
             this.toggleToastError(validationResults);
        });
    }

    pushError = (validationResult) => {
        var error = {message: '', data: 'softWarning'};
        validationResult.errors.push(error);
    }

    toggleToastError = (validationResults) => {
        let toastError;
        try {
            toastError = document.getElementsByClassName("cf-toast--error")[0];
        }
        catch {
            console.log("Could not find error block element");
            return;
        }

        if(validationResults.errors.find(e => e.data === "softWarning")) {
            toastError.classList.add('hidden');
        } else if(validationResults.errors.length !== 0) {
            toastError.classList.remove('hidden');
        }
    }

    toggleSoftWarning = (way) => {
        if(!way.next) return;

        this.toggleWarningBlock();

        if(this.question.allowValidateOnChange) {
            this.questionElement_textarea.addEventListener("input", this.toggleWarningBlock);
        }
    }

    toggleWarningBlock = () => {
        let responseLength = this.questionElement_textarea.value.length;
        let warningBlocks = this.questionElement.querySelectorAll('.cf-question__soft-warning');

        let questionValidationResults = this.question.validate(false);
        //let haveQuestionErrors = this.questionElement.querySelectorAll('.cf-error-list__item').length !== 0;
        let haveQuestionErrors;

        if(questionValidationResults.errors.find(e => e.data === "softWarning")) {
            haveQuestionErrors = false;
        } else if(questionValidationResults.errors.length !== 0) {
            haveQuestionErrors = true;
        }

        if(warningBlocks.length > 0 && (responseLength > this.threshold || haveQuestionErrors)) {
            warningBlocks[0].remove();
        }
        else if(warningBlocks.length === 0 && responseLength <= this.threshold && !haveQuestionErrors) {
            this.renderWarningBlock(this.prompt);
            this.question.validationEvent.on(this.pushError);
        }
    }

    renderWarningBlock = () => {
        let warningBlock = this.createSoftWarningBlock();
        let errorBlock;
        try {
            errorBlock = this.questionElement.getElementsByClassName("cf-error-block")[0];
        }
        catch {
            console.log("Could not find error block element");
            return;
        }

        errorBlock.insertAdjacentElement('afterend', warningBlock);
    }

    createSoftWarningBlock = () => {
        let block = document.createElement('div');
        block.className += softWarningClassName;
        block.className += " cf-error-block cf-error-block--bottom";
        block.innerHTML = this.text;

        return block;
    }
}