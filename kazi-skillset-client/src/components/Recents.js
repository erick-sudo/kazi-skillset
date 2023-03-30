import React, { useEffect, useState } from 'react'


const Recents = () => {

  const [profs, setProfs] = useState([]);

  useEffect(() => {
    const getProfs = async () => {
        const response = await fetch("http://localhost:3000/professionals");
        const FinalData = await response.json();
        setProfs(FinalData)
    }

    getProfs();
  }, [])
  
  return (
    <div className='section-2'>
    <h2 id="buy">Top professionals</h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-3'>
      {
        profs.map(prof => {
          return (
            <div className="ui card">
              <div className="image" >
                <img src={prof.poster}/>
              </div>
              <div className="content">
                <div className="header">
                </div>
                <div className="meta text-wrap">
                <div className='prof-details'>
                <i className="user circle icon" style={{ fontSize: "25px" }} />
                  <h3>{`${prof.firstname} ${prof.lastname}`}</h3>
                  </div>

                  <p style={{ marginTop: "25px" }}>{prof.description.slice(0,75)+"..."}</p>
                </div>
              </div>
              <div className="extra content">
                <span>
                  <a href={prof.portfoliourl}>Bio</a>
                </span>
              </div>
            </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Recents;