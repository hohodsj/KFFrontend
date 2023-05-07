import React,{useEffect, useState} from "react";
import axios from "axios";

const base_url = process.env.REACT_APP_KF_BASE_URL

const LoadQuestion = (props) => {
    //const [question, setQuestion] = useState( () => props.question);
    const [answer, setAnswer] = useState(() => props.answer);
    //const [hint, setHint] = useState(() => props.hint);
    

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
                alert(resp.data.verified)
            }).catch((error) => {
                console.error(error)
            })
        } else {
            alert(`Object ${props} id field is missing`);
        }

    }


    return (
        <form onSubmit={handleSubmit}>
        <p># {props.id}</p>
        <label>Question:
            <input type="text" value={props.question} />
        </label>
        <label>Answer:
            <input type="text"value={answer} onChange={(e) => setAnswer(e.target.value)}/>
        </label>
        <label>Hint:
            <input type="text" value={props.hint}/>
        </label>
        <input type="submit" />
        </form>
    )
}

export default LoadQuestion