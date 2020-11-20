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
        keywords: {},
        prompts: {}
    }
};

function setDefaultSettingsIfNeeded(settings) {
    if(!settings) {
        settings = defaultSettings;
    }
    else {
        for (var prop in defaultSettings) {
            if (!settings.hasOwnProperty(prop)) {
                settings[prop] = defaultSettings[prop];
            }
            for (var innerProp in defaultSettings[prop]) {
                if(innerProp === "prompts" || innerProp === "keywords") {
                    break;
                }
                if (!settings[prop].hasOwnProperty(innerProp) || (settings[prop].hasOwnProperty(innerProp) && settings[prop][innerProp] == "")) {
                    settings[prop][innerProp] = defaultSettings[prop][innerProp];
                }
            }
        }
    }

    let currentLanguage = String(Confirmit.page.surveyInfo.language);
    if (!settings.progressBar.prompts.hasOwnProperty(currentLanguage) || (settings.progressBar.prompts.hasOwnProperty(currentLanguage) && settings.progressBar.prompts[currentLanguage] == "")) {
        settings.progressBar.prompts[currentLanguage] = ['','',''];
    }
    if (!settings.keywords.keywords.hasOwnProperty(currentLanguage) || (settings.keywords.keywords.hasOwnProperty(currentLanguage) && settings.keywords.keywords[currentLanguage] == "")) {
        settings.keywords.keywords[currentLanguage] = [];
    }
    if (!settings.keywords.prompts.hasOwnProperty(currentLanguage) || (settings.keywords.prompts.hasOwnProperty(currentLanguage) && settings.keywords.prompts[currentLanguage] == "")) {
        settings.keywords.prompts[currentLanguage] = [];
    }
}

register(function (question, customQuestionSettings, questionViewSettings) {

    setDefaultSettingsIfNeeded(customQuestionSettings);

    const dynamicOpenText = new customQuestionsLibrary.DynamicOpenText(question, customQuestionSettings);
    dynamicOpenText.render();
});