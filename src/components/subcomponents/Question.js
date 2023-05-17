import React,{useEffect, useState} from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const base_url = process.env.REACT_APP_KF_BASE_URL

const LoadQuestion = (props) => {
    //const [question, setQuestion] = useState( () => props.question);
    const [answer, setAnswer] = useState(() => props.answer);
    const [checkmark, setCheckmark] = useState();
    const [count, setCount] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false)
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (props.id) {
            // put
            console.log('update')
            await axios.post(`${base_url}/questions`, 
                {
                    id: props.id,
                    question: props.question,
                    answer: answer,
                    hint: props.hint
                },
                {
                    headers: {
                        'Access-Control-Allow-Origin' : '*'
                    },
                }
            ).then((resp) => {
                if(resp.data.verified) {
                    setCheckmark(<span>&#10003;</span>)
                    if (!isAnswered) {
                        props.correctCountUpdate()
                        setIsAnswered(true)
                    }
                } else {
                    setCount(count => count + 1)
                    setCheckmark(<span>&#10060;</span>)
                    if (count >= 2) {
                        alert(`Hint:${props.hint}`)
                    }
                }
            }).catch((error) => {
                console.error(error)
            })
        } else {
            alert(`Object ${props} id field is missing`);
        }

    }


    return (
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Col xs={4}>
                    <Form.Label># {props.id}</Form.Label>
                    <br/>
                    <Form.Label>Question: {props.question} {checkmark}
                    </Form.Label>
                    <InputGroup>Your Answer
                        <Form.Control type="text" value={answer} onChange={(e) => setAnswer(e.target.value)}/>
                        <Button type="submit">Submit</Button>
                    </InputGroup>
                    
                </Col>
            </Row>
        </Form>
    )
}

export default LoadQuestion