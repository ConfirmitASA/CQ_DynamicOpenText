/* global register */
import DynamicOpenText from "./DynamicOpenText";
(function () {
    const question = Confirmit.page.questions[0];
    const pbEnabled = false;
    const pbHeight = 5;
    const pbPosition = '1';
    const pbMinValues = [1,15,30];
    const pbColors = ['#ff0000','#ffff00','#00ff00'];
    const pbPrompts = ['Good start','A little more information would be appreciated','Fantastic! Many thanks for your feedback'];
    const countEnabled = false;
    const characterLimit = null;
    const showCharacterLimit = false;
    const keywordEnabled = false;
    const keywordWords = ["hello"];
    const keywordPrompts = ["This is a new prompt"];

    const DynamicOpenText = new DynamicOpenText(question, pbEnabled, pbHeight, pbPosition, pbMinValues, pbColors, pbPrompts, countEnabled, characterLimit, showCharacterLimit, keywordEnabled, keywordWords, keywordPrompts);
    DynamicOpenText.render();
})();
