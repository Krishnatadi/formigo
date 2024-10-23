class RequiredValidator {
    validate(value) {
        return value !== undefined && value !== null && value !== '';
    }
}

export default RequiredValidator;
