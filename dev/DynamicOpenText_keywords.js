import KeywordPromptPair from "./DynamicOpenText_keyword-prompt-pair";
import QuestionElementsGetters from "./QuestionElementsGetters";

export default class Keywords {
    constructor(question, settings) {
        this.currentLanguage = String(Confirmit.page.surveyInfo.language);

        this.question = question;
        this.words = settings.words[this.currentLanguage] ? settings.words[this.currentLanguage] : [];
        this.prompts = settings.prompts[this.currentLanguage] ? settings.prompts[this.currentLanguage] : [];
        this.keywordPromptPairs = this.organizeKeywords(this.words, this.prompts);

        this.questionElement = QuestionElementsGetters.getQuestionElement(this.question.id);
        this.questionElement_textarea = QuestionElementsGetters.getQuestionElement_Textarea(this.questionElement);
    }

    render() {
        let keywordElement = this.createKeywordElement(this.questionElement_textarea.offsetWidth);
        this.questionElement.appendChild(keywordElement);

        this.questionElement_textarea.addEventListener("input", this.updateKeywords);
        this.questionElement_textarea.addEventListener("mouseup", this.updateKeywordsWidth);
    }

    updateKeywords = () => {
        let keywordElement = QuestionElementsGetters.getKeywordsElement(this.questionElement);
        let enteredText = this.questionElement_textarea.value.trim().toLowerCase();
        let keywordList = keywordElement.firstElementChild;
        //When we have one prompt for multiple keywords, we need to show the prompt only once
        //In order to do that we use the same rowId for the keywords
        //If we already have a keywordItem it can be
        // a) for this exact keyword we are looking at -> existingItemsAsKeyword
        // b) for another keyword with the same prompt (and rowId) -> existingItemsAsRow
        let existingItemsAsKeyword = [];
        let existingItemsAsRow = [];

        for(const pair of this.keywordPromptPairs) {
            existingItemsAsKeyword = Array.prototype.slice.call(keywordElement.querySelectorAll('.dynamic-keywords__item[keyword="' + pair.keyword + '"]'));
            existingItemsAsRow = Array.prototype.slice.call(keywordElement.querySelectorAll('.dynamic-keywords__item[row-id="row-id' + pair.rowId + '"]'));

            if (pair.isMatching(enteredText)) {
                if (existingItemsAsRow.length === 0) {
                    keywordElement.firstElementChild.appendChild(this.createKeywordItem("row-id" + pair.rowId, pair.keyword, pair.prompt));
                    break;
                }
            } else {
                if (existingItemsAsKeyword.length > 0) {
                    Array.prototype.forEach.call(existingItemsAsKeyword, function (el) {
                        let removeChild = keywordList.removeChild(el);
                    })
                }
            }
        }
    }

    updateKeywordsWidth = () => {
        let keywordElement = QuestionElementsGetters.getKeywordsElement(this.questionElement);

        keywordElement.style.width = this.questionElement_textarea.offsetWidth + "px";
    }

    organizeKeywords(words, prompts) {
        let keywordPromptPairs = [];

        for(let i = 0; i < words.length; i++) {
            let wordRow = words[i];
            if(wordRow.length > 0) {
                let newRowSplit = wordRow.split(",");

                for(let j = 0; j < newRowSplit.length; j++) {
                    if(newRowSplit[j].trim().length > 0) {
                        let keyword = newRowSplit[j].trim().toLowerCase();
                        let pair = new KeywordPromptPair(keyword, prompts[i], i);
                        keywordPromptPairs.push(pair);
                    }
                }
            }
        }
        return keywordPromptPairs;
    }

    createKeywordItem(rowId, keyword, prompt) {
        let keywordItem = document.createElement("li");
        keywordItem.className = "dynamic-keywords__item";
        keywordItem.innerHTML = prompt;
        keywordItem.setAttribute("row-id", rowId);
        keywordItem.setAttribute("keyword", keyword);

        return keywordItem;
    }

    createKeywordElement(width) {
        let keywordElement = document.createElement("div");
        keywordElement.className += "cf-question__dynamic-keywords";
        keywordElement.style.width = width + "px";

        let keywordElementList = document.createElement("ul");
        keywordElementList.className += "dynamic-keywords__list";

        keywordElement.appendChild(keywordElementList);

        return keywordElement;
    }
}