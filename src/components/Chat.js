import React,{useRef,useState,useEffect} from "react";
import Messages from "./components/Messages";
import db from '../firebase.js';
import {
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    onSnapshot, 
    Timestamp,
    deleteDoc
  } from 'firebase/firestore';

const Chat = ({meetingToken,userInfo,time}) => {
    const messageRef = useRef();
    const [message,setMessage] = useState([]);
    const handleSaveText = async (e) => {
        e.preventDefault()
        if (time === "00:00"){
            alert("Session run out!")
            return;
        }
        if (messageRef.current.value === ""){
            alert("You cannot sent empty message");
            return ;
        }
        
            await addDoc(collection(db,meetingToken), {
                profile: userInfo[0],
                name: userInfo[1],
                text: messageRef.current.value,
                time: time,
                created: Timestamp.now()
            })
            const input = document.getElementById("msg")
            input.value = ""
            const chatarea = document.getElementById("chatarea")
            chatarea.scrollTop = chatarea.scrollHeight;
        
    }

    const deleteData = async () => {
        const q = collection(db,meetingToken);
        const  snap = await getDocs(q)
        console.log(q);
        for(let i = 0 ; i < snap.docs.length ; i++){
            deleteDoc(snap.docs[i].ref)
        }
    }

    useEffect( () => {
        const q = query(collection(db,meetingToken),orderBy("created"));
        onSnapshot(q,(querySnapshot) => {
            setMessage(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        })
        const chatarea = document.getElementById("chatarea")
        chatarea.scrollTop = chatarea.scrollHeight;
    },[])

    useEffect( () => {
        const chatarea = document.getElementById("chatarea")
        chatarea.scrollTop = chatarea.scrollHeight;
    },[message])

    useEffect(() => {
        if (time == "00:00"){
            deleteData();
        }
        console.log(time)
    },[time])

    return(
        <div className="flex flex-col h-full">
            <Messages message={message}/>
            
            <form className="flex gap-3 md:px-40 px-20 mr-2" onSubmit={handleSaveText}>
                <input ref={messageRef} id="msg" className="text-xs focus:outline-none bg-slate-800 py-2 px-5 flex-grow rounded-md" type="text" placeholder='Enter your message' autoComplete="off"/>
                <button className="text-xs bg-blue-800 hover:bg-blue-600 px-3 rounded-md cursor-pointer">Send</button>
            </form>      
        </div>
    )
}

export default Chat;