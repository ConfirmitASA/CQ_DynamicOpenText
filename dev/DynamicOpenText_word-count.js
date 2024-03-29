import QuestionElementsGetters from "./QuestionElementsGetters";

const wordCountClass = "cf-question__dynamic-word-count";
export default class WordCount {
    constructor(question) {
        this.question = question;

        this.questionElement = QuestionElementsGetters.getQuestionElement(this.question.id);
        this.questionElement_textarea = QuestionElementsGetters.getQuestionElement_Textarea(this.questionElement);
    }

    render() {
        let element = document.createElement('div');
        element.className += wordCountClass;
        element.textContent = "0";

        this.questionElement.appendChild(element);

        this.updateCount();

        this.questionElement_textarea.addEventListener("input", this.updateCount);
    }

    updateCount = () => {
        let currentWordCount = this.countWords();
        let countElement = this.questionElement.querySelectorAll('.' + wordCountClass)[0];

        countElement.textContent = currentWordCount;
    }

    countWords = () => {
        let text = this.questionElement_textarea.value;

        if(text.length === 0) return  0;

        return this.getStringWithSingleSpacedWords(text).split(' ').length;
    }

    getStringWithSingleSpacedWords = (str) => {
        str = str.replace(/(^\s*)|(\s*$)/gi,""); //remove the start and end spaces
        str = str.replace(/[ ]{2,}/gi," "); //reduce multiple spaces to a single space
        str = str.replace(/ \n|\n | \n /g,"\n"); //exclude spaces near newlines
        str = str.replace(/[\n\r]/g, " "); //replace newlines and carriage returns with spaces

        return str;
    }
}