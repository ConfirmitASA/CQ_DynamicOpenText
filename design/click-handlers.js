window.onload = function () {
    var keywordButton = document.getElementsByClassName("keyword__button--add")[0];
    var keywordButtonInput = keywordButton.querySelectorAll("button")[0];
    if(keywordButtonInput) {
        keywordButtonInput.onclick = addKeywordsRow;
    }
}

function addKeywordsRow() {
    var keywordsTable = document.getElementsByClassName("keyword__options")[0];
    var keywordTableLastRow = keywordsTable.firstElementChild;
    var newRow = keywordTableLastRow.cloneNode(true);
    var newRowInputs = Array.prototype.slice.call(newRow.querySelectorAll("input"));

    newRowInputs.forEach(function (rowInput) {
        rowInput.value = '';
    });

    keywordsTable.appendChild(newRow);
}