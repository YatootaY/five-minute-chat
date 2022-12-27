import React,{useCallback,useState,useEffect} from "react";
import randomstring from 'randomstring';
import Chat from "./components/Chat.js";
import Login from "./components/Login.js";

const App = () => {
    
    const [userLogin, setUserLogin] = useState(false);
    const [meetingToken,setMeetingToken] = useState();
    const [time,changeTime] = useState(300);

    const convertSecondToMinute = (sec) => {
        let minute = Math.floor(sec/60);
        let second = Math.floor(sec%60);
        minute = "0" + String(minute);
        if (second < 10){
            second = '0' + String(second)
        }else{
            second = String(second)
        }
        return(minute + ":" + second)
    }

    const countDown = useCallback(() => {
            if (userLogin === true){
                changeTime((oldTime) => oldTime-1)
            }
        },[userLogin])

    useEffect(() => {
        const el = document.getElementById("counter");
        el.textContent = convertSecondToMinute(time);
        if(time <= 0){
          return
        }
        const timeoutFunction = setInterval(countDown, 1000)
        return () => clearInterval(timeoutFunction);
      },[countDown, time])
    
    useEffect(() => {
        setMeetingToken(randomstring.generate(16));
    }, []);

    const loginUser = (newToken) => {
        setUserLogin(true);
        setMeetingToken(newToken);
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