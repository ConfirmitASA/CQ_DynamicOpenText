document.addEventListener('DOMContentLoaded', subscribeKeywordButtonAddRowOnclick);

function subscribeKeywordButtonAddRowOnclick() {
    let keywordButtonInput;
    try {
        keywordButtonInput = document.querySelectorAll(".keyword__button--add button")[0];
    } catch (e) {
        console.log("Could not find button element for adding new keyword rows");
        return;
    }

    keywordButtonInput.onclick = addKeywordsRow;
}

document.addEventListener('DOMContentLoaded', subscribeCheckboxesHideSubsectionOnchange);

function subscribeCheckboxesHideSubsectionOnchange() {
    let progressBarCheckbox = document.getElementById("progressBarEnabled");
    let countCheckbox = document.getElementById("countEnabled");
    let keywordCheckbox = document.getElementById("keywordEnabled");
    let softWarningCheckbox = document.getElementById("softWarningEnabled");

    let checkboxes = [progressBarCheckbox, countCheckbox, keywordCheckbox, softWarningCheckbox];

    checkboxes.forEach(function (box) {
        if(box) {
            box.addEventListener("change", function () {
                hideSubsectionAfterBoxChecked(box);
            })
        }
    })
}

function hideSubsectionAfterBoxChecked(checkboxElement) {
    let section = findParentOfClass(checkboxElement, "node-properties-key-fields");
    let subsection;
    try{
        subsection = section.querySelectorAll(".node-property__sub-content")[0];
    }
    catch (e) {
        console.log("Could not find section sub-content (.node-property__sub-content)");
        return;
    }

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
    let keywordsTable;
    try {
        keywordsTable = document.getElementsByClassName("keyword__options")[0];
    }
    catch (e) {
        console.log("Could not find keyword table (.keyword__options)");
        return;
    }

    let keywordTableLastRow = keywordsTable.firstElementChild;
    let newRow = keywordTableLastRow.cloneNode(true);
    let newRowInputs = Array.prototype.slice.call(newRow.querySelectorAll("input"));

    newRowInputs.forEach(function (rowInput) {
        rowInput.value = '';
    });

    keywordsTable.appendChild(newRow);
}

document.addEventListener('DOMContentLoaded', subscribeCountTypeSelect);

function subscribeCountTypeSelect() {
    let selectElement = document.querySelector("#countType");
    if(!selectElement) {
        console.log("Could not find select with id = countType");
        return;
    }

    selectElement.addEventListener("change", function () {
        toggleCharacterLimitSubsection(selectElement);
    });
}

function toggleCharacterLimitSubsection(selectElement) {
    let subsection;
    try{
        subsection = document.querySelectorAll("#isCharacterLimitEnabled")[0];
        subsection = findParentOfClass(subsection, "co-toggle");
    }
    catch (e) {
        console.log("Could not find character limit subsection");
        return;
    }

    if (selectElement.value === "character") {
        subsection.classList.remove("hidden");
    } else {
        subsection.classList.add("hidden");
    }
}