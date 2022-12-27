import React from "react";
import Message from "./components/Message";

const Messages = () => {

    return(
        <div className="flex flex-col flex-grow overflow-auto md:px-40 px-20 py-4" id="chatarea">
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            
        </div>
    )
}

export default Messages;