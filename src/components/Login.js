import React from "react";

const Login = ({loginUser,meetingToken}) => {

    return(
        <div className="h-full flex items-center justify-center flex-col gap-5">
            <input type="text" value={meetingToken} className="focus:outline-none bg-transparent py-2 px-8 text-center w-1/4 border border-white rounded-full"/>
            <button onClick={loginUser} className="font-bold text-sm tracking-widest bg-blue-800 px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors">Start the chat</button>
        </div>
    )
}

export default Login;