export default class KeywordPromptPair {
    constructor(keyword, prompt, rowId) {
        this.keyword = keyword;
        this.prompt = prompt;
        this.rowId = rowId;
        this.isMatching = this.addMatchingMethod();
    }

    addMatchingMethod() {
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

    isPunctuationOrSymbol(str, ind) {
        let re = /\p{Punctuation}|\p{Math_Symbol}|\p{Currency_Symbol}|\^/u;
        return str[ind].match(re) !== null;
    }

    hasFullMatch(text) {
        let foundIndex = text.indexOf(this.keyword);
        let hasMatch = false;

        while (foundIndex !== -1) {
            let leftBoundaryIndex = foundIndex - 1;
            let rightBoundaryIndex = foundIndex + this.keyword.length;

            let isInTheBeginning = leftBoundaryIndex < 0;
            let isInTheEnd = rightBoundaryIndex > (text.length - 1);

            let hasLeftWordBorder = isInTheBeginning ? true : this.isWordBorder(text, leftBoundaryIndex);
            let hasRightWordBorder = isInTheEnd ? true : this.isWordBorder(text, rightBoundaryIndex);

            hasMatch = hasLeftWordBorder && hasRightWordBorder;

            if (!hasMatch) {
                foundIndex = text.indexOf(this.keyword, foundIndex + 1);
            } else {
                break;
            }
        }

        return hasMatch;
    }

    isWordBorder(str, ind) {
        let re = /\p{Separator}|\p{Other}|\p{Math_Symbol}|\p{Currency_Symbol}|\p{Punctuation}/u;
        return str[ind].match(re) !== null;
    }

    hasOccurrence(text) {
        return text.indexOf(this.keyword) !== -1;
    }

    hasSuffix(text) {
        let hasMatch = false;
        let foundIndex = text.indexOf(this.keyword);

        while (foundIndex !== -1) {
            let rightBoundaryIndex = foundIndex + this.keyword.length;
            let isInTheEnd = rightBoundaryIndex > (text.length - 1);
            hasMatch = isInTheEnd ? true : this.isWordBorder(text, rightBoundaryIndex);

            if (!hasMatch) {
                foundIndex = text.indexOf(this.keyword, foundIndex + 1);
            } else {
                break;
            }
        }

        return hasMatch;
    }

    hasPrefix(text) {
        let hasMatch = false;
        let foundIndex = text.indexOf(this.keyword);

        while (foundIndex !== -1) {
            let leftBoundaryIndex = foundIndex - 1;
            let isInTheBeginning = leftBoundaryIndex < 0;

            hasMatch = isInTheBeginning ? true : this.isWordBorder(text, leftBoundaryIndex);

            if (!hasMatch) {
                foundIndex = text.indexOf(this.keyword, foundIndex + 1);
            } else {
                break;
            }
        }

        return hasMatch;
    }
}