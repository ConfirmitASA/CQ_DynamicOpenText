/* global register */
import DynamicOpenText from "./DynamicOpenText";
(function () {
    const question = Confirmit.page.questions[0];
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
            type: 'character',
            isCharacterLimitEnabled: false
        },
        keywords: {
            isEnabled: false,
            words: {},
            prompts: {}
        }
    };

    const DynamicOpenText = new DynamicOpenText(question, defaultSettings);
    DynamicOpenText.render();
})();
