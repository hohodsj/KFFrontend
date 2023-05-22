import React,{useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import { Image } from "react-bootstrap";
import axios from 'axios';

const base_url = process.env.REACT_APP_KF_BASE_URL

const RewardPage = ({route, navigate}) => {
    //const [question, setQuestion] = useState( () => props.question);
    const location = useLocation();
    const [img, setImg] = useState()
    //const {data} = state;

    useEffect(() => {
        const fetchData = async () => {
        const response = await axios.get(`${base_url}/image/4`, {
                headers: {
                    'Access-Control-Allow-Origin' : '*'
                },
            })
            .then(response => (setImg(response.data.url)))
            //console.log(`response.data: ${JSON.stringify(response.data.url)}`)
        };
        fetchData();
    }, []);
    return (
        <div style={{display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${img})`, 
        backgroundSize: `cover`}}>
            <Confetti width="3000" height="3000" />
            {location.state?.url ? 
                <div>
                    <Image img src={location.state.url} /> 
                    <p className="text-danger">By clicking the "Yes" button, you have already agreed to the following:</p>
                    <ul className="text-secondard text-muted">
                        <li>Random Text</li>
                    </ul>
                    <p className="text-info">By</p>
                </div>
                : <span></span>}
        </div>
    )
}

export default RewardPage