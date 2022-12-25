import React,{useState,useEffect} from "react";
import randomstring from 'randomstring';
import Chat from "./components/Chat.js";
import Login from "./components/Login.js";

const App = () => {
    
    const [userLogin, setUserLogin] = useState(false);
    const [meetingToken,setMeetingToken] = useState();

    useEffect( () => {
        setMeetingToken(randomstring.generate(16));
    },[])

    const loginUser = (newToken) => {
        setUserLogin(true);
        setMeetingToken(newToken);
        console.log(meetingToken);
    }

    return(
        <div className="h-full">
            {(() => {
                if(userLogin === true){
                    return (
                        <Chat/>
                    )
                }else{
                    return(
                        <Login loginUser={loginUser} meetingToken={meetingToken}/>
                    )
                }
            })()}
        </div>
    )
}
export default App