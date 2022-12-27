import React from "react";
import Message from "./components/Message";

const Messages = ({message,time}) => {


    return(
        <div className="flex flex-col flex-grow overflow-auto md:px-40 px-20 py-4" id="chatarea" key={message.id}>
            {
                (
                    ()=>{
                        if(time === "00:00"){
                            return(
                                <h1 className="text-xs text-center leading-8 tracking-widest my-auto"><span className="text-5xl  ">⏰</span><br/>Your 5 minute is up! <br/> We hope you had a chance to get to know with each other</h1>
                            )
                        }else{
                            return(
                                message.map((msg) => {
                                    return(
                                        <Message msg={msg}/>
                                    )
                                    
                                })
                            )
                        }
                    }
                )()
                
            }
            
        </div>
    )
}

export default Messages;