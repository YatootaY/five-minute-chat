import React from "react";
import Messages from "./components/Messages";

const Chat = () => {

    return(
        <div className="flex flex-col h-full">
            <Messages/>
            
            <form className="flex gap-3 md:px-40 px-20 mr-2">
                <input className="text-xs focus:outline-none bg-slate-800 py-2 px-5 flex-grow rounded-md" id="msg" type="text" placeholder='Enter your message' autoComplete="off"/>
                <button className="text-xs bg-blue-800 hover:bg-blue-600 px-3 rounded-md cursor-pointer">Send</button>
            </form>          
        </div>
    )
}

export default Chat;