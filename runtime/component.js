/* global register */
//import ProgressBar from "../design/DynamicOpenText_progress-bar";
//import CharacterCount from "../design/DynamicOpenText_character-count";

const defaultSettings = {
    pbEnabled: true,
    pbHeight: 5,
    pbPosition: '1',
    pbMinValues: [1,15,30],
    pbColors: ['#ff0000','#ffff00','#00ff00'],
    pbPrompts: ['Good start','A little more information would be appreciated','Fantastic! Many thanks for your feedback'],
    countEnabled: false,
    characterCount: 0,
    keywordEnabled: false,
    keywordWords: [],
    keywordPrompts: []
};

register(function (question, customQuestionSettings, questionViewSettings) {

    var activeSettings = customQuestionSettings || defaultSettings;

    var pbEnabled = activeSettings.pbEnabled;
    var pbHeight = parseInt(activeSettings.pbHeight);
    var pbPosition = activeSettings.pbPosition;
    var pbMinValues = activeSettings.pbMinValues;
    var pbColors = activeSettings.pbColors;
    var pbPrompts = activeSettings.pbPrompts;

    var countEnabled = activeSettings.countEnabled;
    var characterCount = activeSettings.characterCount;

    var keywordEnabled = activeSettings.keywordEnabled;
    var keywordWords = activeSettings.keywordWords;
    var keywordPrompts = activeSettings.keywordPrompts;

    //var pb = new ProgressBar(question, pbHeight, pbPosition, pbMinValues, pbColors, pbPrompts);
    //var cc = new CharacterCount(question, characterCount);

    //pb.render();
    //cc.render();

    if(pbEnabled) {
        progressBar(question, pbHeight, pbPosition, pbMinValues, pbColors, pbPrompts);
    }

    if(countEnabled) {
        characterCounter(question, characterCount);
    }

    if(keywordEnabled) {
        keywords(question, keywordWords, keywordPrompts);
    }
});