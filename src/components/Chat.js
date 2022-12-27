import React,{useRef} from "react";
import Messages from "./components/Messages";
import db from '../firebase.js';
import {
    collection,
    addDoc,
    Timestamp,
  } from 'firebase/firestore';

const Chat = ({meetingToken}) => {
    const messageRef = useRef()
    const handleSaveText = async (e) => {
        e.preventDefault()
        if (messageRef.current.value === ""){
            alert("You cannot sent empty message");
            return ;
        }
        try{
            await addDoc(collection(db,meetingToken), {
                text: messageRef.current.value,
                created: Timestamp.now()
            })
            const input = document.getElementById("msg")
            input.value = ""
            const chatarea = document.getElementById("chatarea")
            chatarea.scrollTop = chatarea.scrollHeight;
        }catch{
            alert("Expected Erro!")
            return;
        }
    }

    return(
        <div className="flex flex-col h-full">
            <Messages/>
            
            <form className="flex gap-3 md:px-40 px-20 mr-2" onSubmit={handleSaveText}>
                <input ref={messageRef} id="msg" className="text-xs focus:outline-none bg-slate-800 py-2 px-5 flex-grow rounded-md" type="text" placeholder='Enter your message' autoComplete="off"/>
                <button className="text-xs bg-blue-800 hover:bg-blue-600 px-3 rounded-md cursor-pointer">Send</button>
            </form>          
        </div>
    )
}

export default Chat;