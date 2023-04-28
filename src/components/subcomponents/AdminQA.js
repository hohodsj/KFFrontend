import React from "react";
import { useState } from "react";

const AdminQA = (props) => {
    const [question, setQuestion] = useState( () => props.question);
    const [answer, setAnswer] = useState(() => props.answer);
    const [hint, setHint] = useState(() => props.hint);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${question} ${answer} ${hint}`)
    }

    return (
        <form onSubmit={handleSubmit}>
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
        <input type="submit" />
        </form>
    )
}

export default AdminQA
