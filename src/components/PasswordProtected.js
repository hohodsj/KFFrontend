import React, {useState} from "react";
import ListQuestions from "./ListQuestions";

const PasswordProtect = () => {
    const [isVerified, setIsVerified] = useState(false)

    const checkPw = () => {
        const answer = document.getElementById("password").value;
        if (answer === "password") {
            setIsVerified(true);
        } else {
            alert("Nope")
        }
    };

    return (
        <>
        {isVerified ? <ListQuestions/>
        :
        <form onSubmit={checkPw}>
            <input id="password" name="password"/>
            <button>Submit</button>
        </form>
        }
        </>
    )
}

export default PasswordProtect