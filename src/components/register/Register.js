import "./Register.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ErrorMessages from "../../common/ErrorMessages";
import validate from "../../common/Validations";
import { Link, Navigate } from "react-router-dom";

function Register({setUser,setUserId}) {  
  const [ShowErrText, setShowErrText] = useState(false);
  const [ShowSuccessText, setShowSuccessText] = useState(false);
  const [formData, setFormData] = useState({
    username: {
      value: "",
      validations: {
        required: true,
        usernameMinLength: 2,
      },
      errors: [],
    },
    email: {
      value: "",
      validations: {
        required: true,
        pattern: true,
      },
      errors: [],
    },
    password: {
      value: "",
      validations: {
        required: true,
        passwordMinLength: 10,
      },
      errors: [],
    },
  });

  function validtateData({ target: { name, value } }) {
    const targetKey = formData[name];
    targetKey.errors = validate(name, value, targetKey.validations);
    targetKey.value = value;
    setFormData({ ...formData });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    //validate all inputs
    let tryError = 0;
    for (const name in formData) {
      let targetKey = formData[name];
      targetKey.errors = validate(name, targetKey.value, targetKey.validations);
      if (targetKey.errors.length > 0) {
        tryError += 1;
      }
    }
    const registerData = {email:formData.email.value,name:formData.username.value,password:formData.password.value};
    // console.log(tryError);
    const registername = {name:formData.username.value}
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(registerData),
    credentials:"include"
};
  let valid=true;
  if (tryError === 0){
    fetch('http://localhost:3100/api/customer/registerAddCustomer', requestOptions,{credentials:"include"})
    .then(response => response.json())
    .then(data => (data))
    .then(data => {if(data.hasOwnProperty('message')){
      valid=false;
      setShowErrText(true)
    }
    if (valid===true) {
      setShowErrText(false)
      setShowSuccessText(true)
      setUser(`welcome, ${registername.name}`)
      setUserId(data.id)
    }
    })
  //end of request
  }
    setFormData({ ...formData });};


  return (
    <div className="App">
      <header className="App-head">
      <h1 id="registerHeader">Register</h1>
        <Form id="loginForm" onSubmit={onSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
              <Form.Label className="label">Username</Form.Label>
              <InputGroup>
                <InputGroup.Text id="inputGroupPrepend">
                  <img
                    alt="icon"
                    id="icon"
                    src="images\icons8-person-30.png"
                  ></img>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  defaultValue={formData.username.value}
                  onBlur={validtateData}
                />
              </InputGroup>
              <ErrorMessages errors={formData.username.errors}></ErrorMessages>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label className="label">Email</Form.Label>
              <InputGroup>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                  defaultValue={formData.email.value}
                  onBlur={validtateData}
                />
              </InputGroup>
              <ErrorMessages errors={formData.email.errors}></ErrorMessages>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="15" controlId="validationCustom03">
              <Form.Label className="label">password</Form.Label>
              <InputGroup>
                <InputGroup.Text id="inputGroupPrepend">
                  <img
                    alt="icon"
                    id="icon"
                    src="images\icons8-lock-50.png"
                  ></img>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="password"
                  placeholder="password"
                  defaultValue={formData.password.value}
                  onBlur={validtateData}
                />
              </InputGroup>
              <ErrorMessages errors={formData.password.errors}></ErrorMessages>
            </Form.Group>
          </Row>

          <div id="submit" className="d-grid gap-2">
            <Button type="submit">Register</Button>
            {ShowErrText ? <TextErr /> : null}
            {ShowSuccessText ? <TextSuccess /> : null}
            {ShowSuccessText ? <Navigate to="/userDetails"/> : null}
            <Link to="/Login">
            <Button variant="info">Login here</Button>
            </Link>
          </div>
        </Form>
      </header>
    </div>
  );
}
const TextErr = () => <div id="emailTaken">Email is already taken please try again</div>;
const TextSuccess = () => <div id="registerConfirmed">Register Confirmed</div>;

export default Register;
