/* global register */

const defaultSettings = {
    pbEnabled: false,
    pbHeight: 5,
    pbPosition: '1',
    pbMinValues: [1,15,30],
    pbColors: ['#c41919','#e7e706','#4a964a'],
    pbPrompts: ['Good start','A little more information would be appreciated','Fantastic! Many thanks for your feedback'],
    countEnabled: false,
    characterCount: 150,
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
    let characterCount = activeSettings.characterCount;

    let keywordEnabled = activeSettings.keywordEnabled;
    let keywordWords = activeSettings.keywordWords;
    let keywordPrompts = activeSettings.keywordPrompts;

    const dynamicOpenText = new customQuestionsLibrary.DynamicOpenText(question, pbEnabled, pbHeight, pbPosition, pbMinValues, pbColors, pbPrompts, countEnabled, characterCount, keywordEnabled, keywordWords, keywordPrompts);
    dynamicOpenText.render();
});