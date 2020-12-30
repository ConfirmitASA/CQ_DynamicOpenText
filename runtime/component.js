/* global register */

//Confirmit DEMO question id bb9f993d-0c63-49bf-afb7-aebc01e2bf74
//Confirmit DEV question id f8278f96-a12c-434f-91fa-fc1a9aef1b6e

const defaultSettings = {
    progressBar: {
        isEnabled: false,
        height: 5,
        position: 'above',
        minValues: [1,15,30],
        colors: ['#ff0000','#ffff00','#00ff00'],
        prompts: {}
    },
    characterCount: {
        isEnabled: false,
        isCharacterLimitEnabled: false
    },
    keywords: {
        isEnabled: false,
        words: {},
        prompts: {}
    }
};

function getDefaultSettingsIfNeeded(existingSettings) {
    var settings = existingSettings;

    if(!settings) {
        settings = defaultSettings;
    } else {
        for (var prop in defaultSettings) {
            if (!settings.hasOwnProperty(prop)) {
                settings[prop] = defaultSettings[prop];
            }

            for (var innerProp in defaultSettings[prop]) {
                if (!settings[prop].hasOwnProperty(innerProp) || (settings[prop].hasOwnProperty(innerProp) && settings[prop][innerProp] == "")) {
                    settings[prop][innerProp] = defaultSettings[prop][innerProp];
                }
            }
        }
    }

    var currentLanguage = String(Confirmit.page.surveyInfo.language);

    if (!settings.progressBar.prompts.hasOwnProperty(currentLanguage) || (settings.progressBar.prompts.hasOwnProperty(currentLanguage) && settings.progressBar.prompts[currentLanguage] == "")) {
        settings.progressBar.prompts[currentLanguage] = ['','',''];
    }

    if (!settings.keywords.words.hasOwnProperty(currentLanguage) || (settings.keywords.words.hasOwnProperty(currentLanguage) && settings.keywords.words[currentLanguage] == "")) {
        settings.keywords.words[currentLanguage] = [];
    }

    if (!settings.keywords.prompts.hasOwnProperty(currentLanguage) || (settings.keywords.prompts.hasOwnProperty(currentLanguage) && settings.keywords.prompts[currentLanguage] == "")) {
        settings.keywords.prompts[currentLanguage] = [];
    }

    return settings;
}

function getNewStructuredSettings(settings) {
    var newSettings = {
        progressBar: {},
        characterCount: {},
        keywords: {}
    };

    newSettings.progressBar.isEnabled = settings.pbEnabled;
    newSettings.progressBar.height = settings.pbHeight;
    newSettings.progressBar.position = settings.pbPosition;
    newSettings.progressBar.minValues = settings.pbMinValues;
    newSettings.progressBar.colors = settings.pbColors;
    newSettings.progressBar.prompts = settings.pbPrompts;

    newSettings.characterCount.isEnabled = settings.countEnabled;
    newSettings.characterCount.isCharacterLimitEnabled = settings.showCharacterLimit;

    newSettings.keywords.isEnabled = settings.keywordEnabled;
    newSettings.keywords.words = settings.keywordWords;
    newSettings.keywords.prompts = settings.keywordPrompts;

    return newSettings;
}

register(function (question, customQuestionSettings, questionViewSettings) {

    //The new structure of settings was created during the first code refactoring
    //which unlike previous one has subsections for progressBar, counter and keywords settings.
    //A conversion needs to be made in order already existing questions to work properly (in index.html as well)
    if(!!customQuestionSettings && customQuestionSettings.hasOwnProperty("pbEnabled")) {
        customQuestionSettings = getNewStructuredSettings(customQuestionSettings);
    }

    customQuestionSettings = getDefaultSettingsIfNeeded(customQuestionSettings);

    const dynamicOpenText = new customQuestionsLibrary.DynamicOpenText(question, customQuestionSettings);
    dynamicOpenText.render();
});