import React from "react";

const Message = ({msg}) => {

    return(
        <div className=" hover:bg-gray-900 p-2 rounded-lg cursor-default mt-3 transition-colors duration-300">
            <div className="userInfo flex gap-4 ">
                <div className="userIcon md:text-3xl text-2xl">{msg.data.profile}</div>
                <div className="space-y-1">
                    <h3 className="md:text-lg  text-base font-extrabold">{msg.data.name}</h3>
                    <h4 className="md:text-xs text-xs text-slate-500">{msg.data.time}</h4>
                    <p className="md:text-base text-sm">{msg.data.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Message;