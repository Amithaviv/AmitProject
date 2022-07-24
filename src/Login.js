import "./Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import ErrorMessages from "./ErrorMessages";
import validate from "./Validations";

function Login() {
      const [formData, setFormData] = useState({
        username: {
          value: '',
          validations: {
            required: true,
            usernameMinLength: 2
          },
          errors: []
        },
        email: {
          value: '',
          validations: {
            required: true,
            pattern: true
          },
          errors: []
        },
        adress: {
          value: '',
          validations: {
            required: true,
            adressMinLength: 10
          },
          errors: []
        },
      })
    
      function validtateData({target: {name, value}}){
        const targetKey = formData[name]
        targetKey.errors =  validate(name, value, targetKey.validations)
        targetKey.value = value   
        setFormData({...formData})
      }

      const onSubmit = e => {
        e.preventDefault()
        //validate all inputs
        let tryError = 0
        for (const name in formData){
          let targetKey = formData[name]
          targetKey.errors =  validate(name, targetKey.value, targetKey.validations)
          if (targetKey.errors.length>0){
            tryError += 1
          }
        }
        console.log(tryError)
          if (tryError === 0){
            alert("Login Confirmed");
          }
        setFormData({...formData})
      }

  
  return (
      <div className="App">
      <header className="App-header">
          <Form id="loginForm" onSubmit={onSubmit}>
          <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
              <Form.Label className="label">Username</Form.Label>
              <InputGroup>
              <InputGroup.Text id="inputGroupPrepend"><img alt="icon" id="icon" src="images\icons8-person-30.png"></img></InputGroup.Text>
                <Form.Control
                  type="text"
                  name='username' 
                  placeholder="Enter Username"
                  defaultValue={formData.username.value}
                  onBlur={validtateData}
                />
              </InputGroup>
              <ErrorMessages errors={formData.username.errors}></ErrorMessages> 
            </Form.Group>
            <Form.Group as={Col} md="6" >
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
              <InputGroup.Text id="inputGroupPrepend"><img alt="icon" id="icon" src="images\icons8-lock-50.png"></img></InputGroup.Text>
              <Form.Control
                type="text"
                name="adress" 
                placeholder="password"                  
                defaultValue={formData.adress.value}
                onBlur={validtateData}/>
              </InputGroup>
              <ErrorMessages errors={formData.adress.errors}></ErrorMessages> 
            </Form.Group>
          </Row>

            <div id="submit" className="d-grid gap-2">
          <Button type="submit">Login</Button>
          </div>
          <div id="register">
        <Button variant="info">Register here</Button>
        </div>
        </Form>
      </header>
    </div>
  );
    }
export default Login;
