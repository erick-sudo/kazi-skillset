import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { BsFillChatTextFill, BsStarFill, BsStar } from "react-icons/bs"

import Livechat from "./Livechat";
import Loading from "./Loading";

const job_reviews = [
    {
      "id": 46,
      "client": {
        "firstname": "Clarisa",
        "lastname": "Haag",
        "email": "clarisahaag@williamson.info"
      },
      "task": {
        "description": "Eos quia ullam. Ratione illum id. Autem a autem. Rerum animi quo. Placeat consectetur veniam. Sit ut consequatur. Fugiat aspernatur voluptatem. Dignissimos voluptatem nisi. Eos non sint. Aspernatur ut praesentium. Sint ducimus ex. Fuga aut ducimus. Rem ut sit. Et voluptas sint. Facilis quasi quia. Doloremque consequatur pariatur. Omnis et odit. Molestias iusto nesciunt. Possimus veniam est. Magni ex impedit."
      },
      "reviews": [
        {
          "comment": "Est doloremque recusandae. Aut placeat aut. Consequatur iusto magnam. Libero et quam. Eaque repudiandae quia. Doloribus et quo. Suscipit laboriosam nihil. Non ea necessitatibus. Quam omnis consequatur. Atque id ea. Possimus enim voluptatem. Dignissimos a illo. Laborum tenetur voluptas. Molestiae recusandae est. Impedit nobis alias. Exercitationem nobis illo. Aliquam ut blanditiis. Sunt dolor est. Quidem qui qui.",
          "star_rating": 1,
          "client_id": 43
        },
        {
          "comment": "Corporis minus molestias. Doloribus iusto sapiente. Nihil molestiae eaque. Sed optio inventore. Ipsa sed esse. Delectus praesentium corrupti. Beatae est ut. A omnis quibusdam. Sit corrupti suscipit. Eaque provident asperiores. Illo pariatur qui. Non et non. Quidem unde aspernatur. Eveniet sint repellendus. Quam asperiores eius. Minima qui eveniet. Doloremque nesciunt est. Ab sed voluptatum. Totam laudantium enim.",
          "star_rating": 4,
          "client_id": 33
        }
      ]
    },
    {
      "id": 102,
      "client": {
        "firstname": "Colby",
        "lastname": "Heller",
        "email": "colbyheller@stanton.biz"
      },
      "task": {
        "description": "Aut occaecati quae. Temporibus dolorem ut. Cumque est laboriosam. Sequi ratione non. Autem sapiente asperiores. Odio voluptas voluptas. Nihil iure blanditiis. Odit voluptatem vel. Quis ex aut. Beatae id recusandae. Illum sed consequatur. Sit modi quas. Debitis fugit recusandae. Error id illum. Excepturi laboriosam aut. Dicta inventore iusto. Qui fugit laborum. Earum suscipit pariatur. Esse aliquid odit. Repudiandae corporis et."
      },
      "reviews": [
        {
          "comment": "Minima veritatis sunt. Placeat omnis fuga. Et et at. In numquam harum. Quo et atque. Nemo molestiae cum. Et sed vitae. Nihil et voluptatem. Debitis aliquam similique. Fugit ab ducimus. Qui saepe ut. Recusandae autem totam. Porro veritatis aut. Ut at nihil. Necessitatibus quam sint. Laborum dolore quis. Ea tempore ea. A est similique. Soluta dicta ea.",
          "star_rating": 5,
          "client_id": 27
        }
      ]
    },
    {
      "id": 182,
      "client": {
        "firstname": "Sha",
        "lastname": "Labadie",
        "email": "shalabadie@feil.com"
      },
      "task": {
        "description": "Qui enim perspiciatis. Nobis quis magni. Qui dolorem labore. Ipsum asperiores repellendus. Voluptatibus ea ratione. Unde error dicta. Qui rerum nesciunt. Quia et provident. Similique ut aperiam. Ducimus harum atque. Consequatur officiis nihil. Enim impedit quo. Autem praesentium in. Ipsam nulla necessitatibus. Beatae omnis possimus. Veniam et labore. Recusandae sed nesciunt. Qui aut possimus. Et molestiae maxime. Mollitia molestiae distinctio."
      },
      "reviews": [
        {
          "comment": "Aut et modi. Velit veritatis recusandae. Id quaerat dicta. Quam non odio. Et ullam est. Iusto molestias non. Dolore hic excepturi. Eum ipsum possimus. Non id impedit. Nihil sunt incidunt. Est cum natus. Et ducimus et. Quia est omnis. Minus cupiditate eos. Vel itaque labore. Quia voluptatum est. Quia molestiae recusandae. Sed incidunt rerum. Qui maxime quo.",
          "star_rating": 2,
          "client_id": 3
        }
      ]
    }
  ]

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
        <Reviews id={prof.id} />
        </>
        }
    </>
    )
}

function Reviews({id}) {

    const [reviews, setReviews]  = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:3000/professionals/${id}/reviews`)
    //     .then(response => response.json())
    //     .then(revs => setReviews(revs))
    // }, [])

    return (
        <div className="border p-3">
            <h1 className="px-5">Job Reviews</h1>
            <div className="jobs grid grid-cols-2 w-full gap-2">
                <div className="jobs grid grid-cols-1">
                  {
                    job_reviews.map((job, index) => {
                      return <JobReviewCard job={job} key={index} />
                    })
                  }
                </div>
                <div className="reviews  bg-white " >
                    {
                      job_reviews[0].reviews.map((rev, idx) => {
                        return <JobReviewerCard rev={rev} key={idx} />
                      })
                    }
                </div>
            </div>
        </div>
    )
}

//https://cdn.pixabay.com/photo/2013/07/13/01/10/plumbing-155224__340.png
//https://cdn.pixabay.com/photo/2023/03/20/07/30/ai-generated-7864001__340.jpg

function JobReviewCard({job}) {
  return (
    <div className="p-3 my-3 bg-slate-50 rounded-md">
      <div className="border-sky-400 border-b-4">
        <img className="" src="https://cdn.pixabay.com/photo/2013/07/13/01/10/plumbing-155224__340.png" />
      </div>
      <div>
        <p className="font-bold text-sky-800">Client: {`${job.client.firstname} ${job.client.lastname}`}</p>
        <p className="text-sm">Email: <span className="text-sky-400">{job.client.email}</span></p>
      </div>
      <div className="flex justify-end py-2">
        <button className="bg-sky-400 py-2 px-3 rounded-md">See Reviews</button>
      </div>
    </div>
  )
}

function JobReviewerCard({rev}) {
  return (
    <div className="p-3 my-3 rounded-md ">
      <div className="">
        <img className="h-12" src="https://cdn.pixabay.com/photo/2023/03/20/07/30/ai-generated-7864001__340.jpg" />
      </div>
      <div className="">{rev.comment}</div>
      <div>Rating</div>
      <div className="flex">
        {new Array(10).fill(0).map((star, idx) => idx < rev.star_rating ? <BsStarFill key={idx} /> : <BsStar key={idx} />)}
      </div>
    </div>
  )
}

export default ViewProfessional;