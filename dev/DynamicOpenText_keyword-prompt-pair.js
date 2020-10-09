export default class KeywordPromptPair {
    constructor(keyword, prompt, rowId) {
        this.keyword = keyword;
        this.prompt = prompt;
        this.rowId = rowId;
        this.matchingMethod = this.addMatchingMethod();
    }

    addMatchingMethod() {
        if (this.isPunctuationOrSymbol(this.keyword, 0)) {
            return this.hasOccurrence;
        } else {
            return this.hasFullMatch;
        }
    }

    isPunctuationOrSymbol(str, ind) {
        let re = /\p{Punctuation}|\p{Math_Symbol}|\p{Currency_Symbol}/u;
        return str[ind].match(re) !== null;
    }

    hasFullMatch(text) {
        let foundIndex = text.indexOf(this.keyword);
        let hasMatch = false;

        while (foundIndex !== -1) {
            let leftBoundaryIndex = foundIndex - 1;
            let rightBoundaryIndex = foundIndex + this.keyword.length;

            let isInTheBeginning = leftBoundaryIndex < 0;
            let isInTheEnd = rightBoundaryIndex > text.length - 1;

            if(!isInTheBeginning && !isInTheEnd) {
                hasMatch = this.isLeftWordBorder(text, leftBoundaryIndex) &&
                    this.isRightWordBorder(text, rightBoundaryIndex);
            }
            else if(!isInTheBeginning) {
                hasMatch = this.isLeftWordBorder(text, leftBoundaryIndex);
            }
            else if(!isInTheEnd) {
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

    isRightWordBorder(str, ind) {
        let re = /\p{Z}|\p{Math_Symbol}|\p{Currency_Symbol}|\p{Punctuation}/u;
        return str[ind].match(re) !== null;
    }

    isLeftWordBorder(str, ind) {
        let re = /\p{Z}|\p{Math_Symbol}|\p{Currency_Symbol}|\p{Punctuation}/u;
        return str[ind].match(re) !== null;
    }

    hasOccurrence(text) {
        return text.indexOf(this.keyword) !== -1;
    }
}