document.addEventListener('DOMContentLoaded', function(){
    let keywordButton = document.getElementsByClassName("keyword__button--add")[0];
    if(keywordButton) {
        let keywordButtonInput = keywordButton.querySelectorAll("button")[0];
        if (keywordButtonInput) {
            keywordButtonInput.onclick = addKeywordsRow;
        }
    }

    let pbCheckbox = document.getElementById("pbEnabled");
    let countCheckbox = document.getElementById("countEnabled");
    let keywordCheckbox = document.getElementById("keywordEnabled");

    let checkboxes = [pbCheckbox, countCheckbox, keywordCheckbox];

    checkboxes.forEach(function (box) {
        box.addEventListener("change", function () {
            hideSubsectionAfterBoxChecked(box);
        })
    })

});

function hideSubsectionAfterBoxChecked(checkboxElement) {
    let section = findParentOfClass(checkboxElement, "node-properties-key-fields");
    let subsection = section.querySelectorAll(".node-property__sub-content")[0];

    if (checkboxElement.checked) {
        subsection.classList.remove("hidden");
    } else {
        subsection.classList.add("hidden");
    }
}

function findParentOfClass(element, className) {
    let parent = element.parentElement;

    while(parent.className.indexOf(className) < 0) {
        parent = parent.parentElement;
    }

    return parent;
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