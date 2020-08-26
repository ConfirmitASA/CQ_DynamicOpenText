window.onload = function () {
    /*var sectionProgressHeader = document.getElementsByClassName("node-property__header--progress")[0];
    if(sectionProgressHeader) {
        var sectionProgressContent = document.getElementsByClassName("node-property__content--progress")[0];
        if(sectionProgressContent) {
            sectionProgressHeader.onclick = function() {
                sectionProgressContent.classList.toggle("hidden");
            }
        }
    }

    var sectionCountHeader = document.getElementsByClassName("node-property__header--count")[0];
    if(sectionCountHeader) {
        var sectionCountContent = document.getElementsByClassName("node-property__content--count")[0];
        sectionCountHeader.onclick = function() {
            sectionCountContent.classList.toggle("hidden");
        }
    }

    var sectionKeywordsHeader = document.getElementsByClassName("node-property__header--keyword")[0];
    if(sectionKeywordsHeader) {
        var sectionKeywordsContent = document.getElementsByClassName("node-property__content--keyword")[0];
        sectionKeywordsHeader.onclick = function() {
            sectionKeywordsContent.classList.toggle("hidden");
        }
    }*/

    var keywordButton = document.getElementsByClassName("keyword__button")[0];
    var keywordButtonInput = keywordButton.querySelectorAll("button")[0];
    if(keywordButtonInput) {
        keywordButtonInput.onclick = addKeywordsRow;
    }
}

function addKeywordsRow() {
    var keywordsTable = document.getElementsByClassName("keyword__options")[0];
    var keywordTableLastRow = keywordsTable.lastElementChild;
    var newRow = keywordTableLastRow.cloneNode(true);
    var newRowInputs = Array.prototype.slice.call(newRow.querySelectorAll("input"));

    newRowInputs.forEach(function (rowInput) {
        rowInput.value = '';
        rowInput.addEventListener('change', saveChanges);
    });

    keywordsTable.appendChild(newRow);
}