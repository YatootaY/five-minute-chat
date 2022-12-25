import React,{useState} from "react";
import Chat from "./components/Chat.js";
import Login from "./components/Login.js";

const App = () => {
    
    const [userLogin, setUserLogin] = useState(false);

    const loginUser = () => {
        setUserLogin(true);
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
                        <Login loginUser={loginUser}/>
                    )
                }
            })()}
        </div>
    )
}
export default App