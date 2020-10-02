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

// CONCATENATED MODULE: ./dev/DynamicOpenText_progress-bar.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var promptPosition = Object.freeze({
  "above": "1",
  "inside": "2",
  "below": "3"
});

var ProgressBar = /*#__PURE__*/function () {
  function ProgressBar(question, pbHeight, pbPosition, pbMinValues, pbColors, pbPrompts) {
    var _this = this;

    _classCallCheck(this, ProgressBar);

    _defineProperty(this, "updatePrompt", function () {
      var questionElement = document.getElementById(_this.pbQuestion.id);
      var questionElement_textarea = questionElement.querySelectorAll('textarea')[0];
      var promptElement = questionElement.getElementsByClassName('cf-question__dynamic-progress-prompt')[0];
      var textLength = questionElement_textarea.value.length;

      if (textLength >= _this.allValues[_this.allValues.length - 1].value) {
        promptElement.innerHTML = _this.allValues[_this.allValues.length - 1].prompt;
      } else {
        if (textLength < _this.allValues[0].value) {
          promptElement.innerHTML = "";
        } else {
          for (var i = 0; i < _this.allValues.length - 1; i++) {
            if (textLength >= _this.allValues[i].value && textLength < _this.allValues[i + 1].value) {
              promptElement.innerHTML = _this.allValues[i].prompt;
            }
          }
        }
      }
    });

    _defineProperty(this, "updateBarColor", function () {
      var questionElement = document.getElementById(_this.pbQuestion.id);
      var questionElement_textarea = questionElement.querySelectorAll('textarea')[0];
      var pbElement = questionElement.getElementsByClassName('cf-question__dynamic-progress-bar')[0];
      var textLength = questionElement_textarea.value.length;
      var pbElementContent = pbElement.lastElementChild;

      if (textLength >= _this.allValues[_this.allValues.length - 1].value) {
        pbElementContent.style.backgroundColor = _this.allValues[_this.allValues.length - 1].color;

        _this.setWidth(pbElementContent, 100, "%");
      } else {
        if (textLength < _this.allValues[0].value) {
          pbElementContent.style.backgroundColor = "transparent";

          _this.setWidth(pbElementContent, 100, "%");
        } else {
          for (var i = 0; i < _this.allValues.length - 1; i++) {
            if (textLength >= _this.allValues[i].value && textLength < _this.allValues[i + 1].value) {
              var newWidth = 100 / _this.allValues.length * (i + 1);
              pbElementContent.style.backgroundColor = _this.allValues[i].color;

              _this.setWidth(pbElementContent, newWidth, "%");
            }
          }
        }
      }
    });

    _defineProperty(this, "updateBarWidth", function () {
      var questionElement = document.getElementById(_this.pbQuestion.id);
      var questionElement_textarea = questionElement.querySelectorAll('textarea')[0];
      var pbElement = questionElement.getElementsByClassName('cf-question__dynamic-progress-bar')[0];
      pbElement.style.width = questionElement_textarea.offsetWidth + 'px';
    });

    _defineProperty(this, "adjustPromptPositionIfInsideBar", function () {
      var questionElement = document.getElementById(_this.pbQuestion.id);
      var pbElement = questionElement.getElementsByClassName('cf-question__dynamic-progress-bar')[0];
      var pbPrompt = questionElement.getElementsByClassName('cf-question__dynamic-progress-prompt')[0];
      var barWidth = questionElement.querySelectorAll('textarea')[0].offsetWidth;
      var promptWidth = pbPrompt.scrollWidth;

      if (pbPrompt.classList.contains("cf-question__dynamic-progress-prompt--inside") && barWidth < promptWidth) {
        questionElement.insertBefore(pbPrompt, pbElement);
        pbPrompt.classList.remove("cf-question__dynamic-progress-prompt--inside");
      }

      if (!pbPrompt.classList.contains("cf-question__dynamic-progress-prompt--inside") && barWidth > promptWidth) {
        pbElement.lastElementChild.appendChild(pbPrompt);
        pbPrompt.classList.add("cf-question__dynamic-progress-prompt--inside");
      }
    });

    this.pbQuestion = question;
    this.pbHeight = pbHeight && pbHeight > 0 ? pbHeight : 5;
    this.pbPosition = pbPosition ? pbPosition : '1';
    this.pbMinValues = pbMinValues && pbMinValues.length > 0 ? pbMinValues : [1, 15, 30];
    this.pbColors = pbColors && pbColors.length > 0 ? pbColors : ['#ff0000', '#ffff00', '#00ff00'];
    this.pbPrompts = pbPrompts && pbPrompts.length > 0 ? pbPrompts : ['Good start', 'A little more information would be appreciated', 'Fantastic! Many thanks for your feedback'];
    this.pbBackgroundColor = '#F0F2F5';
    this.allValues = this.createArrayOfAllValues(this.pbMinValues, this.pbColors, this.pbPrompts);
  }

  _createClass(ProgressBar, [{
    key: "render",
    value: function render() {
      if (this.allValues.length > 0) {
        var questionElement = document.getElementById(this.pbQuestion.id);
        var questionElement_content = questionElement.querySelectorAll('.cf-question__content')[0];
        var questionElement_textarea = questionElement.querySelectorAll('textarea')[0];
        var pbElement = this.createBarElement(this.pbHeight, questionElement_textarea.offsetWidth, this.pbBackgroundColor);
        questionElement.insertBefore(pbElement, questionElement_content);
        var promptElement = this.createPromptElement();

        switch (this.pbPosition) {
          case promptPosition.above:
            questionElement.insertBefore(promptElement, pbElement);
            break;

          case promptPosition.inside:
            if (this.pbHeight < 15) {
              questionElement.insertBefore(promptElement, pbElement);
            } else {
              pbElement.lastElementChild.appendChild(promptElement);
            }

            break;

          case promptPosition.below:
            questionElement.insertBefore(promptElement, pbElement.nextSibling);
            break;
        }

        questionElement_textarea.addEventListener("input", this.updatePrompt);
        questionElement_textarea.addEventListener("keyup", this.updateBarColor);
        questionElement_textarea.addEventListener("mouseup", this.updateBarWidth);

        if (this.pbPosition === promptPosition.inside && this.pbHeight >= 15) {
          promptElement.classList.add("cf-question__dynamic-progress-prompt--inside");
          this.adjustPromptPositionIfInsideBar();
          questionElement_textarea.addEventListener("mouseup", this.adjustPromptPositionIfInsideBar);
          questionElement_textarea.addEventListener("input", this.adjustPromptPositionIfInsideBar);
          window.addEventListener("resize", this.adjustPromptPositionIfInsideBar);
        }
      }
    }
  }, {
    key: "createBarElement",
    value: function createBarElement(height, width, backgroundColor) {
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
  }, {
    key: "createPromptElement",
    value: function createPromptElement() {
      var promptElement = document.createElement('div');
      promptElement.className += 'cf-question__dynamic-progress-prompt';
      return promptElement;
    }
  }, {
    key: "createArrayOfAllValues",
    value: function createArrayOfAllValues(minValues, colors, prompts) {
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
    value: function setWidth(pbElement, width, widthType) {
      pbElement.style.width = width + widthType;
    }
  }]);

  return ProgressBar;
}();


// CONCATENATED MODULE: ./dev/DynamicOpenText_character-count.js
function DynamicOpenText_character_count_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DynamicOpenText_character_count_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DynamicOpenText_character_count_createClass(Constructor, protoProps, staticProps) { if (protoProps) DynamicOpenText_character_count_defineProperties(Constructor.prototype, protoProps); if (staticProps) DynamicOpenText_character_count_defineProperties(Constructor, staticProps); return Constructor; }

function DynamicOpenText_character_count_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CharacterCount = /*#__PURE__*/function () {
  function CharacterCount(question, showCharacterLimit) {
    var _this = this;

    DynamicOpenText_character_count_classCallCheck(this, CharacterCount);

    DynamicOpenText_character_count_defineProperty(this, "updateCount", function () {
      var questionElement = document.getElementById(_this.ccQuestion.id);
      var questionElement_content = questionElement.querySelectorAll('.cf-question__content')[0];
      var questionElement_textarea = questionElement_content.querySelectorAll('textarea')[0];
      var currentCharacterCount = questionElement_textarea.value.length;
      var countElement = questionElement.getElementsByClassName("cf-question__dynamic-character-counter")[0];
      countElement.textContent = currentCharacterCount;

      if (_this.showCharacterLimit && !!_this.characterLimit) {
        countElement.textContent += "/" + _this.characterLimit;
      } //countElement.style.color = '#000000';

    });

    this.ccQuestion = question;
    this.characterLimit = this.ccQuestion.maxLength;
    this.showCharacterLimit = showCharacterLimit;
  }

  DynamicOpenText_character_count_createClass(CharacterCount, [{
    key: "render",
    value: function render() {
      var questionElement = document.getElementById(this.ccQuestion.id);
      var questionElement_content = questionElement.querySelectorAll('.cf-question__content')[0];
      var questionElement_textarea = questionElement_content.querySelectorAll('textarea')[0];
      var ccElement = document.createElement('div');
      ccElement.className += 'cf-question__dynamic-character-counter';
      ccElement.textContent = "0";

      if (this.showCharacterLimit && !!this.characterLimit) {
        ccElement.textContent += "/" + this.characterLimit;
      } //questionElement_content.insertAdjacentElement("beforeend", ccElement);


      questionElement.appendChild(ccElement);
      questionElement_textarea.addEventListener("input", this.updateCount);
    }
  }]);

  return CharacterCount;
}();


// CONCATENATED MODULE: ./dev/DynamicOpenText_keywords.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function DynamicOpenText_keywords_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DynamicOpenText_keywords_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DynamicOpenText_keywords_createClass(Constructor, protoProps, staticProps) { if (protoProps) DynamicOpenText_keywords_defineProperties(Constructor.prototype, protoProps); if (staticProps) DynamicOpenText_keywords_defineProperties(Constructor, staticProps); return Constructor; }

function DynamicOpenText_keywords_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Keywords = /*#__PURE__*/function () {
  function Keywords(question, keywordWords, keywordPrompts) {
    var _this = this;

    DynamicOpenText_keywords_classCallCheck(this, Keywords);

    DynamicOpenText_keywords_defineProperty(this, "updateKeywords", function () {
      var questionElement = document.getElementById(_this.keywordQuestion.id);
      var questionElement_textarea = questionElement.querySelectorAll('textarea')[0];
      var keywordElement = document.getElementsByClassName("cf-question__dynamic-keywords")[0];
      var textValue = questionElement_textarea.value.trim().toLowerCase();
      var keywordList = keywordElement.firstElementChild;
      var existingItemsAsKeyword = [];
      var existingItemsAsRow = [];

      var _iterator = _createForOfIteratorHelper(_this.keywordPromptPairs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var pair = _step.value;
          existingItemsAsKeyword = Array.prototype.slice.call(keywordElement.querySelectorAll('.dynamic-keywords__item[keyword="' + pair.keyword + '"]'));
          existingItemsAsRow = Array.prototype.slice.call(keywordElement.querySelectorAll('.dynamic-keywords__item[row-id="row-id' + pair.rowId + '"]'));

          if (textValue.match(pair.regExp) !== null) {
            if (existingItemsAsRow.length === 0) {
              keywordElement.firstElementChild.appendChild(_this.createKeywordItem("row-id" + pair.rowId, pair.keyword, pair.prompt));
              break;
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
      var questionElement = document.getElementById(_this.keywordQuestion.id);
      var questionElement_textarea = questionElement.querySelectorAll('textarea')[0];
      var keywordElement = document.getElementsByClassName("cf-question__dynamic-keywords")[0];
      keywordElement.style.width = questionElement_textarea.offsetWidth + "px";
    });

    this.keywordQuestion = question;
    this.words = keywordWords ? keywordWords : [];
    this.prompts = keywordPrompts ? keywordPrompts : [];
    this.keywordPromptPairs = this.organizeKeywords(this.words, this.prompts);
  }

  DynamicOpenText_keywords_createClass(Keywords, [{
    key: "render",
    value: function render() {
      var questionElement = document.getElementById(this.keywordQuestion.id);
      var questionElement_textarea = questionElement.querySelectorAll('textarea')[0];
      var keywordElement = this.createKeywordElement(questionElement_textarea.offsetWidth);
      questionElement.appendChild(keywordElement);
      questionElement_textarea.addEventListener("input", this.updateKeywords);
      questionElement_textarea.addEventListener("mouseup", this.updateKeywordsWidth);
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
              var pair = {
                keyword: keyword,
                prompt: prompts[i],
                rowId: i,
                regExp: this.createRegExp(keyword)
              };
              keywordPromptPairs.push(pair);
            }
          }
        }
      }

      return keywordPromptPairs;
    }
  }, {
    key: "createRegExp",
    value: function createRegExp(keyword) {
      if (this.isPunctuationOrSymbol(keyword, 0)) {
        return new RegExp(this.escapeCharacters(keyword), "i");
      } else {
        return new RegExp("(?:\\s|[^-\\P{P}]|\\p{S}|^)" + this.escapeCharacters(keyword) + "(?:\\s|[^-\\P{P}]|\\p{S}|$)", "iu");
      }
    }
  }, {
    key: "isPunctuationOrSymbol",
    value: function isPunctuationOrSymbol(str, ind) {
      var re = /(?:[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F])|(?:[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA])/;
      return str[ind].match(re) !== null;
    }
  }, {
    key: "escapeCharacters",
    value: function escapeCharacters(str) {
      var charsToEscape = ['[', '\\', '^', '$', '.', '|', '?', '*', '+', '(', ')'];

      for (var _i = 0, _charsToEscape = charsToEscape; _i < _charsToEscape.length; _i++) {
        var _char = _charsToEscape[_i];
        var ind = str.indexOf(_char);

        if (ind != -1) {
          str = str.slice(0, ind) + "\\" + str.slice(ind);
        }
      }

      return str;
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
  function DynamicOpenText(question, pbEnabled, pbHeight, pbPosition, pbMinValues, pbColors, pbPrompts, countEnabled, showCharacterLimit, keywordEnabled, keywordWords, keywordPrompts) {
    var _this = this;

    DynamicOpenText_classCallCheck(this, DynamicOpenText);

    DynamicOpenText_defineProperty(this, "setValueToQuestion", function () {
      var questionInput = document.getElementById(_this.question.id + "_input");

      _this.question.setValue(questionInput.value);
    });

    this.question = question;
    this.progressBarEnabled = pbEnabled;
    this.characterCountEnabled = countEnabled;
    this.keywordsEnabled = keywordEnabled;
    this.progressBar = new ProgressBar(question, pbHeight, pbPosition, pbMinValues, pbColors, pbPrompts);
    this.characterCount = new CharacterCount(question, showCharacterLimit);
    this.keywords = new Keywords(question, keywordWords, keywordPrompts);
  }

  DynamicOpenText_createClass(DynamicOpenText, [{
    key: "render",
    value: function render() {
      var questionInput = document.getElementById(this.question.id + "_input");
      questionInput.addEventListener("input", this.setValueToQuestion);

      if (this.progressBarEnabled) {
        this.progressBar.render();
      }

      if (this.characterCountEnabled) {
        this.characterCount.render();
      }

      if (this.keywordsEnabled) {
        this.keywords.render();
      }
    }
  }, {
    key: "onQuestionValidationComplete",
    value: function onQuestionValidationComplete() {
      console.log("validation check");
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