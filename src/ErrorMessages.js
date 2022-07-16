const ErrorMessages = (props) => {
    return props.errors.map(error => <p className="validationError">{error}</p>)
}

export default ErrorMessages