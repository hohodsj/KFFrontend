import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import AdminQA from "./subcomponents/AdminQA";

const base_url = process.env.REACT_APP_KF_BASE_URL

const AdminPage = () => {
    // const[qna, setQna] = useState(null)

    // function getData(){
    //     console.log(`base_url:${base_url}`)
    //     axios({
    //         method: "GET",
    //         url: `${base_url}/questions-answers`,
    //         headers: {
    //             'Access-Control-Allow-Origin' : '*'
    //           } 
    //     })
    //     .then((response) => {
    //         const questionAnswerList = response.data
    //         setQna({
    //             qna:questionAnswerList.questionAnswers
    //         })
    //         console.log(`qna:${qna}`)
    //     }).catch((error) => {
    //         if (error.response) {
    //             console.log(error.response)
    //             console.log(error.response.status)
    //             console.log(error.response.headers)
    //         }
    //     })
    // }

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        const response = await axios.get(`${base_url}/questions-answers`, {
                headers: {
                    'Access-Control-Allow-Origin' : '*'
                },
            });
            setData(response.data.questionAnswers);
            console.log(`response.data: ${JSON.stringify(response.data.questionAnswers)}`)
        };
        fetchData();
    }, []);

    // const QuestionsAndAnswers = ["1","2"]
    // for (let i = 0; i < QuestionsAndAnswers.length; i++) {
    //     QuestionsAndAnswers.push(<AdminQA/>)
    // }
    return (
        <div>
            {data ? (
                <ul>
                    <li>Number of questions{data.length}</li>
                    {data.map((qna) => (
                    <AdminQA id ={qna.id} question={qna.question}  answer={qna.answer} hint={qna.hint}/>
                ))}
                </ul>
            ) : (
                <p>Loading data...</p>
            )}
            {/* <button onClick={getData}>Click me</button> */}
            {/* {QuestionsAndAnswers} */}
        </div>
    )
}

export default AdminPage