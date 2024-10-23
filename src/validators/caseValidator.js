class CaseValidator {
    constructor(caseType) {
        this.caseType = caseType; // 'lowercase', 'uppercase', or 'capitalize'
    }

    validate(value) {
        switch (this.caseType) {
            case 'lowercase':
                return value === value.toLowerCase();
            case 'uppercase':
                return value === value.toUpperCase();
            case 'capitalize':
                return value.charAt(0) === value.charAt(0).toUpperCase();
            default:
                return true;
        }
    }
}

export default CaseValidator;
