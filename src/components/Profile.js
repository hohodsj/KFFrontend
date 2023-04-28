import { useState } from "react";
import axios from "axios";


const base_url = process.env.REACT_APP_KF_BASE_URL

function Profile() {
    const[profileData, setProfileData] = useState(null)

    function getData() {
        console.log(`base_url:${base_url}`)
        axios({
            method: "GET",
            url:`${base_url}/profile`,
            headers: {
              'Access-Control-Allow-Origin' : '*'
            } 
        })
        .then((response) => {
            const res = response.data
            setProfileData(({
                profile_name: res.name,
                about_me: res.about
            }))
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
    }

    return (
        <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* new line start*/}
        <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
        }
         {/* end of new line */}
      </header>
    </div>
    );
}

export default Profile;