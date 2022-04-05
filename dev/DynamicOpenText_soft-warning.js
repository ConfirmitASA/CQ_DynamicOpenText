import QuestionElementsGetters from "./QuestionElementsGetters";

const softWarningClassName = "cf-question__soft-warning";
const errorData = "softWarning";

export default class SoftWarning {

    constructor(question, settings) {
        this.currentLanguage = String(Confirmit.page.surveyInfo.language);

        this.question = question;
        this.threshold = parseInt(settings.threshold);
        this.text = settings.text[this.currentLanguage];

        this.questionElement = QuestionElementsGetters.getQuestionElement(this.question.id);
        this.questionElement_textarea = QuestionElementsGetters.getQuestionElement_Textarea(this.questionElement);
    }

    /**
     * The starting point. Respondent clicks on a next/back button -> beforeNavigateEvent
     * (if direction == next) -> toggleWarning -> (if warning needs to be shown) subscribe to navigateEvent
     * a function pushing an error to validationResult.error - this way we can prevent navigation.
     * NavigateEvent -> error is pushed ->
     * validationCompleteEvent -> unsubscribe from navigateEvent so we won't push the error again.
     */
    render = () => {
        window.Confirmit.page.beforeNavigateEvent.on(this.toggleWarning);

        this.question.validationCompleteEvent.on((questionValidationResult) => {
             this.question.validationEvent.off(this.pushError);
             this.toggleToastError(questionValidationResult);
        });
    }

    /**
     * Check the way of navigation and toggle a warning block. If validation on change is allowed
     * subscribe to the input event of the textarea in order to perform revalidation.
     * @param way - a way of navigation; we only want to show a soft warning when moving forward
     */
    toggleWarning = (way) => {
        if(!way.next) return;

        this.toggleWarningBlock();

        if(this.question.allowValidateOnChange) {
            this.questionElement_textarea.addEventListener("input", this.toggleWarningBlock);
        }
    }

    /**
     * Renders or hides a warning block. Question validation is performed because we don't want to show
     * the warning if we have validation errors.
     */
    toggleWarningBlock = () => {
        let responseLength = this.questionElement_textarea.value.length;
        let warningBlocks = this.questionElement.querySelectorAll('.' + softWarningClassName);

        let questionValidationResult = this.question.validate(false); //raiseValidationCompleteEvent: false
        let hasErrors = this.hasQuestionErrors(questionValidationResult);

        if(warningBlocks.length > 0 && (responseLength > this.threshold || hasErrors)) {
            warningBlocks[0].remove();
        }
        else if(warningBlocks.length === 0 && responseLength <= this.threshold && !hasErrors) {
            this.renderWarningBlock(this.text);
            this.question.validationEvent.on(this.pushError);
        }
    }

    /**
     * Pushes an error to validationResult to prevent navigation when having a warning.
     * To distinguish between this "warning" error and other validation errors, errorData is used.
     * @param validationResult - result of the question validation
     */
    pushError = (validationResult) => {
        let error = {message: '', data: errorData};
        validationResult.errors.push(error);
    }

    renderWarningBlock = () => {
        let errorBlock;
        try {
            errorBlock = this.questionElement.querySelectorAll(".cf-question__error")[0];
        }
        catch {
            console.log("Could not find error block element");
            return;
        }

        let warningBlock = this.createSoftWarningBlock();
        errorBlock.insertAdjacentElement('afterend', warningBlock);
    }

    createSoftWarningBlock = () => {
        let block = document.createElement('div');
        block.className += softWarningClassName;
        block.className += " cf-error-block cf-error-block--bottom";
        block.innerHTML = this.text;

        return block;
    }

    toggleToastError = (questionValidationResult) => {
        let toastError;
        try {
            toastError = document.getElementsByClassName("cf-toast--error")[0];
        }
        catch {
            console.log("Could not find error block element");
            return;
        }
        
        let hasErrors = this.hasQuestionErrors(questionValidationResult);

        if(hasErrors) {
            toastError.classList.remove('hidden');
        } else {
            toastError.classList.add('hidden');
        }
    }

    hasQuestionErrors = (questionValidationResult) => {
        if(questionValidationResult.errors.length === 1 && questionValidationResult.errors.find(e => e.data === errorData)) {
            return false;
        } else if(questionValidationResult.errors.length !== 0) {
            return true;
        }
    }
}