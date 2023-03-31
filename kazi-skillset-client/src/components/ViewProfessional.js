import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { BsFillChatTextFill } from "react-icons/bs"

import Livechat from "./Livechat";
import Loading from "./Loading";

function ViewProfessional() {

    const {id} = useParams()

    const [prof, setProf] = useState(null)
    const [chat, setChat] = useState(false)

    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:3000/professionals/${id}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setProf(data)
            setLoading(false)
        })
    }, [])

    function hideLivechat(flag) {
        setChat(flag)
    }

    return (
    <>  { loading ? 
        <Loading /> :
        <>
        { chat ? <Livechat hideLivechat={hideLivechat} user={{id: prof.id, receiver:"Professional"}} /> : null}
        <div className="grid grid-cols-2 items-center relative">
            <div className="absolute right-4 top-2 text-[3em] text-sky-700" onClick={() => hideLivechat(true)}><BsFillChatTextFill /></div>
            <div className="max-w-lg shadow m-4 flex flex-col">
                <img className="border" src={prof.poster} alt="Avatar" />
                <button className="bg-sky-400 py-4 px-6 mx-auto block my-3 rounded-md font-bold hover:bg-sky-600 hover:text-white" onClick={() => window.location = (prof.portfoliourl)}>Portfolio</button>
                <div className="font-bold text-center py-2 w-3/4 mx-auto">{prof.location ? prof.location.toUpperCase() : null}</div>
            </div>
            <div className="">
                <h2 className="text-sky-800">#{prof.username}</h2>
                <h1>{prof.firstname} {prof.lastname}</h1>
                <a href={`mailto:${prof.email}`}>{prof.email}</a>
                <div><a href={`tel:${prof.phone}`}>{prof.phone}</a></div>
                <p className="text-sm">{prof.description}</p>
            </div>
        </div>
        </>
        }
    </>
    )
}

export default ViewProfessional;