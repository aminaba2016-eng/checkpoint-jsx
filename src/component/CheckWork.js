import React from 'react'


import myWonderfulImage from "./ImageInSrc.jpg";




function CheckWork(){
    return(
        <div className=''>
    <div style ={{border:'solid 1px black', maxWidth :'100vw'}} >
         <h1 className="title" style ={{color:"red"}}>Your name here</h1>
         <img src="/imageInPublic.jpg" alt="reactblack"></img>
         <img src={myWonderfulImage} alt ='reactwhite'/>

    </div>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
      </div>
      );
      
      }
export default CheckWork;
