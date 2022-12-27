import React from "react";

const Message = () => {

    return(
        <div className=" hover:bg-gray-900 p-2 rounded-lg cursor-default mt-3">
            <div className="userInfo flex gap-4 ">
                <div className="userIcon md:text-3xl text-2xl">😶</div>
                <div className="space-y-1">
                    <h3 className="md:text-lg  text-base font-extrabold">Happy Boy</h3>
                    <h4 className="md:text-xs text-xs text-slate-500">5:00</h4>
                    <p className="md:text-base text-sm">THis is nice. It is oadi oiasdjf oi</p>
                </div>
            </div>
        </div>
    )
}

export default Message;