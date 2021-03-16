import QuestionElementsGetters from "./QuestionElementsGetters";

export default class SoftWarning {

    constructor(question, settings) {
        this.currentLanguage = String(Confirmit.page.surveyInfo.language);

        this.question = question;
        this.threshold = settings.threshold;
        this.prompt = settings.prompt[this.currentLanguage];

        this.questionElement = QuestionElementsGetters.getQuestionElement(this.question.id);
        this.questionElement_textarea = QuestionElementsGetters.getQuestionElement_Textarea(this.questionElement);

        this.haveShownWarning = false;
    }

    render = () => {
        window.Confirmit.page.beforeNavigateEvent.on(this.toggleSoftWarning);

        this.question.validationCompleteEvent.on((validationResults) => {
             this.question.validationEvent.off(this.pushError);
             this.toggleToastError(validationResults);
             this.toggleWarningBlock();
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
        let haveQuestionErrors = this.questionElement.querySelectorAll('.cf-error-list__item').length !== 0;

        if(warningBlocks.length > 0 && (responseLength > this.threshold || haveQuestionErrors)) {
            warningBlocks[0].remove();
        }
        else if(warningBlocks.length === 0 && responseLength <= this.threshold && !haveQuestionErrors) {

            if(!this.haveShownWarning) {
                this.renderWarningBlock(this.prompt);
                this.question.validationEvent.on(this.pushError);
                this.haveShownWarning = true;
            }
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
        block.className += "cf-question__soft-warning";
        block.innerText = this.prompt;

        return block;
    }
}