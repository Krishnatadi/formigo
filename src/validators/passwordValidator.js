class PasswordValidator {
    validate(value) {
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return strongPasswordRegex.test(value);
    }
}

export default PasswordValidator;
