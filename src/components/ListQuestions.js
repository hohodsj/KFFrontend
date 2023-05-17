import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import LoadQuestion from "./subcomponents/Question";
import RewardPage from "./subcomponents/Reward";

const base_url = process.env.REACT_APP_KF_BASE_URL

const ListQuestions = () => {
    const [data, setData] = useState(null);
    const [correctCount, setCorrectCounter] = useState(0);
    const [inputs, setInputs] = useState([""]);
    const [reward, setReward] = useState();

    const [img, setImg] = useState()

    useEffect(() => {
        const fetchData = async () => {
        const response = await axios.get(`${base_url}/image/2`, {
                headers: {
                    'Access-Control-Allow-Origin' : '*'
                },
            })
            .then(response => (setImg(response.data.url)))
            //console.log(`response.data: ${JSON.stringify(response.data.url)}`)
        const reward = await axios.get(`${base_url}/image/3`, {
                headers: {
                    'Access-Control-Allow-Origin' : '*'
                },
            })
            .then(response => (setReward(response.data.url)))
        };
        fetchData();
    }, []);

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
        <div style={{backgroundImage: `url(${img})`, backgroundSize: `cover`, backgroundRepeat: 'no-repeat', height: '100vh'}}>
            {data ? (
                <div>
                    <ul>
                        <li>Number of questions{data.length}</li>
                        <li>Number of correct {correctCount}</li>
                        {data.map((qna) => (
                        <LoadQuestion id ={qna.id} question={qna.question} hint={qna.hint} correctCountUpdate={() => setCorrectCounter(correctCount => correctCount+1)}/>
                    ))}
                        {correctCount == data.length ? <RewardPage reward={reward}/>: <span></span>}
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