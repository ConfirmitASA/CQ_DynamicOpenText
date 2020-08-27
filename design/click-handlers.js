document.addEventListener('DOMContentLoaded', function(){
    let keywordButton = document.getElementsByClassName("keyword__button--add")[0];
    let keywordButtonInput = keywordButton.querySelectorAll("button")[0];
    if(keywordButtonInput) {
        keywordButtonInput.onclick = addKeywordsRow;
    }

    function addKeywordsRow() {
        let keywordsTable = document.getElementsByClassName("keyword__options")[0];
        let keywordTableLastRow = keywordsTable.firstElementChild;
        let newRow = keywordTableLastRow.cloneNode(true);
        let newRowInputs = Array.prototype.slice.call(newRow.querySelectorAll("input"));

        newRowInputs.forEach(function (rowInput) {
            rowInput.value = '';
        });

        keywordsTable.appendChild(newRow);
    }
});

