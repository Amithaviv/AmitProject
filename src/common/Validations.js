import { getUsers } from ".././DAL/serverFunctions";

export const validate = (name, value, validations) => {
console.log(getUsers())
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

    if(validations.usernameOnDatabase){
        if (value.length < 2) {
            errors.push([`${name} should be no less than 2 characters`])
        }
    }

    if(validations.passwordMinLength){
        if (value.length < 5) {
            errors.push([`${name} should be no less than 5 characters`])
        }
    }

    if(validations.pattern){
        const mailFormat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
        if (!value.match(mailFormat)) {
            errors.push([`${name} is not valid`])
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