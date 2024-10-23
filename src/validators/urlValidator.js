class UrlValidator {
    validate(value) {
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlRegex.test(value);
    }
}

export default UrlValidator;
