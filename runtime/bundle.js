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
      var questionElement = document.getElementById(this.pbQuestion.id);
      var questionElement_content = questionElement.querySelectorAll('.cf-question__content')[0];
      var questionElement_textarea = questionElement.querySelectorAll('textarea')[0];
      var pbElement = this.createBarElement(this.pbHeight, questionElement_textarea.offsetWidth, this.pbBackgroundColor);
      questionElement.insertBefore(pbElement, questionElement_content);
      var promptElement = this.createPromptElement();

      switch (this.pbPosition) {
        case "1":
          questionElement.insertBefore(promptElement, pbElement);
          break;

        case "2":
          if (this.pbHeight < 15) {
            questionElement.insertBefore(promptElement, pbElement);
          } else {
            pbElement.lastElementChild.appendChild(promptElement);
          }

          break;

        case "3":
          questionElement.insertBefore(promptElement, pbElement.nextSibling);
          break;
      }

      if (this.allValues.length > 0) {
        questionElement_textarea.addEventListener("input", this.updatePrompt);
        questionElement_textarea.addEventListener("keyup", this.updateBarColor);
      }

      questionElement_textarea.addEventListener("mouseup", this.updateBarWidth);
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
      debugger;
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
  function CharacterCount(question, characterCount) {
    var _this = this;

    DynamicOpenText_character_count_classCallCheck(this, CharacterCount);

    DynamicOpenText_character_count_defineProperty(this, "updateCount", function () {
      var questionElement = document.getElementById(_this.ccQuestion.id);
      var questionElement_content = questionElement.querySelectorAll('.cf-question__content')[0];
      var questionElement_textarea = questionElement_content.querySelectorAll('textarea')[0];
      var currentCharacterCount = questionElement_textarea.value.length;
      var countElement = questionElement.getElementsByClassName("cf-question__dynamic-character-counter")[0];

      if (currentCharacterCount <= _this.maxCharacterCount) {
        countElement.textContent = currentCharacterCount + "/" + _this.maxCharacterCount;
        countElement.style.color = '#000000';
      } else {
        countElement.textContent = currentCharacterCount + "/" + _this.maxCharacterCount + " You have reached the limit.";
        countElement.style.color = '#ff0000';
      }
    });

    this.ccQuestion = question;
    this.maxCharacterCount = characterCount && characterCount > 0 ? characterCount : 150;
  }

  DynamicOpenText_character_count_createClass(CharacterCount, [{
    key: "render",
    value: function render() {
      var questionElement = document.getElementById(this.ccQuestion.id);
      var questionElement_content = questionElement.querySelectorAll('.cf-question__content')[0];
      var questionElement_textarea = questionElement_content.querySelectorAll('textarea')[0];
      var ccElement = document.createElement('div');
      ccElement.className += 'cf-question__dynamic-character-counter';
      ccElement.textContent = "0/" + this.maxCharacterCount;
      questionElement_content.insertAdjacentElement("beforeend", ccElement);
      questionElement_textarea.addEventListener("input", this.updateCount);
    }
  }]);

  return CharacterCount;
}();


// CONCATENATED MODULE: ./dev/DynamicOpenText_keywords.js
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

      for (var i = 0; i < _this.newKeywords.length; i++) {
        for (var j = 0; j < _this.newKeywords[i].length; j++) {
          existingItemsAsKeyword = Array.prototype.slice.call(keywordElement.querySelectorAll('.dynamic-keywords__item[keyword="' + _this.newKeywords[i][j] + '"]'));
          existingItemsAsRow = Array.prototype.slice.call(keywordElement.querySelectorAll('.dynamic-keywords__item[row-id="row-id' + i + '"]'));

          if (textValue.indexOf(_this.newKeywords[i][j]) > -1) {
            if (existingItemsAsRow.length === 0) {
              keywordElement.firstElementChild.appendChild(_this.createKeywordItem("row-id" + i, _this.newKeywords[i][j], _this.prompts[i]));
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
    this.newKeywords = this.organizeKeywords(this.words);
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
    value: function organizeKeywords(words) {
      var newKeywords = [];
      words.forEach(function (wordRow) {
        var newRow = [];

        if (wordRow.length > 0) {
          newRow = wordRow.split(",");

          for (var i = 0; i < newRow.length; i++) {
            newRow[i] = newRow[i].trim().toLowerCase();
          }
        }

        newKeywords.push(newRow);
      });
      return newKeywords;
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
  function DynamicOpenText(question, pbEnabled, pbHeight, pbPosition, pbMinValues, pbColors, pbPrompts, countEnabled, characterCount, keywordEnabled, keywordWords, keywordPrompts) {
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
    this.characterCount = new CharacterCount(question, characterCount);
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