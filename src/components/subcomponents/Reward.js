import React,{useEffect, useState} from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const base_url = process.env.REACT_APP_KF_BASE_URL

const RewardPage = (props) => {
    //const [question, setQuestion] = useState( () => props.question);

    return (
        <div>
            {props.reward}
        </div>
    )
}

export default RewardPage