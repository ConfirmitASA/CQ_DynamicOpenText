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
      var _document$getElementB;

      return (_document$getElementB = document.getElementById(questionId)) !== null && _document$getElementB !== void 0 ? _document$getElementB : "Could not find question with id " + questionId;
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
        var hasLeftWordBorder = isInTheBeginning ? true : this.isWordBorder(text, leftBoundaryIndex);
        var hasRightWordBorder = isInTheEnd ? true : this.isWordBorder(text, rightBoundaryIndex);
        hasMatch = hasLeftWordBorder && hasRightWordBorder;

        if (!hasMatch) {
          foundIndex = text.indexOf(this.keyword, foundIndex + 1);
        } else {
          break;
        }
      }

      return hasMatch;
    }
  }, {
    key: "isWordBorder",
    value: function isWordBorder(str, ind) {
      var re = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]|(?:[\0-\x1F\x7F-\x9F\xAD\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EE\u05F5-\u0605\u061C\u061D\u06DD\u070E\u070F\u074B\u074C\u07B2-\u07BF\u07FB\u07FC\u082E\u082F\u083F\u085C\u085D\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A77-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C76\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D50-\u0D53\u0D64\u0D65\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u170D\u1715-\u171F\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B7D-\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1C8F\u1CBB\u1CBC\u1CC8-\u1CCF\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u206F\u2072\u2073\u208F\u209D-\u209F\u20C0-\u20CF\u20F1-\u20FF\u218C-\u218F\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2C2F\u2C5F\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E53-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u3130\u318F\u31E4-\u31EF\u321F\u9FFD-\u9FFF\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7C0\uA7C1\uA7CB-\uA7F4\uA82D-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB6C-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFE\uFDFF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD-\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD70-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC70-\uDC7E\uDCBD\uDCC2-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF40-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDE70-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA0-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD73-\uDD7A\uDDE9-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDF\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDD79\uDDCC\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7B-\uDE7F\uDE87-\uDE8F\uDEA9-\uDEAF\uDEB7-\uDEBF\uDEC3-\uDECF\uDED7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])|(?:[\+<->\|~\xAC\xB1\xD7\xF7\u03F6\u0606-\u0608\u2044\u2052\u207A-\u207C\u208A-\u208C\u2118\u2140-\u2144\u214B\u2190-\u2194\u219A\u219B\u21A0\u21A3\u21A6\u21AE\u21CE\u21CF\u21D2\u21D4\u21F4-\u22FF\u2320\u2321\u237C\u239B-\u23B3\u23DC-\u23E1\u25B7\u25C1\u25F8-\u25FF\u266F\u27C0-\u27C4\u27C7-\u27E5\u27F0-\u27FF\u2900-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2AFF\u2B30-\u2B44\u2B47-\u2B4C\uFB29\uFE62\uFE64-\uFE66\uFF0B\uFF1C-\uFF1E\uFF5C\uFF5E\uFFE2\uFFE9-\uFFEC]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1])|(?:[\$\xA2-\xA5\u058F\u060B\u07FE\u07FF\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BF\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]|\uD807[\uDFDD-\uDFE0]|\uD838\uDEFF|\uD83B\uDCB0)|(?:[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F])/;
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
        var isInTheEnd = rightBoundaryIndex > text.length - 1;
        hasMatch = isInTheEnd ? true : this.isWordBorder(text, rightBoundaryIndex);

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
        var isInTheBeginning = leftBoundaryIndex < 0;
        hasMatch = isInTheBeginning ? true : this.isWordBorder(text, leftBoundaryIndex);

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
      var enteredText = _this.questionElement_textarea.value.trim().toLowerCase();

      if (_this.stopPromptThreshold !== 0 && _this.stopPromptThreshold < enteredText.length) {
        var outermostSpace = enteredText.substring(0, _this.stopPromptThreshold).lastIndexOf(' ');
        enteredText = enteredText.substring(0, outermostSpace);
      }

      ;
      var keywordElement = QuestionElementsGetters.getKeywordsElement(_this.questionElement);
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
    this.stopPromptThreshold = parseInt(settings.stopPromptThreshold);
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


// CONCATENATED MODULE: ./dev/DynamicOpenText_word-count.js
function DynamicOpenText_word_count_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DynamicOpenText_word_count_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DynamicOpenText_word_count_createClass(Constructor, protoProps, staticProps) { if (protoProps) DynamicOpenText_word_count_defineProperties(Constructor.prototype, protoProps); if (staticProps) DynamicOpenText_word_count_defineProperties(Constructor, staticProps); return Constructor; }

function DynamicOpenText_word_count_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var wordCountClass = "cf-question__dynamic-word-count";

var DynamicOpenText_word_count_WordCount = /*#__PURE__*/function () {
  function WordCount(question) {
    var _this = this;

    DynamicOpenText_word_count_classCallCheck(this, WordCount);

    DynamicOpenText_word_count_defineProperty(this, "updateCount", function () {
      var currentWordCount = _this.countWords();

      var countElement = _this.questionElement.querySelectorAll('.' + wordCountClass)[0];

      countElement.textContent = currentWordCount;
    });

    DynamicOpenText_word_count_defineProperty(this, "countWords", function () {
      var text = _this.questionElement_textarea.value;
      if (text.length === 0) return 0;
      return _this.getStringWithSingleSpacedWords(text).split(' ').length;
    });

    DynamicOpenText_word_count_defineProperty(this, "getStringWithSingleSpacedWords", function (str) {
      str = str.replace(/(^\s*)|(\s*$)/gi, ""); //remove the start and end spaces

      str = str.replace(/[ ]{2,}/gi, " "); //reduce multiple spaces to a single space

      str = str.replace(/ \n|\n | \n /g, "\n"); //exclude spaces near newlines

      str = str.replace(/[\n\r]/g, " "); //replace newlines and carriage returns with spaces

      return str;
    });

    this.question = question;
    this.questionElement = QuestionElementsGetters.getQuestionElement(this.question.id);
    this.questionElement_textarea = QuestionElementsGetters.getQuestionElement_Textarea(this.questionElement);
  }

  DynamicOpenText_word_count_createClass(WordCount, [{
    key: "render",
    value: function render() {
      var element = document.createElement('div');
      element.className += wordCountClass;
      element.textContent = "0";
      this.questionElement.appendChild(element);
      this.updateCount();
      this.questionElement_textarea.addEventListener("input", this.updateCount);
    }
  }]);

  return WordCount;
}();


// CONCATENATED MODULE: ./dev/DynamicOpenText_soft-warning.js
function DynamicOpenText_soft_warning_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DynamicOpenText_soft_warning_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var softWarningClassName = "cf-question__soft-warning";
var errorData = "softWarning";

var DynamicOpenText_soft_warning_SoftWarning = function SoftWarning(question, settings) {
  var _this = this;

  DynamicOpenText_soft_warning_classCallCheck(this, SoftWarning);

  DynamicOpenText_soft_warning_defineProperty(this, "render", function () {
    window.Confirmit.page.beforeNavigateEvent.on(_this.toggleWarning);

    _this.question.validationCompleteEvent.on(function (questionValidationResult) {
      _this.question.validationEvent.off(_this.pushError);

      _this.toggleToastError(questionValidationResult);
    });
  });

  DynamicOpenText_soft_warning_defineProperty(this, "toggleWarning", function (way) {
    if (!way.next) return;

    _this.toggleWarningBlock();

    if (_this.question.allowValidateOnChange) {
      _this.questionElement_textarea.addEventListener("input", _this.toggleWarningBlock);
    }
  });

  DynamicOpenText_soft_warning_defineProperty(this, "toggleWarningBlock", function () {
    var responseLength = _this.questionElement_textarea.value.length;

    var warningBlocks = _this.questionElement.querySelectorAll('.' + softWarningClassName);

    var questionValidationResult = _this.question.validate(false); //raiseValidationCompleteEvent: false


    var hasErrors = _this.hasQuestionErrors(questionValidationResult);

    if (warningBlocks.length > 0 && (responseLength > _this.threshold || hasErrors)) {
      warningBlocks[0].remove();
    } else if (warningBlocks.length === 0 && responseLength <= _this.threshold && !hasErrors) {
      _this.renderWarningBlock(_this.text);

      _this.question.validationEvent.on(_this.pushError);
    }
  });

  DynamicOpenText_soft_warning_defineProperty(this, "pushError", function (validationResult) {
    var error = {
      message: '',
      data: errorData
    };
    validationResult.errors.push(error);
  });

  DynamicOpenText_soft_warning_defineProperty(this, "renderWarningBlock", function () {
    var errorBlock;

    try {
      errorBlock = _this.questionElement.querySelectorAll(".cf-question__error")[0];
    } catch (_unused) {
      console.log("Could not find error block element");
      return;
    }

    var warningBlock = _this.createSoftWarningBlock();

    errorBlock.insertAdjacentElement('afterend', warningBlock);
  });

  DynamicOpenText_soft_warning_defineProperty(this, "createSoftWarningBlock", function () {
    var block = document.createElement('div');
    block.className += softWarningClassName;
    block.className += " cf-error-block cf-error-block--bottom";
    block.innerHTML = _this.text;
    return block;
  });

  DynamicOpenText_soft_warning_defineProperty(this, "toggleToastError", function (questionValidationResult) {
    var toastError;

    try {
      toastError = document.getElementsByClassName("cf-toast--error")[0];
    } catch (_unused2) {
      console.log("Could not find error block element");
      return;
    }

    var hasErrors = _this.hasQuestionErrors(questionValidationResult);

    if (hasErrors) {
      toastError.classList.remove('hidden');
    } else {
      toastError.classList.add('hidden');
    }
  });

  DynamicOpenText_soft_warning_defineProperty(this, "hasQuestionErrors", function (questionValidationResult) {
    if (questionValidationResult.errors.length === 1 && questionValidationResult.errors.find(function (e) {
      return e.data === errorData;
    })) {
      return false;
    } else if (questionValidationResult.errors.length !== 0) {
      return true;
    }
  });

  this.currentLanguage = String(Confirmit.page.surveyInfo.language);
  this.question = question;
  this.threshold = parseInt(settings.threshold);
  this.text = settings.text[this.currentLanguage];
  this.questionElement = QuestionElementsGetters.getQuestionElement(this.question.id);
  this.questionElement_textarea = QuestionElementsGetters.getQuestionElement_Textarea(this.questionElement);
}
/**
 * The starting point. Respondent clicks on a next/back button -> beforeNavigateEvent
 * (if direction == next) -> toggleWarning -> (if warning needs to be shown) subscribe to navigateEvent
 * a function pushing an error to validationResult.error - this way we can prevent navigation.
 * NavigateEvent -> error is pushed ->
 * validationCompleteEvent -> unsubscribe from navigateEvent so we won't push the error again.
 */
;


// CONCATENATED MODULE: ./dev/DynamicOpenText.js
function DynamicOpenText_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DynamicOpenText_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DynamicOpenText_createClass(Constructor, protoProps, staticProps) { if (protoProps) DynamicOpenText_defineProperties(Constructor.prototype, protoProps); if (staticProps) DynamicOpenText_defineProperties(Constructor, staticProps); return Constructor; }

function DynamicOpenText_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var DynamicOpenText_DynamicOpenText = /*#__PURE__*/function () {
  function DynamicOpenText(question, settings) {
    var _this = this;

    DynamicOpenText_classCallCheck(this, DynamicOpenText);

    DynamicOpenText_defineProperty(this, "renderStandardQuestionMarkup", function () {
      var _this$question$value;

      var currentValue = (_this$question$value = _this.question.value) !== null && _this$question$value !== void 0 ? _this$question$value : '';
      document.getElementById(_this.question.id).innerHTML = '<div class="cf-question__text" id="' + _this.question.id + '_text">' + _this.question.text + '</div>' + '<div class="cf-question__instruction" id="' + _this.question.id + '_instruction">' + _this.question.instruction + '</div>' + '<div class="cf-question__error cf-error-block cf-error-block--bottom cf-error-block--hidden" id="' + _this.question.id + '_error" role="alert" aria-labelledby="' + _this.question.id + '_error_list">' + '<ul class="cf-error-list" id="' + _this.question.id + '_error_list"></ul></div>' + '<div class="cf-question__content cf-question__content--no-padding"><div class="cf-open-answer">' + '<textarea class="cf-open-answer__input cf-text-area  " id="' + _this.question.id + '_input" aria-labelledby="' + _this.question.id + '_text" aria-required="true" aria-invalid="false" aria-errormessage="' + _this.question.id + '_error">' + currentValue + '</textarea>' + '</div></div>';
    });

    DynamicOpenText_defineProperty(this, "setValueToQuestion", function () {
      var questionInput = document.getElementById(_this.question.id + "_input");

      if (!!questionInput) {
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
      this.renderStandardQuestionMarkup();
      var questionInputTextarea = document.getElementById(this.question.id + "_input");

      if (!!questionInputTextarea) {
        questionInputTextarea.addEventListener("input", this.setValueToQuestion);
      } else {
        console.log('Could not find DOT textarea');
      }

      if (this.settings.progressBar.isEnabled) {
        var progressBar = new DynamicOpenText_progress_bar_ProgressBar(this.question, this.settings.progressBar);
        progressBar.render();
      }

      if (this.settings.characterCount.isEnabled) {
        var counter;

        switch (this.settings.characterCount.type) {
          case "character":
            counter = new DynamicOpenText_character_count_CharacterCount(this.question, this.settings.characterCount);
            break;

          case "word":
            counter = new DynamicOpenText_word_count_WordCount(this.question);
        }

        counter.render();
      }

      if (this.settings.keywords.isEnabled) {
        var keywords = new DynamicOpenText_keywords_Keywords(this.question, this.settings.keywords);
        keywords.render();
      }

      if (this.settings.softWarning.isEnabled) {
        var softWarning = new DynamicOpenText_soft_warning_SoftWarning(this.question, this.settings.softWarning);
        softWarning.render();
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