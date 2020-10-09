import KeywordPromptPair from "./DynamicOpenText_keyword-prompt-pair";

export default class Keywords {
    constructor(question, keywordWords, keywordPrompts) {
        this.keywordQuestion = question;
        this.words = keywordWords ? keywordWords : [];
        this.prompts = keywordPrompts ? keywordPrompts : [];
        this.keywordPromptPairs = this.organizeKeywords(this.words, this.prompts);
    }

    render() {

        let questionElement = document.getElementById(this.keywordQuestion.id);
        let questionElement_textarea = questionElement.querySelectorAll('textarea')[0];

        let keywordElement = this.createKeywordElement(questionElement_textarea.offsetWidth);
        questionElement.appendChild(keywordElement);

        questionElement_textarea.addEventListener("input", this.updateKeywords);
        questionElement_textarea.addEventListener("mouseup", this.updateKeywordsWidth);
    }

    updateKeywords = () => {
        let questionElement = document.getElementById(this.keywordQuestion.id);
        let questionElement_textarea = questionElement.querySelectorAll('textarea')[0];
        let keywordElement = questionElement.getElementsByClassName("cf-question__dynamic-keywords")[0];
        let textValue = questionElement_textarea.value.trim().toLowerCase();
        let keywordList = keywordElement.firstElementChild;
        let existingItemsAsKeyword = [];
        let existingItemsAsRow = [];

        for(const pair of this.keywordPromptPairs) {
            existingItemsAsKeyword = Array.prototype.slice.call(keywordElement.querySelectorAll('.dynamic-keywords__item[keyword="' + pair.keyword + '"]'));
            existingItemsAsRow = Array.prototype.slice.call(keywordElement.querySelectorAll('.dynamic-keywords__item[row-id="row-id' + pair.rowId + '"]'));

            if (pair.matchingMethod(textValue)) {
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
        let questionElement = document.getElementById(this.keywordQuestion.id);
        let questionElement_textarea = questionElement.querySelectorAll('textarea')[0];
        let keywordElement = document.getElementsByClassName("cf-question__dynamic-keywords")[0];

        keywordElement.style.width = questionElement_textarea.offsetWidth + "px";
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