class EqualityValidator {
    constructor(expectedValue) {
        this.expectedValue = expectedValue;
    }

    validate(value) {
        return value === this.expectedValue;
    }
}

export default EqualityValidator;
