
import { useState } from "react";

function Movie(props){
    const movieObj = {name: "", times:{time1:"12:30",time2:"17:00",time3:"20:00"}}
    const [isActive,setIsActive] = useState(false);
    function showInfo(){
            setIsActive(current => !current);

    }
    let name;
    let pic;
    return(
        <>
               <div id="Movie" onClick={showInfo} style={{transform: isActive ? "scale(1.2)" : null}}>
       
        <h1>{name = props.title}</h1>
       <img src={pic = props.img} alt="" />
      
    </div> 

    <div id="info_background" onClick={showInfo} style={{display: isActive ? "block" : "none"}} ></div>
    <div id="info_box" style={{display: isActive ? "grid" : "none"}}>
    <img src={pic} alt="" />
    <div id="info"><h1>{name}</h1></div>
    </div>
        </>

    ) 


}

export default Movie;