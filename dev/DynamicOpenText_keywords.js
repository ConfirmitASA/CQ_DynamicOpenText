function keywords(question, keywordWords, keywordPrompts) {

    var keywordQuestion = question;
    var words = keywordWords ? keywordWords : [];
    var prompts = keywordPrompts ? keywordPrompts : [];

    var questionElement = document.getElementById(keywordQuestion.id);

    renderKeywords(questionElement, words, prompts);
}

function renderKeywords(questionElement, words, prompts) {

    var questionElement_textarea = questionElement.querySelectorAll('textarea')[0];

    var keywordElement = createKeywordElement(questionElement_textarea.offsetWidth);
    questionElement.appendChild(keywordElement);

    var newKeywords = organizeKeywords(words);

    questionElement_textarea.addEventListener("mouseup", function () {
        setWidth(keywordElement, questionElement_textarea.offsetWidth, "px");
    });

    questionElement_textarea.addEventListener("input", function () {
        updateKeywords(keywordElement, questionElement_textarea, newKeywords, prompts);
    });
}

function updateKeywords(keywordElement, textAreaElement, words, prompts) {
    var textValue = textAreaElement.value.trim().toLowerCase();
    var keywordList = keywordElement.firstElementChild;
    var existingItemsAsKeyword = []; //= Array.prototype.slice.call(keywordElement.querySelectorAll(".dynamic-keywords__item"));
    var existingItemsAsRow = [];

    for(var i = 0; i < words.length; i++) {
        for(var j = 0; j < words[i].length; j++) {
            existingItemsAsKeyword = Array.prototype.slice.call(keywordElement.querySelectorAll('.dynamic-keywords__item[keyword="' + words[i][j] + '"]'));
            existingItemsAsRow = Array.prototype.slice.call(keywordElement.querySelectorAll('.dynamic-keywords__item[row-id="row-id' + i + '"]'));

            if(textValue.indexOf(words[i][j]) > -1) {
                if(existingItemsAsRow.length == 0) {
                    keywordElement.firstElementChild.appendChild(createKeywordItem("row-id" + i, words[i][j], prompts[i]));
                    break;
                }
            } else {
                if(existingItemsAsKeyword.length > 0) {
                    existingItemsAsKeyword.forEach(function (existingItem) {
                        var removeChild = keywordList.removeChild(existingItem);
                    })
                }
            }
        }
    }
}

function organizeKeywords(words) {
    var newKeywords = [];

    words.forEach(function (wordRow) {
        var newRow = [];
        if(wordRow.length > 0) {
            newRow = wordRow.split(",");

            for(var i = 0; i < newRow.length; i++) {
                newRow[i] = newRow[i].trim().toLowerCase();
            }
        }

        newKeywords.push(newRow);
    });

    return newKeywords;
}

function createKeywordItem(rowId, keyword, prompt) {
    var keywordItem = document.createElement("li");
    keywordItem.className = "dynamic-keywords__item";
    keywordItem.innerHTML = prompt;
    keywordItem.setAttribute("row-id", rowId);
    keywordItem.setAttribute("keyword", keyword);

    return keywordItem;
}

function createKeywordElement(width) {
    var keywordElement = document.createElement("div");
    keywordElement.className += "cf-question__dynamic-keywords";
    keywordElement.style.width = width + "px";

    var keywordElementList = document.createElement("ul");
    keywordElementList.className += "dynamic-keywords__list";

    keywordElement.appendChild(keywordElementList);

    return keywordElement;
}