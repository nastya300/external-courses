function Hangman(word) {
    this.word = word.toLowerCase();
    this.wrongSymbols = [];
    this.count = 6;
    this.rigthSymbols = [];
    this.result = '';

    this.wrong = function (char) {
        this.count--;
        this.wrongSymbols.push(char);
        if (this.count >= 0) {
            console.log(`You wrong! Errors left  ${this.count} | ${this.wrongSymbols}`)
        } else {
            console.log('You lose');
        }
    }

    this.win = function () {
        if (this.result.indexOf('_ ') === -1) {
            console.log('You won');
        }
    }

    this.checkEntry = function (char) {
        if (this.rigthSymbols.indexOf(char) !== -1) {
            this.result += char;
        } else {
            this.result += '_ ';
        }
    }

    this.guess = function (char) {
        if (this.word.indexOf(char) !== -1) {
            this.rigthSymbols.push(char);
            for (let i = 0; i < this.word.length; i++) {
                this.checkEntry(this.word[i]);
            }
            this.getGuessedString();
            this.win()
        } else {
            this.wrong(char);
        }
        this.result = '';
        
        return this;
    }

    this.getGuessedString = function () {
        console.log(this.result);
    }

    this.getErrorsLeft = function () {
        console.log(this.count);
    }

    this.getWrongSymbols = function () {
        console.log(this.wrongSymbols);
    }

    this.getStatus = function () {
        return this.getGuessedString() + ' | ' + this.getErrorsLeft();
    }

    this.startAgain = function (word) {
        this.word = word
        this.count = 6;
        this.result = '';
        this.rigthSymbols = [];
        this.wrongSymbols = [];
    }
}

let hangman = new Hangman('webpurple');
hangman.guess('w');