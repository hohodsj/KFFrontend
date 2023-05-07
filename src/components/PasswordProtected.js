import React, {useState} from "react";
import ListQuestions from "./ListQuestions";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const PasswordProtect = () => {
    const [isVerified, setIsVerified] = useState(false)

    const checkPw = () => {
        const answer = document.getElementById("password").value;
        if (answer === "password") {
            setIsVerified(true);
        } else {
            alert("Nope")
        }
    };

    return (
        <>
        {isVerified ? <ListQuestions/>
        :
        // <form onSubmit={checkPw}>
        //     <input id="password" name="password"/>
        //     <button>Submit</button>
        // </form>
        <Form onSubmit={checkPw} className="mt-5 center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1623244727304-54995b233b1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80)`, backgroundSize: `cover`}}>
             <Row className="mb-3">
                 <Form.Label>What is the password?</Form.Label>
                 <Form.Control type="text" id="password" required />
                 <Button type="submit">Submit</Button>
             </Row>
            
        </Form>
        }
        </>
    )
}

export default PasswordProtect