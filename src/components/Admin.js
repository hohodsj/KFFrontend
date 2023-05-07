import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import AdminQA from "./subcomponents/AdminQA";
import LoadImage from "./subcomponents/Images";

const base_url = process.env.REACT_APP_KF_BASE_URL

const AdminPage = () => {
    const [data, setData] = useState(null);
    const [counter, setCounter] = useState(1);
    const [inputs, setInputs] = useState([""]);
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        const response = await axios.get(`${base_url}/questions-answers`, {
                headers: {
                    'Access-Control-Allow-Origin' : '*'
                },
            }).then((response) => setData(response.data))
            .catch((error) => console.log(error));
            console.log(`response.data: ${JSON.stringify(response.data)}`)
        };
        fetchData();
        const fetchImage = async () => {
            const response = await axios.get(`${base_url}/images`, {
                    headers: {
                        'Access-Control-Allow-Origin' : '*'
                    },
                })
                .then((response) => setImage(response.data))
                .catch((error) => console.log(error));
                console.log(`response.data: ${JSON.stringify(response.data)}`)
        }
        fetchImage();
    }, []);

    const addInput = () => {
        setCounter(counter + 1);
        setInputs([...inputs, ""]);
      };
    
      const handleInputChange = (event, index) => {
        const newInputs = [...inputs];
        newInputs[index] = event.target.value;
        setInputs(newInputs);
      };

    return (
        <div>
            {data ? (
                <div>
                    <ul>
                        <li>Number of questions{data.length}</li>
                        {data.map((qna) => (
                        <AdminQA id ={qna.id} question={qna.question}  answer={qna.answer} hint={qna.hint}/>
                    ))}
                    </ul>
                    <ul>
                        <li>Background Images</li>
                        {image ? (
                                <div>
                                    <ul>
                                        <li>Background Images</li>
                                        {image.map((img) => (
                                        <LoadImage id ={img.id} name={img.name} url={img.url} />
                                    ))}
                                    </ul>
                                </div>
                            ) : (
                                <p>No Images found...</p>
                            )}
                    </ul>
                </div>
            ) : (
                <p>No questions found...</p>
            )}
            <button onClick={addInput}>Add Input</button>
            {Array.from({ length: counter }, (_, index) => (
                <div key={index}>
                    <AdminQA />
                </div>
            ))}
            {/* <button onClick={getData}>Click me</button> */}
            {/* {QuestionsAndAnswers} */}
        </div>
    )
}

export default AdminPage