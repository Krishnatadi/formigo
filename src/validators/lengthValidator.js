class LengthValidator {
    constructor(minLength, maxLength) {
        this.minLength = minLength;
        this.maxLength = maxLength;
    }

    validate(value) {
        const length = value.length;
        return length >= this.minLength && length <= this.maxLength;
    }
}

export default LengthValidator;
