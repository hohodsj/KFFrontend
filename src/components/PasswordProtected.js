import React, {useState} from "react";
import Hello from "./Questions";

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
        {isVerified ? <Hello/>
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