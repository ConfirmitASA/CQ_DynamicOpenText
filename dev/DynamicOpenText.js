import ProgressBar from "./DynamicOpenText_progress-bar";
import CharacterCount from "./DynamicOpenText_character-count";
import Keywords from "./DynamicOpenText_keywords";

export default class DynamicOpenText {

    constructor(question, pbEnabled, pbHeight, pbPosition, pbMinValues, pbColors, pbPrompts, countEnabled, characterCount, keywordEnabled, keywordWords, keywordPrompts) {
        this.question = question;
        this.progressBarEnabled = pbEnabled;
        this.characterCountEnabled = countEnabled;
        this.keywordsEnabled = keywordEnabled;

        this.progressBar = new ProgressBar(question, pbHeight, pbPosition, pbMinValues, pbColors, pbPrompts);
        this.characterCount = new CharacterCount(question, characterCount);
        this.keywords = new Keywords(question, keywordWords, keywordPrompts);

    }

    render() {
        let questionInput = document.getElementById(this.question.id + "_input");
        questionInput.addEventListener("input", this.setValueToQuestion);

        if(this.progressBarEnabled) {
            this.progressBar.render();
        }

        if(this.characterCountEnabled) {
            this.characterCount.render();
        }

        if(this.keywordsEnabled) {
            this.keywords.render();
        }
    }

    setValueToQuestion = () => {
        let questionInput = document.getElementById(this.question.id + "_input");
        this.question.setValue(questionInput.value);
    }

    onQuestionValidationComplete() {
        console.log("validation check");
    }

}