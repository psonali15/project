import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import Images from  './images.jfif';
import { Text } from 'react-bootstrap';


function MarkingImg()
{
	console.warn(Images);

	 const mystyle = {
      position:"relative", 
      top: 95, 
      left: 200
    };

   const myImgstyle = {
    position: "absolute",
    top: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    textAlign: "center",
    paddingLeft: 100,
    paddingRight: 100,
}


	return(
		<>
		 <Header />
		 <img src={Images} width="400" height="200"/>
<svg styles={mystyle} xmlns="" version="1.1">
   <circle cx="50" cy="50" r="40" stroke="red" strokeWidth="2" fill="none" />
   

  <line x1="10" y1="10" x2="100" y2="100" style={{stroke:"red"}} strokeWidth="2" />


</svg>

  
		</>
	)
}
export default MarkingImg;