export const validate = (name, value, validations) => {
    let errors = []
    if(validations.required){
        if (value.length === 0) {
            errors.push([`${name} is required`])
        }
    }

    if(validations.usernameMinLength){
        if (value.length < 2) {
            errors.push([`${name} should be no less than 2 characters`])
        }
    }

    if(validations.adressMinLength){
        if (value.length < 10) {
            errors.push([`${name} should be no less than 10 characters`])
        }
    }

    if(validations.pattern){
        const mailFormat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
        if (!value.match(mailFormat)) {
            errors.push([`${name} should be no less than 10 characters`])
        }
    }

    if(validations.checked){
        if (value === "0") {
            validations.checked = false;
            errors.push([`${name} must be selected`])
            }
        }

    return errors
}
export default validate