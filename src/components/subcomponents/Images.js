import React from "react";
import axios from "axios";
import { useState } from "react";

const base_url = process.env.REACT_APP_KF_BASE_URL

const LoadImage = (props) => {
    //const [question, setQuestion] = useState( () => props.question);
    const [url, setUrl] = useState(() => props.url);
    //const [hint, setHint] = useState(() => props.hint);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (props.id) {
            // put
            console.log('update')
            await axios.post(`${base_url}/images`, 
                {
                    id: props.id,
                    name: props.name,
                    url: url
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
        <label>Image:
            <input type="text" value={props.name} />
        </label>
        <label>Url:
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)}/>
        </label>
        <input type="submit" />
        </form>
    )
}

export default LoadImage