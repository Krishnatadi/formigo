# Formigo

**Formigo** is a lightweight and easy-to-use validation library designed for JavaScript applications. It simplifies the process of validating data inputs in web forms and APIs, ensuring that your data adheres to specified rules.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Examples](#examples)
- [Bugs](#bugs)


## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

To install `saltyhash`, use npm:
```console
$ npm install formigo
```



## Features

1. **Required Field Validation**: Ensures that a specified field is not empty and is mandatory for form submission.

2. **Email Format Validation**: Validates that the input is a correctly formatted email address.

3. **Minimum and Maximum Length Validation**: Checks that the length of string inputs meets specified minimum and maximum character limits.

4. **Type Validation**: Verifies that the input data type matches the expected type (e.g., string, number, array, or object).

5. **URL Validation**: Ensures that the input is a valid URL format.

6. **Password Strength Validation**: Checks passwords against strength criteria, including minimum length and character diversity.

7. **Value Comparison Validation**: Allows fields to be validated against other fields for equality or inequality checks.

8. **Custom Regex Validation**: Provides the ability to validate inputs against user-defined regular expressions.

9. **Not Allowed Characters Validation**: Validates that input does not contain specific disallowed characters.

10. **Word Count Validation**: Checks that the number of words in a string input falls within specified minimum and maximum limits.

11. **Object Shape and Exact Match Validation**: Validates that an object meets specified structural requirements.

12. **Date Validation**: Ensures that the input is a valid date or a `Date` object.

13. **Custom Validation Functions**: Allows users to define their own validation logic.

14. **Support for One-of Validation**: Validates that a value is included in a predefined array of acceptable options.

15. **Error Reporting**: Returns detailed error messages indicating which validations failed.

16. **Chaining Validations**: Supports combining multiple validation rules on a single field.


## Validation Types

| Validate               | Description                                                                                           |
| :--------------------- | :----------------------------------------------------------------------------------------------------- |
| required               | The field must have a value. `(boolean)`                                                              |
| type                   | Verifies the data type of the value (string, number, array, object).                                  |
| min                    | Ensures the length of the string meets the minimum requirement. `(integer)`                           |
| max                    | Ensures the length of the string does not exceed the maximum limit. `(integer)`                       |
| email                  | Validates that the input is in proper email format. `(boolean)`                                       |
| url                    | Checks that the input is a valid URL. `(boolean)`                                                    |
| equal                  | Confirms that the value matches another specified value. `(string)`                                   |
| notEqualWith           | Verifies that the value does not match another specified field. `(string)`                            |
| lowercase              | Ensures that all characters in the input are in lowercase. `(boolean)`                                |
| uppercase              | Ensures that all characters in the input are in uppercase. `(boolean)`                                |
| capitalize             | Validates that the first character is uppercase. `(boolean)`                                         |
| hex                    | Checks if the input conforms to hexadecimal format. `(boolean)`                                       |
| maxNumberRange        | Ensures that the value does not exceed a specified maximum number. `(integer)`                        |
| minNumberRange        | Ensures that the value meets a specified minimum number requirement. `(integer)`                      |
| maxWords              | Validates that the input does not exceed a specified word count. `(integer)`                          |
| minWords              | Validates that the input meets a specified minimum word count. `(integer)`                           |
| notAllowedCharacters   | Validates that the input does not contain any alphabetic characters (a-zA-Z). `(boolean)`            |


## Examples
### 1. Required Validation
To use the required validation, ensure that the field specified (in this case, 'username') is not empty.
If the field is empty, it will return an error message.
```javascript
import Formigo from 'formigo';

// Example object to validate
const data = { username: '' };

// Validation rules
const rules = {
  username: { required: true }
};

// Validate data
const result = Formigo.validate(data, rules);
console.log(result); // Output: { username: ['This field is required.'] }

```

## Examples
### 2. Email Validation
Use the email validation to ensure that the value of the specified field is in a valid email format.
If the format is incorrect, an error message will be returned.
```javascript
import Formigo from 'formigo';

// Example object to validate
const data = { email: 'invalidEmail' };

// Validation rules
const rules = {
  email: { email: true }
};

// Validate data
const result = Formigo.validate(data, rules);
console.log(result); // Output: { email: ['Invalid email format.'] }

```

## Examples
### 3. Minimum Length Validation
The minimum length validation checks that the length of the string in the specified field meets the minimum requirement. In this example, the password must be at least 6 characters long.
```javascript
import Formigo from 'formigo';

// Example object to validate
const data = { password: '123' };

// Validation rules
const rules = {
  password: { min: 6 }
};

// Validate data
const result = Formigo.validate(data, rules);
console.log(result); // Output: { password: ['Minimum length is 6.'] }

```

## Examples
### 4. Required Validation
To use the required validation, ensure that the field specified (in this case, 'username') is not empty.
If the field is empty, it will return an error message.
```javascript
import Formigo from 'formigo';

// Example object to validate
const data = { username: '' };

// Validation rules
const rules = {
  username: { required: true }
};

// Validate data
const result = Formigo.validate(data, rules);
console.log(result); // Output: { username: ['This field is required.'] }

```

## Examples
### 5. Type Validation
The type validation ensures that the value matches the expected type. In this case, the age field is expected to be a number, but a string was provided.
```javascript
import Formigo from 'formigo';

// Example object to validate
const data = { age: 'twenty' };

// Validation rules
const rules = {
  age: { type: 'number' }
};

// Validate data
const result = Formigo.validate(data, rules);
console.log(result); // Output: { age: ['Expected type number.'] }

```


## Examples
### 6. Combined Validation
You can combine multiple validation rules for a single field.
Here, the password must be both required and have a minimum length of 6.
If either condition fails, an appropriate error message will be returned.
```javascript
import Formigo from 'formigo';

// Example object to validate
const data = { password: 'pass' };

// Validation rules
const rules = {
  password: { min: 6, required: true }
};

// Validate data
const result = Formigo.validate(data, rules);
console.log(result); // Output: { password: ['Minimum length is required.'] }

```


## Examples
### 7. Maximum Length Validation
The maximum length validation checks that the length of the string in the specified field does not exceed the maximum limit.
In this example, the username must be no longer than 10 characters.
```javascript
import Formigo from 'formigo';

// Example object to validate
const data = { username: 'thisisaverylongusername' };

// Validation rules
const rules = {
  username: { max: 10 }
};

// Validate data
const result = Formigo.validate(data, rules);
console.log(result); // Output: { username: ['Maximum length exceede'] }


```


## Examples
### 8. URL Validation
Use the URL validation to ensure that the value of the specified field is in a valid URL format.
An invalid URL format will trigger an error message.
```javascript
import Formigo from 'formigo';

// Example object to validate
const data = { website: 'htp://invalid-url' };

// Validation rules
const rules = {
  website: { url: true }
};

// Validate data
const result = Formigo.validate(data, rules);
console.log(result); // Output: { website: ['Invalid URL format.'] }

```


## Examples
### 9. Equal Validation
The equal validation checks if the value of the specified field is equal to another specified value.
In this example, the confirmPassword must match the password.
```javascript
import Formigo from 'formigo';

// Example object to validate
const data = { password: 'password123', confirmPassword: 'password' };

// Validation rules
const rules = {
  confirmPassword: { equal: 'password' }
};

// Validate data
const result = Formigo.validate(data, rules);
console.log(result); // Output: { confirmPassword: ['Value must be equal to password.'] }


```


## Examples
### 10. Not Equal With Validation
The notEqualWith validation checks if the value of the specified field is not equal to another field's value.
In this example, forbiddenRole should not match the value of role.
```javascript
import Formigo from 'formigo';

// Example object to validate
const data = { role: 'admin', forbiddenRole: 'admin' };

// Validation rules
const rules = {
  forbiddenRole: { notEqualWith: 'role' }
};

// Validate data
const result = Formigo.validate(data, rules);
console.log(result); // Output: { forbiddenRole: ['Value must not be equal to role.'] }

```

## Examples
### 11. Lowercase Validation
The lowercase validation ensures that all characters in the specified field are lowercase.
If any character is uppercase, an error message will be returned.
```javascript
import Formigo from 'formigo';

// Example object to validate
const data = { username: 'UserName' };

// Validation rules
const rules = {
  username: { lowercase: true }
};

// Validate data
const result = Formigo.validate(data, rules);
console.log(result); // Output: { username: ['Value must be lowercase'] }

```

## Examples
### 12. Uppercase Validation
The uppercase validation ensures that all characters in the specified field are uppercase.
If any character is lowercase, an error message will be returned.
```javascript
import Formigo from 'formigo';

// Example object to validate
const data = { username: 'username' };

// Validation rules
const rules = {
  username: { uppercase: true }
};

// Validate data
const result = Formigo.validate(data, rules);
console.log(result); // Output: { username: ['All characters must be uppercase.'] }

```

## Examples
### 13. Capitalize Validation
The capitalize validation checks that the first character of the specified field is uppercase.
If the first character is not uppercase, an error message will be returned.
```javascript
import Formigo from 'formigo';

// Example object to validate
const data = { name: 'john' };

// Validation rules
const rules = {
  name: { capitalize: true }
};

// Validate data
const result = Formigo.validate(data, rules);
console.log(result); // Output: { name: ['First character must be uppercase.'] }


```

## Examples
### 14. Hex Validation
The hex validation checks if the specified field's value is a valid hex color code.
An invalid hex code will result in an error message.
```javascript
import Formigo from 'formigo';

// Example object to validate
const data = { colorCode: 'G1B2C3' };

// Validation rules
const rules = {
  colorCode: { hex: true }
};

// Validate data
const result = Formigo.validate(data, rules);
console.log(result); // Output: { colorCode: ['Value must be in hex format.'] }

```

## Examples
### 15. Number Range Validations
The number range validations check that a numerical value falls within specified minimum and maximum bounds.
In this example, the age must be between 0 and 120.
```javascript
import Formigo from 'formigo';

// Example object to validate
const data = { age: 150 };

// Validation rules
const rules = {
  age: { minNumberRange: 0, maxNumberRange: 120 }
};

// Validate data
const result = Formigo.validate(data, rules);
console.log(result); // Output: { age: ['Maximum number range is 120.'] }

```

## Examples
### 16. Word Count Validations
Word count validations check the number of words in a string.
In this example, the description must contain at least 3 words and no more than 10.
```javascript
import Formigo from 'formigo';

// Example object to validate
const data = { description: 'Short' };

// Validation rules
const rules = {
  description: { minWords: 3, maxWords: 10 }
};

// Validate data
const result = Formigo.validate(data, rules);
console.log(result); // Output: { description: ['Minimum word count is 3.'] }

```

## Examples
### 17. Not Allowed Characters Validation
The not allowed characters validation checks that a specified field does not contain certain characters.
In this example, the username must not include the '@' character.
```javascript
import Formigo from 'formigo';

// Example object to validate
const data = { username: 'user@name' };

// Validation rules
const rules = {
  username: { notAllowedChars: '@' }
};

// Validate data
const result = Formigo.validate(data, rules);
console.log(result); // Output: { username: ['Value contains not allowed characters.'] }

```


## Examples
### 18. Custom Logic Validation
The custom logic validation allows for user-defined logic to validate values.
In this example, the age must be greater than or equal to 18, and it passes validation.
```javascript
import Formigo from 'formigo';

// Example object to validate
const data = { age: 20 };

// Validation rules
const rules = {
  age: { compare: (value) => value >= 18 }
};

// Validate data
const result = Formigo.validate(data, rules);
console.log(result); // Output: {}

```

## Bugs

See <https://github.com/Krishnatadi/formigo/issues>.

## Other repositories

- For the errors module, please go [here](https://github.com/krishnatadi/formigo/errors).