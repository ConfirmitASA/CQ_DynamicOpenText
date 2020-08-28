export default class Keywords {
    constructor(question, keywordWords, keywordPrompts) {
        this.keywordQuestion = question;
        this.words = keywordWords ? keywordWords : [];
        this.prompts = keywordPrompts ? keywordPrompts : [];
        this.newKeywords = this.organizeKeywords(this.words);
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
        let keywordElement = document.getElementsByClassName("cf-question__dynamic-keywords")[0];
        let textValue = questionElement_textarea.value.trim().toLowerCase();
        let keywordList = keywordElement.firstElementChild;
        let existingItemsAsKeyword = [];
        let existingItemsAsRow = [];

        for(let i = 0; i < this.newKeywords.length; i++) for (let j = 0; j < this.newKeywords[i].length; j++) {
            existingItemsAsKeyword = Array.prototype.slice.call(keywordElement.querySelectorAll('.dynamic-keywords__item[keyword="' + this.newKeywords[i][j] + '"]'));
            existingItemsAsRow = Array.prototype.slice.call(keywordElement.querySelectorAll('.dynamic-keywords__item[row-id="row-id' + i + '"]'));

            if (textValue.indexOf(this.newKeywords[i][j]) > -1) {
                if (existingItemsAsRow.length === 0) {
                    keywordElement.firstElementChild.appendChild(this.createKeywordItem("row-id" + i, this.newKeywords[i][j], this.prompts[i]));
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

    organizeKeywords(words) {
        let newKeywords = [];

        words.forEach(function (wordRow) {
            let newRow = [];
            if(wordRow.length > 0) {
                newRow = wordRow.split(",");

                for(let i = 0; i < newRow.length; i++) {
                    newRow[i] = newRow[i].trim().toLowerCase();
                }
            }

            newKeywords.push(newRow);
        });

        return newKeywords;
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