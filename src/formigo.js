class Formigo {
    static validate(data, rules) {
        const errors = {};
        let isValid = true;

        for (const field in rules) {
            const value = data[field];
            const fieldRules = rules[field];

            // Check for required
            if (fieldRules.required && !value) {
                isValid = false;
                errors[field] = errors[field] || [];
                errors[field].push('This field is required.');
            }

            // Check type
            if (fieldRules.type && typeof value !== fieldRules.type) {
                isValid = false;
                errors[field] = errors[field] || [];
                errors[field].push(`Expected type ${fieldRules.type}.`);
            }

            // Check min length
            if (fieldRules.min && typeof value === 'string' && value.length < fieldRules.min) {
                isValid = false;
                errors[field] = errors[field] || [];
                errors[field].push(`Minimum length is ${fieldRules.min}.`);
            }

            // Check email format
            if (fieldRules.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                isValid = false;
                errors[field] = errors[field] || [];
                errors[field].push('Invalid email format.');
            }

            // Add additional validations as needed...
        }

        // Construct success response
        if (isValid) {
            return {
                success: true,
                message: 'Validation passed.',
                data: data // return validated data
            };
        }

        // Construct error response
        return {
            success: false,
            message: 'Validation failed.',
            errors: errors
        };
    }
}

export default Formigo;
