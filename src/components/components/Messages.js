import React from "react";
import Message from "./components/Message";

const Messages = ({message}) => {


    return(
        <div className="flex flex-col flex-grow overflow-auto md:px-40 px-20 py-4" id="chatarea" key={message.id}>
            {
                message.map((msg) => {
                    return(
                        <Message msg={msg}/>
                    )
                    
                })
            }
            
        </div>
    )
}

export default Messages;