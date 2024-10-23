class RegexValidator {
    constructor(regex) {
        this.regex = regex;
    }

    validate(value) {
        return this.regex.test(value);
    }
}

export default RegexValidator;
