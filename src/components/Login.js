import React,{useState,useEffect} from "react";

const Login = ({loginUser,meetingToken}) => {
    const [currentMeetingToken,setCurrentMeetingToken] = useState();
    const buttonClicked = () => {
        loginUser(currentMeetingToken);
    }
    const handleChange = (e) => {
        setCurrentMeetingToken(e.target.value)
    }

    useEffect(() => {
        setCurrentMeetingToken(meetingToken)
    }, [meetingToken]);

    return(
        <div className="h-full flex-grow flex items-center justify-center flex-col gap-5">
            <p className="text-xs text-center leading-4 tracking-widest">Copy and share</p>
            <input onChange={handleChange} id="meetingToken" type="text" defaultValue={meetingToken} className="focus:outline-none bg-transparent py-2 px-8 text-center w-120 border border-white rounded-full" autoComplete="off"/>
            <button onClick={buttonClicked} className="font-bold text-sm tracking-widest bg-blue-800 px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">Start the chat</button>
            
        </div>
    )
}

export default Login;