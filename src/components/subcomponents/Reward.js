import React,{useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import { Image } from "react-bootstrap";
const base_url = process.env.REACT_APP_KF_BASE_URL

const RewardPage = ({route, navigate}) => {
    //const [question, setQuestion] = useState( () => props.question);
    const location = useLocation();
    //const {data} = state;

    return (
        <div style={{display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'}}>
            <Confetti width="3000" height="3000" />
            {location.state?.url ? 
                <div>
                    <p className="text-secondard">Happy Birthday Sweetie!</p>
                    <Image img src={location.state.url} /> 
                </div>
                : <span></span>}
            
        </div>
    )
}

export default RewardPage