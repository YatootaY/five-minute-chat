import React,{useState,useEffect} from "react";

const Login = ({loginUser,meetingToken}) => {

    const [currentMeetingToken,setCurrentMeetingToken] = useState();

    useEffect(() => {
        const el = document.getElementById('meetingToken');
        console.log(el);
        setCurrentMeetingToken(el.value);
    }, []);

    return(
        <div className="h-full flex items-center justify-center flex-col gap-5">
            <input id="meetingToken" type="text" value={meetingToken} className="focus:outline-none bg-transparent py-2 px-8 text-center w-120 border border-white rounded-full"/>
            <button onClick={() => loginUser(currentMeetingToken)} className="font-bold text-sm tracking-widest bg-blue-800 px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">Start the chat</button>
        </div>
    )
}

export default Login;