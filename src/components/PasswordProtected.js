import React, {useEffect, useState} from "react";
import ListQuestions from "./ListQuestions";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

const base_url = process.env.REACT_APP_KF_BASE_URL

const PasswordProtect = () => {
    const [isVerified, setIsVerified] = useState(false)
    const [img, setImg] = useState()

    const checkPw = () => {
        const answer = document.getElementById("password").value;
        if (answer === "0522") {
            setIsVerified(true);
        } else {
            alert("Who are you?")
        }
    };

    useEffect(() => {
        const fetchData = async () => {
        const response = await axios.get(`${base_url}/image/1`, {
                headers: {
                    'Access-Control-Allow-Origin' : '*'
                },
            })
            .then(response => (setImg(response.data.url)))
            //console.log(`response.data: ${JSON.stringify(response.data.url)}`)
        };
        fetchData();
    }, []);

    return (
        <>
        {isVerified ? <ListQuestions/>
        :
        <Form onSubmit={checkPw} className="mt-5 center" style={{backgroundImage: `url(${img})`, backgroundSize: `cover`}}>
             <Row className="mb-3">
                 <Form.Label>When is your birthday?</Form.Label>
                 <Form.Control type="number" id="password" required />
                 <Button type="submit">Submit</Button>
             </Row>
            
        </Form>
        }
        </>
    )
}

export default PasswordProtect