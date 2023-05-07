import React from "react";
import axios from "axios";
import { useState } from "react";

const base_url = process.env.REACT_APP_KF_BASE_URL

const AdminQA = (props) => {
    const [question, setQuestion] = useState( () => props.question);
    const [answer, setAnswer] = useState(() => props.answer);
    const [hint, setHint] = useState(() => props.hint);
    const [visible, setVisible] = useState(true);

    const handleSubmit = async (event) => {
        //event.preventDefault();
        if (props.id) {
            // put
            console.log('update')
            await axios.post(`${base_url}/questions-answers`, 
                {
                    id: props.id,
                    question: question,
                    answer: answer,
                    hint: hint
                },
                {
                    headers: {
                        'Access-Control-Allow-Origin' : '*'
                    },
                }
                );
        } else {
            // post
            console.log('insert')
            await axios.post(`${base_url}/questions-answers`, 
                {
                    question: question,
                    answer: answer,
                    hint: hint
                },
                {
                    headers: {
                        'Access-Control-Allow-Origin' : '*'
                    },
                }
                );
        }

    }

    const handleRemoveInput = async (id) => {
        if (id) {
            // delete
            console.log(`Remove ${id} from database`)
            await axios.delete(`${base_url}/questions-answers`, {data:{
                id: props.id,
                question: question,
                answer: answer,
                hint: hint
            } })
        }
        setVisible(!visible);
      };

    return (
        <form onSubmit={handleSubmit} style={{ display: visible ? "block" : "none" }}>
        <p># {props.id}</p>
        <label>Question:
            <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)}/>
        </label>
        <label>Answer:
            <input type="text"value={answer} onChange={(e) => setAnswer(e.target.value)}/>
        </label>
        <label>Hint:
            <input type="text" value={hint} onChange={(e) => setHint(e.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
        <button type="button" onClick={() => handleRemoveInput(props.id)}>
            Remove
        </button>
        </form>
    )
}

export default AdminQA
