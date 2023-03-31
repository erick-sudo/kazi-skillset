import React, { useEffect, useState } from "react";
import { MdSend , MdOutlineArrowForwardIos} from 'react-icons/md'

function Livechat({hideLivechat, user}) {

    const [messages, setMessages] = useState([])

    useEffect(() => {

    }, [])

    return (
        <div onMouseLeave={() => hideLivechat(false)} className="shadow-md fixed z-30 top-[1em] bottom-[1em] right-2 w-96 bg-white max-w-md rounded-xl overflow-hidden border-2 ring-2 ring-sky-300">
            <div onClick={() => hideLivechat(false)} className="bg-sky-500 rounded-r-3xl text-white p-2 hover:bg-green-600 absolute z-50 text-[2em] top-[50%]"><MdOutlineArrowForwardIos /></div>
            <div className="bg-sky-500 py-2 h-16 text-white absolute top-0 right-0 left-0"><CurrentChat /></div>
            <div className="absolute flex  top-16 bottom-12">
                <div id="people" className="w-24">
                    {
                        [1,2,3,4,5,6,7,8,9,10,11,12].map((chat, index) => <Chat key={index} />)
                    }
                </div>
                <div id="messages" className="relative">
                    <Bubble owner={0}/>
                    <Bubble owner={1}/>
                    <Bubble owner={0}/>
                    <Bubble owner={1}/>
                    <Bubble owner={1}/>
                    <Bubble owner={0}/>
                    <Bubble owner={1}/>
                    <Bubble owner={0}/>
                    <Bubble owner={1}/>
                    <Bubble owner={0}/>
                    <Bubble owner={1}/>
                    <Bubble owner={1}/>
                    <Bubble owner={0}/>
                    <Bubble owner={1}/>
                </div>
            </div>
            <div className="flex rounded-b-xl absolute h-12 right-0 left-0 bottom-0">
                <textarea className="outline-none flex-grow px-3 py-2" type="text"></textarea>
                <button className="border-none text-xl px-4 bg-sky-700 rounded-rt-md hover:text-white hover:bg-green-500" ><MdSend /></button>
            </div>
        </div>
    )
}

function Bubble({message="Hello, how are you?", owner, time}) {

    return (
        <div className={`m-2 flex ${owner === 0 ? "justify-start" : "justify-end"}`}>
            {
                owner === 0 ?
                <div className="bg-sky-500 w-3/4 px-3 pb-3 rounded-r-[25px] rounded-bl-[25px]">
                    <p className="font-bold text-sm p-1 text-slate-600 font-mono">{new Date().toTimeString().slice(0,8)}</p>
                    {message}
                </div> :
                <div className="p-3 pb-0 bg-green-500 w-3/4 rounded-l-[25px] rounded-tr-[25px]">
                    {"Am doing fine, where have you been?"}
                    {<p className="p-1 font-bold text-sm text-slate-600 font-mono text-right ">{new Date().toTimeString().slice(0,8)}</p>}
                </div>
            }
        </div>
    )
}

function CurrentChat() {
    return (
        <div className="flex items-center gap-4 px-4 font-bold">
            <img className="rounded-full h-12 block" src="https://www.pngitem.com/userimgs/364.jpg" alt="Dp" />
            <div className="text-xl">John Doe</div>
            <div className="">{45} Messages</div>
        </div>
    )
} 

function Chat({image}) {

    return (
        <div className="hover:ring-sky-400 hover:ring-4 ml-3 mt-3 mr-3 border rounded-full ring-2 ring-green-600">
            <img className="rounded-full border-none block" src="https://www.pngitem.com/userimgs/364.jpg" alt="Dp" />
        </div>
    )
}

export default Livechat;