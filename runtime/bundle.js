/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./dev/QuestionElementsGetters.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var QuestionElementsGetters = /*#__PURE__*/function () {
  function QuestionElementsGetters() {
    _classCallCheck(this, QuestionElementsGetters);
  }

  _createClass(QuestionElementsGetters, null, [{
    key: "getQuestionElement",
    value: function getQuestionElement(questionId) {
      try {
        return document.getElementById(questionId);
      } catch (e) {
        console.log("Could not find question with id " + questionId);
      }
    }
  }, {
    key: "getQuestionElement_Content",
    value: function getQuestionElement_Content(questionElement) {
      try {
        return questionElement.querySelectorAll('.cf-question__content')[0];
      } catch (e) {
        console.log("Could not find the cf-question__content");
      }
    }
  }, {
    key: "getQuestionElement_Textarea",
    value: function getQuestionElement_Textarea(questionElement_content) {
      try {
        return questionElement_content.querySelectorAll('textarea')[0];
      } catch (e) {
        console.log("Could not find the textarea");
      }
    }
  }, {
    key: "getProgressBarElement",
    value: function getProgressBarElement(questionElement) {
      try {
        return questionElement.getElementsByClassName('cf-question__dynamic-progress-bar')[0];
      } catch (e) {
        console.log("Could not find the progress bar element");
      }
    }
  }, {
    key: "getProgressBarPromptElement",
    value: function getProgressBarPromptElement(questionElement) {
      try {
        return questionElement.getElementsByClassName('cf-question__dynamic-progress-prompt')[0];
      } catch (e) {
        console.log("Could not find the progress bar prompt element");
      }
    }
  }, {
    key: "getKeywordsElement",
    value: function getKeywordsElement(questionElement) {
      try {
        return questionElement.getElementsByClassName('cf-question__dynamic-keywords')[0];
      } catch (e) {
        console.log("Could not find the progress bar prompt element");
      }
    }
  }]);

  return QuestionElementsGetters;
}();


// CONCATENATED MODULE: ./dev/DynamicOpenText_progress-bar.js
function DynamicOpenText_progress_bar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DynamicOpenText_progress_bar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DynamicOpenText_progress_bar_createClass(Constructor, protoProps, staticProps) { if (protoProps) DynamicOpenText_progress_bar_defineProperties(Constructor.prototype, protoProps); if (staticProps) DynamicOpenText_progress_bar_defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var promptPosition = Object.freeze({
  "above": "1",
  "inside": "2",
  "below": "3"
});

var DynamicOpenText_progress_bar_ProgressBar = /*#__PURE__*/function () {
  function ProgressBar(question, settings) {
    var _this = this;

    DynamicOpenText_progress_bar_classCallCheck(this, ProgressBar);

    _defineProperty(this, "updatePrompt", function () {
      var promptElement = QuestionElementsGetters.getProgressBarPromptElement(_this.questionElement);
      var answerTextLength = _this.questionElement_textarea.value.length;

      if (answerTextLength >= _this.promptsSettings[_this.promptsSettings.length - 1].value) {
        promptElement.innerHTML = _this.promptsSettings[_this.promptsSettings.length - 1].prompt;
      } else {
        if (answerTextLength < _this.promptsSettings[0].value) {
          promptElement.innerHTML = "";
        } else {
          for (var i = 0; i < _this.promptsSettings.length - 1; i++) {
            if (answerTextLength >= _this.promptsSettings[i].value && answerTextLength < _this.promptsSettings[i + 1].value) {
              promptElement.innerHTML = _this.promptsSettings[i].prompt;
            }
          }
        }
      }
    });

    _defineProperty(this, "updateBarColor", function () {
      var barElement = QuestionElementsGetters.getProgressBarElement(_this.questionElement);
      var answerTextLength = _this.questionElement_textarea.value.length;
      var barElementContent = barElement.lastElementChild;

      if (answerTextLength >= _this.promptsSettings[_this.promptsSettings.length - 1].value) {
        barElementContent.style.backgroundColor = _this.promptsSettings[_this.promptsSettings.length - 1].color;

        _this.setWidth(barElementContent, 100, "%");
      } else {
        if (answerTextLength < _this.promptsSettings[0].value) {
          barElementContent.style.backgroundColor = "transparent";

          _this.setWidth(barElementContent, 0, "%");
        } else {
          for (var i = 0; i < _this.promptsSettings.length - 1; i++) {
            if (answerTextLength >= _this.promptsSettings[i].value && answerTextLength < _this.promptsSettings[i + 1].value) {
              var newWidth = 100 / _this.promptsSettings.length * (i + 1);

              _this.setWidth(barElementContent, newWidth, "%");

              barElementContent.style.backgroundColor = _this.promptsSettings[i].color;
            }
          }
        }
      }
    });

    _defineProperty(this, "updateBarWidth", function () {
      var barElement = QuestionElementsGetters.getProgressBarElement(_this.questionElement);
      barElement.style.width = _this.questionElement_textarea.offsetWidth + 'px';
    });

    _defineProperty(this, "adjustPromptPositionIfInsideBar", function () {
      var barElement = QuestionElementsGetters.getProgressBarElement(_this.questionElement);
      var promptElement = QuestionElementsGetters.getProgressBarPromptElement(_this.questionElement);

      var barWidth = _this.questionElement.querySelectorAll('textarea')[0].offsetWidth;

      var promptWidth = promptElement.scrollWidth;
      var promptInsideClass = "cf-question__dynamic-progress-prompt--inside";

      if (promptElement.classList.contains(promptInsideClass) && barWidth < promptWidth) {
        _this.questionElement.insertBefore(promptElement, barElement);

        promptElement.classList.remove(promptInsideClass);
      }

      if (!promptElement.classList.contains(promptInsideClass) && barWidth > promptWidth) {
        barElement.lastElementChild.appendChild(promptElement);
        promptElement.classList.add(promptInsideClass);
      }
    });

    this.currentLanguage = String(Confirmit.page.surveyInfo.language);
    this.question = question;
    this.height = settings.height && settings.height > 0 ? settings.height : 5;
    this.position = settings.position ? settings.position : promptPosition.above;
    this.minValues = settings.minValues && settings.minValues.length > 0 ? settings.minValues : [1, 15, 30];
    this.colors = settings.colors && settings.colors.length > 0 ? settings.colors : ['#ff0000', '#ffff00', '#00ff00'];
    this.prompts = settings.prompts[this.currentLanguage] && settings.prompts[this.currentLanguage].length > 0 ? settings.prompts[this.currentLanguage] : ["", "", ""];
    this.backgroundColor = '#F0F2F5';
    this.promptsSettings = this.createArrayOfPromptsSettings(this.minValues, this.colors, this.prompts);
    this.questionElement = QuestionElementsGetters.getQuestionElement(this.question.id);
    this.questionElement_textarea = QuestionElementsGetters.getQuestionElement_Textarea(this.questionElement);
  }

  DynamicOpenText_progress_bar_createClass(ProgressBar, [{
    key: "render",
    value: function render() {
      if (this.promptsSettings.length > 0) {
        var questionElement_content = QuestionElementsGetters.getQuestionElement_Content(this.questionElement);
        var barElement = this.createBarElement(this.height, this.questionElement_textarea.offsetWidth, this.backgroundColor);
        this.questionElement.insertBefore(barElement, questionElement_content);
        var promptElement = this.createPromptElement();

        switch (this.position) {
          case promptPosition.above:
            this.questionElement.insertBefore(promptElement, barElement);
            break;

          case promptPosition.inside:
            if (this.height < 15) {
              this.questionElement.insertBefore(promptElement, barElement);
            } else {
              barElement.lastElementChild.appendChild(promptElement);
            }

            break;

          case promptPosition.below:
            this.questionElement.insertBefore(promptElement, barElement.nextSibling);
            break;
        }

        this.updatePrompt();
        this.updateBarColor();

        if (this.questionElement_textarea.offsetWidth > 0) {
          this.updateBarWidth();
        } else {
          var _barElement = QuestionElementsGetters.getProgressBarElement(this.questionElement);

          _barElement.style.width = '480px';
        }

        this.questionElement_textarea.addEventListener("input", this.updatePrompt);
        this.questionElement_textarea.addEventListener("keyup", this.updateBarColor);
        this.questionElement_textarea.addEventListener("mouseup", this.updateBarWidth);

        if (this.position === promptPosition.inside && this.height >= 15) {
          promptElement.classList.add("cf-question__dynamic-progress-prompt--inside");
          this.adjustPromptPositionIfInsideBar();
          this.questionElement_textarea.addEventListener("mouseup", this.adjustPromptPositionIfInsideBar);
          this.questionElement_textarea.addEventListener("input", this.adjustPromptPositionIfInsideBar);
          window.addEventListener("resize", this.adjustPromptPositionIfInsideBar);
        }
      }
    }
  }, {
    key: "createBarElement",
    value: function createBarElement(height, width, backgroundColor) {
      var barElement = document.createElement('div');
      barElement.className += 'cf-question__dynamic-progress-bar';
      barElement.style.height = height + 'px';
      barElement.style.width = width + 'px';
      barElement.style.backgroundColor = backgroundColor;
      var barElementContent = document.createElement('div');
      barElementContent.className = "dynamic-progress-bar__content";
      barElement.appendChild(barElementContent);
      return barElement;
    }
  }, {
    key: "createPromptElement",
    value: function createPromptElement() {
      var promptElement = document.createElement('div');
      promptElement.className += 'cf-question__dynamic-progress-prompt';
      return promptElement;
    }
  }, {
    key: "createArrayOfPromptsSettings",
    value: function createArrayOfPromptsSettings(minValues, colors, prompts) {
      var values = [];

      for (var i = 0; i < minValues.length; i++) {
        if (!!minValues[i]) {
          var obj = {
            value: minValues[i],
            color: colors[i],
            prompt: prompts[i]
          };
          values.push(obj);
        }
      }

      values.sort(this.sortMinValuesAscending);
      return values;
    }
  }, {
    key: "sortMinValuesAscending",
    value: function sortMinValuesAscending(a, b) {
      if (a.value > b.value) return 1;
      if (a.value === b.value) return 0;
      if (a.value < b.value) return -1;
    }
  }, {
    key: "setWidth",
    value: function setWidth(barElement, width, widthType) {
      barElement.style.width = width + widthType;
    }
  }]);

  return ProgressBar;
}();


// CONCATENATED MODULE: ./dev/DynamicOpenText_character-count.js
function DynamicOpenText_character_count_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DynamicOpenText_character_count_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DynamicOpenText_character_count_createClass(Constructor, protoProps, staticProps) { if (protoProps) DynamicOpenText_character_count_defineProperties(Constructor.prototype, protoProps); if (staticProps) DynamicOpenText_character_count_defineProperties(Constructor, staticProps); return Constructor; }

function DynamicOpenText_character_count_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var characterCounterClass = "cf-question__dynamic-character-counter";

var DynamicOpenText_character_count_CharacterCount = /*#__PURE__*/function () {
  function CharacterCount(question, settings) {
    var _this = this;

    DynamicOpenText_character_count_classCallCheck(this, CharacterCount);

    DynamicOpenText_character_count_defineProperty(this, "updateCount", function () {
      var currentCharacterCount = _this.questionElement_textarea.value.length;

      var countElement = _this.questionElement.querySelectorAll('.' + characterCounterClass)[0];

      countElement.textContent = currentCharacterCount;

      if (_this.isCharacterLimitEnabled && !!_this.characterLimit) {
        countElement.textContent += "/" + _this.characterLimit;
      }
    });

    this.question = question;
    this.characterLimit = this.question.maxLength;
    this.isCharacterLimitEnabled = settings.isCharacterLimitEnabled;
    this.questionElement = QuestionElementsGetters.getQuestionElement(this.question.id);
    this.questionElement_textarea = QuestionElementsGetters.getQuestionElement_Textarea(this.questionElement);
  }

  DynamicOpenText_character_count_createClass(CharacterCount, [{
    key: "render",
    value: function render() {
      var element = document.createElement('div');
      element.className += characterCounterClass;
      element.textContent = "0";

      if (this.isCharacterLimitEnabled && !!this.characterLimit) {
        element.textContent += "/" + this.characterLimit;
      }

      this.questionElement.appendChild(element);
      this.updateCount();
      this.questionElement_textarea.addEventListener("input", this.updateCount);
    }
  }]);

  return CharacterCount;
}();


// CONCATENATED MODULE: ./dev/DynamicOpenText_keyword-prompt-pair.js
function DynamicOpenText_keyword_prompt_pair_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DynamicOpenText_keyword_prompt_pair_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DynamicOpenText_keyword_prompt_pair_createClass(Constructor, protoProps, staticProps) { if (protoProps) DynamicOpenText_keyword_prompt_pair_defineProperties(Constructor.prototype, protoProps); if (staticProps) DynamicOpenText_keyword_prompt_pair_defineProperties(Constructor, staticProps); return Constructor; }

var KeywordPromptPair = /*#__PURE__*/function () {
  function KeywordPromptPair(keyword, prompt, rowId) {
    DynamicOpenText_keyword_prompt_pair_classCallCheck(this, KeywordPromptPair);

    this.keyword = keyword;
    this.prompt = prompt;
    this.rowId = rowId;
    this.isMatching = this.addMatchingMethod();
  }

  DynamicOpenText_keyword_prompt_pair_createClass(KeywordPromptPair, [{
    key: "addMatchingMethod",
    value: function addMatchingMethod() {
      if (this.keyword[0] === "^" && this.keyword.length > 1) {
        this.keyword = this.keyword.substr(1);
        return this.hasPrefix;
      }

      if (this.keyword[0] === "$" && this.keyword.length > 1) {
        this.keyword = this.keyword.substr(1);
        return this.hasSuffix;
      }

      if (this.isPunctuationOrSymbol(this.keyword, 0)) {
        return this.hasOccurrence;
      } else {
        return this.hasFullMatch;
      }
    }
  }, {
    key: "isPunctuationOrSymbol",
    value: function isPunctuationOrSymbol(str, ind) {
      var re = /(?:[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F])|(?:[\+<->\|~\xAC\xB1\xD7\xF7\u03F6\u0606-\u0608\u2044\u2052\u207A-\u207C\u208A-\u208C\u2118\u2140-\u2144\u214B\u2190-\u2194\u219A\u219B\u21A0\u21A3\u21A6\u21AE\u21CE\u21CF\u21D2\u21D4\u21F4-\u22FF\u2320\u2321\u237C\u239B-\u23B3\u23DC-\u23E1\u25B7\u25C1\u25F8-\u25FF\u266F\u27C0-\u27C4\u27C7-\u27E5\u27F0-\u27FF\u2900-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2AFF\u2B30-\u2B44\u2B47-\u2B4C\uFB29\uFE62\uFE64-\uFE66\uFF0B\uFF1C-\uFF1E\uFF5C\uFF5E\uFFE2\uFFE9-\uFFEC]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1])|(?:[\$\xA2-\xA5\u058F\u060B\u07FE\u07FF\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BF\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]|\uD807[\uDFDD-\uDFE0]|\uD838\uDEFF|\uD83B\uDCB0)|\^/;
      return str[ind].match(re) !== null;
    }
  }, {
    key: "hasFullMatch",
    value: function hasFullMatch(text) {
      var foundIndex = text.indexOf(this.keyword);
      var hasMatch = false;

      while (foundIndex !== -1) {
        var leftBoundaryIndex = foundIndex - 1;
        var rightBoundaryIndex = foundIndex + this.keyword.length;
        var isInTheBeginning = leftBoundaryIndex < 0;
        var isInTheEnd = rightBoundaryIndex > text.length - 1;

        if (!isInTheBeginning && !isInTheEnd) {
          hasMatch = this.isLeftWordBorder(text, leftBoundaryIndex) && this.isRightWordBorder(text, rightBoundaryIndex);
        } else if (!isInTheBeginning) {
          hasMatch = this.isLeftWordBorder(text, leftBoundaryIndex);
        } else if (!isInTheEnd) {
          hasMatch = this.isRightWordBorder(text, rightBoundaryIndex);
        } else {
          hasMatch = true;
        }

        if (!hasMatch) {
          foundIndex = text.indexOf(this.keyword, foundIndex + 1);
        } else {
          break;
        }
      }

      return hasMatch;
    }
  }, {
    key: "isRightWordBorder",
    value: function isRightWordBorder(str, ind) {
      if (str.length === ind) {
        return true;
      }

      var re = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]|(?:[\+<->\|~\xAC\xB1\xD7\xF7\u03F6\u0606-\u0608\u2044\u2052\u207A-\u207C\u208A-\u208C\u2118\u2140-\u2144\u214B\u2190-\u2194\u219A\u219B\u21A0\u21A3\u21A6\u21AE\u21CE\u21CF\u21D2\u21D4\u21F4-\u22FF\u2320\u2321\u237C\u239B-\u23B3\u23DC-\u23E1\u25B7\u25C1\u25F8-\u25FF\u266F\u27C0-\u27C4\u27C7-\u27E5\u27F0-\u27FF\u2900-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2AFF\u2B30-\u2B44\u2B47-\u2B4C\uFB29\uFE62\uFE64-\uFE66\uFF0B\uFF1C-\uFF1E\uFF5C\uFF5E\uFFE2\uFFE9-\uFFEC]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1])|(?:[\$\xA2-\xA5\u058F\u060B\u07FE\u07FF\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BF\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]|\uD807[\uDFDD-\uDFE0]|\uD838\uDEFF|\uD83B\uDCB0)|(?:[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F])/;
      return str[ind].match(re) !== null;
    }
  }, {
    key: "isLeftWordBorder",
    value: function isLeftWordBorder(str, ind) {
      if (ind === -1) {
        return true;
      }

      var re = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]|(?:[\+<->\|~\xAC\xB1\xD7\xF7\u03F6\u0606-\u0608\u2044\u2052\u207A-\u207C\u208A-\u208C\u2118\u2140-\u2144\u214B\u2190-\u2194\u219A\u219B\u21A0\u21A3\u21A6\u21AE\u21CE\u21CF\u21D2\u21D4\u21F4-\u22FF\u2320\u2321\u237C\u239B-\u23B3\u23DC-\u23E1\u25B7\u25C1\u25F8-\u25FF\u266F\u27C0-\u27C4\u27C7-\u27E5\u27F0-\u27FF\u2900-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2AFF\u2B30-\u2B44\u2B47-\u2B4C\uFB29\uFE62\uFE64-\uFE66\uFF0B\uFF1C-\uFF1E\uFF5C\uFF5E\uFFE2\uFFE9-\uFFEC]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1])|(?:[\$\xA2-\xA5\u058F\u060B\u07FE\u07FF\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BF\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]|\uD807[\uDFDD-\uDFE0]|\uD838\uDEFF|\uD83B\uDCB0)|(?:[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F])/;
      return str[ind].match(re) !== null;
    }
  }, {
    key: "hasOccurrence",
    value: function hasOccurrence(text) {
      return text.indexOf(this.keyword) !== -1;
    }
  }, {
    key: "hasSuffix",
    value: function hasSuffix(text) {
      var hasMatch = false;
      var foundIndex = text.indexOf(this.keyword);

      while (foundIndex !== -1) {
        var rightBoundaryIndex = foundIndex + this.keyword.length;
        hasMatch = this.isRightWordBorder(text, rightBoundaryIndex);

        if (!hasMatch) {
          foundIndex = text.indexOf(this.keyword, foundIndex + 1);
        } else {
          break;
        }
      }

      return hasMatch;
    }
  }, {
    key: "hasPrefix",
    value: function hasPrefix(text) {
      var hasMatch = false;
      var foundIndex = text.indexOf(this.keyword);

      while (foundIndex !== -1) {
        var leftBoundaryIndex = foundIndex - 1;
        hasMatch = this.isLeftWordBorder(text, leftBoundaryIndex);

        if (!hasMatch) {
          foundIndex = text.indexOf(this.keyword, foundIndex + 1);
        } else {
          break;
        }
      }

      return hasMatch;
    }
  }]);

  return KeywordPromptPair;
}();


// CONCATENATED MODULE: ./dev/DynamicOpenText_keywords.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function DynamicOpenText_keywords_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DynamicOpenText_keywords_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DynamicOpenText_keywords_createClass(Constructor, protoProps, staticProps) { if (protoProps) DynamicOpenText_keywords_defineProperties(Constructor.prototype, protoProps); if (staticProps) DynamicOpenText_keywords_defineProperties(Constructor, staticProps); return Constructor; }

function DynamicOpenText_keywords_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var DynamicOpenText_keywords_Keywords = /*#__PURE__*/function () {
  function Keywords(question, settings) {
    var _this = this;

    DynamicOpenText_keywords_classCallCheck(this, Keywords);

    DynamicOpenText_keywords_defineProperty(this, "updateKeywords", function () {
      var keywordElement = QuestionElementsGetters.getKeywordsElement(_this.questionElement);

      var enteredText = _this.questionElement_textarea.value.trim().toLowerCase();

      var keywordList = keywordElement.firstElementChild; //When we have one prompt for multiple keywords, we need to show the prompt only once
      //In order to do that we use the same rowId for the keywords
      //If we already have a keywordItem it can be
      // a) for this exact keyword we are looking at -> existingItemsAsKeyword
      // b) for another keyword with the same prompt (and rowId) -> existingItemsAsRow

      var existingItemsAsKeyword = [];
      var existingItemsAsRow = [];

      var _iterator = _createForOfIteratorHelper(_this.keywordPromptPairs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var pair = _step.value;
          existingItemsAsKeyword = Array.prototype.slice.call(keywordElement.querySelectorAll('.dynamic-keywords__item[keyword="' + pair.keyword + '"]'));
          existingItemsAsRow = Array.prototype.slice.call(keywordElement.querySelectorAll('.dynamic-keywords__item[row-id="row-id' + pair.rowId + '"]'));

          if (pair.isMatching(enteredText)) {
            if (existingItemsAsRow.length === 0) {
              keywordElement.firstElementChild.appendChild(_this.createKeywordItem("row-id" + pair.rowId, pair.keyword, pair.prompt));
            }
          } else {
            if (existingItemsAsKeyword.length > 0) {
              Array.prototype.forEach.call(existingItemsAsKeyword, function (el) {
                var removeChild = keywordList.removeChild(el);
              });
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });

    DynamicOpenText_keywords_defineProperty(this, "updateKeywordsWidth", function () {
      var keywordElement = QuestionElementsGetters.getKeywordsElement(_this.questionElement);
      keywordElement.style.width = _this.questionElement_textarea.offsetWidth + "px";
    });

    this.currentLanguage = String(Confirmit.page.surveyInfo.language);
    this.question = question;
    this.words = settings.words[this.currentLanguage] ? settings.words[this.currentLanguage] : [];
    this.prompts = settings.prompts[this.currentLanguage] ? settings.prompts[this.currentLanguage] : [];
    this.keywordPromptPairs = this.organizeKeywords(this.words, this.prompts);
    this.questionElement = QuestionElementsGetters.getQuestionElement(this.question.id);
    this.questionElement_textarea = QuestionElementsGetters.getQuestionElement_Textarea(this.questionElement);
  }

  DynamicOpenText_keywords_createClass(Keywords, [{
    key: "render",
    value: function render() {
      var keywordElement = this.createKeywordElement(this.questionElement_textarea.offsetWidth);
      this.questionElement.appendChild(keywordElement);
      this.updateKeywords();
      this.updateKeywordsWidth();
      this.questionElement_textarea.addEventListener("input", this.updateKeywords);
      this.questionElement_textarea.addEventListener("mouseup", this.updateKeywordsWidth);
    }
  }, {
    key: "organizeKeywords",
    value: function organizeKeywords(words, prompts) {
      var keywordPromptPairs = [];

      for (var i = 0; i < words.length; i++) {
        var wordRow = words[i];

        if (wordRow.length > 0) {
          var newRowSplit = wordRow.split(",");

          for (var j = 0; j < newRowSplit.length; j++) {
            if (newRowSplit[j].trim().length > 0) {
              var keyword = newRowSplit[j].trim().toLowerCase();
              var pair = new KeywordPromptPair(keyword, prompts[i], i);
              keywordPromptPairs.push(pair);
            }
          }
        }
      }

      return keywordPromptPairs;
    }
  }, {
    key: "createKeywordItem",
    value: function createKeywordItem(rowId, keyword, prompt) {
      var keywordItem = document.createElement("li");
      keywordItem.className = "dynamic-keywords__item";
      keywordItem.innerHTML = prompt;
      keywordItem.setAttribute("row-id", rowId);
      keywordItem.setAttribute("keyword", keyword);
      return keywordItem;
    }
  }, {
    key: "createKeywordElement",
    value: function createKeywordElement(width) {
      var keywordElement = document.createElement("div");
      keywordElement.className += "cf-question__dynamic-keywords";
      keywordElement.style.width = width + "px";
      var keywordElementList = document.createElement("ul");
      keywordElementList.className += "dynamic-keywords__list";
      keywordElement.appendChild(keywordElementList);
      return keywordElement;
    }
  }]);

  return Keywords;
}();


// CONCATENATED MODULE: ./dev/DynamicOpenText.js
function DynamicOpenText_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DynamicOpenText_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DynamicOpenText_createClass(Constructor, protoProps, staticProps) { if (protoProps) DynamicOpenText_defineProperties(Constructor.prototype, protoProps); if (staticProps) DynamicOpenText_defineProperties(Constructor, staticProps); return Constructor; }

function DynamicOpenText_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var DynamicOpenText_DynamicOpenText = /*#__PURE__*/function () {
  function DynamicOpenText(question, settings) {
    var _this = this;

    DynamicOpenText_classCallCheck(this, DynamicOpenText);

    DynamicOpenText_defineProperty(this, "setValueToQuestion", function () {
      var questionInput = document.getElementById(_this.question.id + "_input");

      if (questionInput) {
        _this.question.setValue(questionInput.value);
      }
    });

    DynamicOpenText_defineProperty(this, "setValidation", function () {
      _this.question.validationEvent.on(_this.showValidationResultMessages);
    });

    DynamicOpenText_defineProperty(this, "showValidationResultMessages", function (validationResult) {
      var questionElement = QuestionElementsGetters.getQuestionElement(_this.question.id);
      var errorList;

      try {
        errorList = questionElement.getElementsByClassName("cf-error-list")[0];
      } catch (_unused) {
        console.log("Could not find error list element");
        return;
      }

      _this.clearErrorList(errorList);

      var errorsCount = validationResult.errors.length;

      if (errorsCount > 0) {
        errorList.parentElement.classList.remove("cf-error-block--hidden");
        validationResult.errors.forEach(function (error) {
          var errorItem = _this.createErrorListItem(error.message);

          errorList.appendChild(errorItem);
        });
      }
    });

    this.question = question;
    this.settings = settings;
  }

  DynamicOpenText_createClass(DynamicOpenText, [{
    key: "render",
    value: function render() {
      var questionInput = document.getElementById(this.question.id + "_input");
      questionInput.addEventListener("input", this.setValueToQuestion);

      if (this.settings.progressBar.isEnabled) {
        var progressBar = new DynamicOpenText_progress_bar_ProgressBar(this.question, this.settings.progressBar);
        progressBar.render();
      }

      if (this.settings.characterCount.isEnabled) {
        var characterCount = new DynamicOpenText_character_count_CharacterCount(this.question, this.settings.characterCount);
        characterCount.render();
      }

      if (this.settings.keywords.isEnabled) {
        var keywords = new DynamicOpenText_keywords_Keywords(this.question, this.settings.keywords);
        keywords.render();
      }

      this.setValidation();
    }
  }, {
    key: "clearErrorList",
    value: function clearErrorList(errorList) {
      var errorLiElement = errorList.lastElementChild;

      while (errorLiElement) {
        errorList.removeChild(errorLiElement);
        errorLiElement = errorList.lastElementChild;
      }

      errorList.parentElement.classList.add("cf-error-block--hidden");
    }
  }, {
    key: "createErrorListItem",
    value: function createErrorListItem(message) {
      var item = document.createElement('li');
      item.className += "cf-error-list__item";
      item.innerText = message;
      return item;
    }
  }]);

  return DynamicOpenText;
}();


// CONCATENATED MODULE: ./dev/entry.js


if (window && !window.customQuestionsLibrary) {
  window.customQuestionsLibrary = {};
}

window.customQuestionsLibrary.DynamicOpenText = DynamicOpenText_DynamicOpenText;

/***/ })
/******/ ]);