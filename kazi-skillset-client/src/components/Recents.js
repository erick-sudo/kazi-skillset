import React, { useEffect, useState } from 'react'


const Recents = () => {

  const [profs, setProfs] = useState([]);

  
  



  useEffect(() => {
  const getProfs = async () => {
      const response = await fetch("");
      const FinalData = await response.json();
      setProfs(FinalData)
  }

      getProfs();
  }, [])



  
  return (

    <div className='section-2'>
      

   <h2 id="buy">Top professionals</h2>
    

   <div className="ui card">
        <div className="image" >
          <img src="./rec-images/background.jpg"/>
        </div>
        <div className="content">
          <div className="header">
            
            
          </div>
          <div className="meta text-wrap">
          <div className='prof-details'>
          <i className="user circle icon" style={{ fontSize: "25px" }} />
            <h3>Name</h3>
            </div>

            <p style={{ marginTop: "25px" }}>Description</p>
          </div>
        </div>
        <div className="extra content">
          <span>
            
            <h4>Starting at KSH</h4>

          </span>
        </div>
      </div>

     
  
  
    </div>
   
  );
}

export default Recents;