/* global register */

//Confirmit DEMO question id bb9f993d-0c63-49bf-afb7-aebc01e2bf74

const defaultSettings = {
    pbEnabled: false,
    pbHeight: 5,
    pbPosition: '1',
    pbMinValues: [1,15,30],
    pbColors: ['#c41919','#e7e706','#4a964a'],
    pbPrompts: ['Good start','A little more information would be appreciated','Fantastic! Many thanks for your feedback'],
    countEnabled: false,
    showCharacterLimit: false,
    keywordEnabled: false,
    keywordWords: ["Hello"],
    keywordPrompts: ["This is a new prompt"]
};

register(function (question, customQuestionSettings, questionViewSettings) {

    let activeSettings = customQuestionSettings || defaultSettings;

    let pbEnabled = activeSettings.pbEnabled;
    let pbHeight = parseInt(activeSettings.pbHeight);
    let pbPosition = activeSettings.pbPosition;
    let pbMinValues = activeSettings.pbMinValues;
    let pbColors = activeSettings.pbColors;
    let pbPrompts = activeSettings.pbPrompts;

    let countEnabled = activeSettings.countEnabled;
    let showCharacterLimit = activeSettings.showCharacterLimit;

    let keywordEnabled = activeSettings.keywordEnabled;
    let keywordWords = activeSettings.keywordWords;
    let keywordPrompts = activeSettings.keywordPrompts;

    const dynamicOpenText = new customQuestionsLibrary.DynamicOpenText(question, pbEnabled, pbHeight, pbPosition, pbMinValues, pbColors, pbPrompts, countEnabled, showCharacterLimit, keywordEnabled, keywordWords, keywordPrompts);
    dynamicOpenText.render();
});