/*export default class ProgressBar {
    constructor(question, pbHeight, pbPosition, pbMinValues, pbColors, pbPrompts) {
        this.pbQuestion = question;
        this.pbHeight = pbHeight && pbHeight > 0 ? pbHeight : 20;
        this.pbPosition = pbPosition ? pbPosition : '2';
        this.pbMinValues = pbMinValues && pbMinValues.length > 0 ? pbMinValues : [1,15,30];
        this.pbColors = pbColors && pbColors.length > 0 ? pbColors : ['#ff0000','#ffff00','#00ff00'];
        this.pbPrompts = pbPrompts && pbPrompts.length > 0 ? pbPrompts : ['Good start','A little more information would be appreciated','Fantastic! Many thanks for your feedback'];
        this.pbBackgroundColor = '#F0F2F5';
    }

    render() {
        var questionElement = document.getElementById(this.question.id);
        var questionElement_content = questionElement.querySelectorAll('.cf-question__content')[0];
        var questionECement_textarea = questionElement_content.querySelectorAll('textarea')[0];

        var pbElement = document.createElement('div');
        pbElement.className += 'cf-question__dynamic-progress-bar';
        pbElement.style.height = this.pbHeight + 'px';
        pbElement.style.width = questionECement_textarea.style.width;
        pbElement.style.maxWidth = questionECement_textarea.style.maxWidth;
        pbElement.style.backgroundColor = this.pbBackgroundColor;
        pbElement.style.border = "1px solid #D6D8DC";
        pbElement.style.borderRadius = "3px";

        questionElement.insertBefore(pbElement, questionElement_content);
    }
}*/

function progressBar(question, height, position, minValues, colors, prompts) {
    var pbQuestion = question;
    var pbHeight = height && height > 0 ? height : 5;
    var pbPosition = position ? position : '1';
    var pbMinValues = minValues && minValues.length > 0 ? minValues : [1,15,30];
    var pbColors = colors && colors.length > 0 ? colors : ['#ff0000','#ffff00','#00ff00'];
    var pbPrompts = prompts && prompts.length > 0 ? prompts : ['Good start','A little more information would be appreciated','Fantastic! Many thanks for your feedback'];
    var pbBackgroundColor = '#F0F2F5';

    var questionElement = document.getElementById(pbQuestion.id);

    renderProgressBar(questionElement, pbHeight, pbPosition, pbMinValues, pbColors, pbPrompts, pbBackgroundColor);

}

function renderProgressBar(questionElement, height, position, minValues, colors, prompts, backgroundColor) {
    var questionElement_content = questionElement.querySelectorAll('.cf-question__content')[0];
    var questionElement_textarea = questionElement.querySelectorAll('textarea')[0];

    var pbElement = createBarElement(height, questionElement_textarea.offsetWidth, backgroundColor);
    questionElement.insertBefore(pbElement, questionElement_content);

    var promptElement = createPromptElement();

    switch (position) {
        case "1":
            questionElement.insertBefore(promptElement, pbElement);
            break;
        case "2":
            if(height < 15) {
                questionElement.insertBefore(promptElement, pbElement);
            } else {
                pbElement.lastElementChild.appendChild(promptElement);
            }
            break;
        case "3":
            questionElement.insertBefore(promptElement, pbElement.nextSibling);
            break;
    }

    var allValues = createArrayOfAllValues(minValues, colors, prompts);

    questionElement_textarea.addEventListener("input", function () {
        updatePrompt(promptElement, questionElement_textarea, allValues);
    });

    questionElement_textarea.addEventListener("keyup", function () {
        updateBarColor(pbElement, questionElement_textarea, allValues);
    })

    questionElement_textarea.addEventListener("mouseup", function () {
        setWidth(pbElement, questionElement_textarea.offsetWidth, "px");
    });
}

function updatePrompt(promptElement, textAreaElement, allValues) {
    var textLength = textAreaElement.value.length;

    if(textLength >= allValues[allValues.length - 1].value) {
        promptElement.innerHTML = allValues[allValues.length - 1].prompt;
    } else {
        if(textLength < allValues[0].value) {
            promptElement.innerHTML = "";
        } else {
            for(var i = 0; i < allValues.length - 1; i++) {
                if(textLength >= allValues[i].value && textLength < allValues[i + 1].value) {
                    promptElement.innerHTML = allValues[i].prompt;
                }
            }

        }
    }
}

function updateBarColor(pbElement, textAreaElement, allValues) {
    var textLength = textAreaElement.value.length;
    var pbElementContent = pbElement.lastElementChild;

    if(textLength >= allValues[allValues.length - 1].value) {
        pbElementContent.style.backgroundColor = allValues[allValues.length - 1].color;
        setWidth(pbElementContent, 100, "%");
        //animateBarColor(pbElementContent, 100);
    } else {
        if(textLength < allValues[0].value) {
            pbElementContent.style.backgroundColor = "transparent";
            setWidth(pbElementContent, 100, "%");
            //animateBarColor(pbElementContent, 1);
        } else {
            for(var i = 0; i < allValues.length - 1; i++) {
                if(textLength >= allValues[i].value && textLength < allValues[i + 1].value) {
                    var newWidth = 100/allValues.length * (i+1);
                    pbElementContent.style.backgroundColor = allValues[i].color;
                    setWidth(pbElementContent, newWidth, "%");
                    //animateBarColor(pbElementContent, newWidth);
                }
            }

        }
    }
}

function createBarElement(height, width, backgroundColor) {
    var pbElement = document.createElement('div');
    pbElement.className += 'cf-question__dynamic-progress-bar';
    pbElement.style.height = height + 'px';
    pbElement.style.width = width + 'px';
    pbElement.style.backgroundColor = backgroundColor;

    var pbElementContent = document.createElement('div');
    pbElementContent.className = "dynamic-progress-bar__content";
    pbElement.appendChild(pbElementContent);

    return pbElement;
}

function createPromptElement() {
    var promptElement = document.createElement('div');
    promptElement.className += 'cf-question__dynamic-progress-prompt';

    return promptElement;
}

function createArrayOfAllValues(minValues, colors, prompts) {
    var values = [];
    for(var i = 0; i < minValues.length; i++) {
        var obj = {
            value: minValues[i],
            color: colors[i],
            prompt: prompts[i]
        };
        values.push(obj);
    }

    values.sort(sortMinValuesAscending);

    return values;
}

function animateBarColor(pbElement, width) {
    $(pbElement).animate({width: width + "%"}, 350, function () {
        setWidth(pbElement, width, "%")
    });
}

function sortMinValuesAscending(a, b) {
    if (a.value > b.value ) return 1;
    if (a.value == b.value) return 0;
    if (a.value < b.value) return -1;
}