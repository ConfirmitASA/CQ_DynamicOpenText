export default class QuestionElementsGetters {
    static getQuestionElement(questionId) {
        return document.getElementById(questionId) ?? "Could not find question with id " + questionId;
    }

    static getQuestionElement_Content(questionElement) {
        try {
            return questionElement.querySelectorAll('.cf-question__content')[0];
        } catch (e) {
            console.log("Could not find the cf-question__content");
        }
    }

    static getQuestionElement_Textarea(questionElement_content) {
        try {
            return questionElement_content.querySelectorAll('textarea')[0];
        } catch (e) {
            console.log("Could not find the textarea");
        }
    }

    static getProgressBarElement(questionElement) {
        try {
            return questionElement.getElementsByClassName('cf-question__dynamic-progress-bar')[0];
        } catch (e) {
            console.log("Could not find the progress bar element");
        }
    }

    static getProgressBarPromptElement(questionElement) {
        try {
            return questionElement.getElementsByClassName('cf-question__dynamic-progress-prompt')[0];
        } catch (e) {
            console.log("Could not find the progress bar prompt element");
        }
    }

    static getKeywordsElement(questionElement) {
        try {
            return questionElement.getElementsByClassName('cf-question__dynamic-keywords')[0];
        } catch (e) {
            console.log("Could not find the progress bar prompt element");
        }
    }
}