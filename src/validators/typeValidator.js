class TypeValidator {
    constructor(expectedType) {
        this.expectedType = expectedType;
    }

    validate(value) {
        return typeof value === this.expectedType;
    }
}

export default TypeValidator;
