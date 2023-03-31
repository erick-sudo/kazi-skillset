import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { BiUpArrow, BiDownArrow } from 'react-icons/bi'

function Log() {

    const navigate = useNavigate()
    const [collapse, setCollapse] = useState(false)

    return (
        <div className="" onMouseLeave={() => setCollapse(false)} onMouseEnter={() => setCollapse(true)}>
            <div className="relative flex items-center bg-slate-300 p-1 rounded-md ring-2 hover:bg-sky-100" onClick={() => {
                setCollapse(!collapse)
            }
            }>
                <img className="h-10" src="https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128_960_720.png" />
                <div className="text-blue-900">John Doe</div>
                <div className="text-xl text-black mx-2">{ collapse ? <BiUpArrow /> : <BiDownArrow /> }</div>
                
            </div>
            { collapse ?
                <div className="absolute text-black bg-white shadow-md shadow-black z-40">
                    <div className="py-3 px-5 hover:bg-sky-400" onClick={() => {
                        setCollapse(false)
                        navigate("/prof/7")
                    }}>Profile</div>
                    <div className="py-3 px-5 hover:bg-sky-400" onClick={() => {
                        setCollapse(false)
                    }}>Logout</div>
                </div>
            : null
            }
        </div>
    )
}

export default Log;