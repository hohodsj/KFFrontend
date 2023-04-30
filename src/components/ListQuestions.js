import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import LoadQuestion from "./subcomponents/Question";

const base_url = process.env.REACT_APP_KF_BASE_URL

const ListQuestions = () => {
    const [data, setData] = useState(null);
    const [counter, setCounter] = useState(1);
    const [inputs, setInputs] = useState([""]);

    useEffect(() => {
        const fetchData = async () => {
        const response = await axios.get(`${base_url}/questions`, {
                headers: {
                    'Access-Control-Allow-Origin' : '*'
                },
            });
            setData(response.data);
            console.log(`response.data: ${JSON.stringify(response.data)}`)
        };
        fetchData();
    }, []);


    return (
        <div>
            {data ? (
                <div>
                    <ul>
                        <li>Number of questions{data.length}</li>
                        {data.map((qna) => (
                        <LoadQuestion id ={qna.id} question={qna.question} hint={qna.hint}/>
                    ))}
                    </ul>
                </div>
            ) : (
                <p>No questions found...</p>
            )}
            {/* <button onClick={getData}>Click me</button> */}
            {/* {QuestionsAndAnswers} */}
        </div>
    )
}

export default ListQuestions