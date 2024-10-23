class NotAllowedValidator {
    constructor(notAllowedChars) {
        this.notAllowedChars = notAllowedChars;
    }

    validate(value) {
        const regex = new RegExp(`[${this.notAllowedChars}]`);
        return !regex.test(value);
    }
}

export default NotAllowedValidator;
