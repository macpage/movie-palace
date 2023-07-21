
import { useState } from "react";
import Booking from "./Booking";

function Movie(props){
    const movieObj = {name: "", times:{time1:"12:30",time2:"17:00",time3:"20:00"}}
    const [isActive,setIsActive] = useState(false);
    const [info,setInfo] = useState(false);
    const [showBooking,setShowBooking] = useState(false);
    function showInfo(){
            setIsActive(current => !current);
            setInfo(current => !current);
    }
    let name;
    let pic;
    const [cinema,setCinema] = useState("");
    function openBooking(kino){
        setInfo(current => !current);
       setShowBooking(current => !current);
       setCinema(kino);
    }

    function close(){
        setIsActive(false);
        setInfo(false);
        setShowBooking(false);
    }

    return(
        <>
               <div id="Movie" onClick={showInfo} style={{transform: isActive ? "scale(1.2)" : null}}>
       
        <h1>{name = props.title}</h1>
       <img src={pic = props.img} alt="" />
      
    </div> 

    <div id="info_background" onClick={close} style={{display: isActive ? "block" : "none"}} ></div>
    <Booking active={showBooking} movie={name} cinema={cinema}></Booking>
    <div id="info_box" style={{display: info ? "grid" : "none"}}>
     
    <img src={pic} alt="" />
    <div id="info"><h1 id="title">{name}</h1>
    <table>
        <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
        </tr>
        <tr>
        <td><h2>Kino 1</h2><p onClick={()=>openBooking("Kino 1")}>12:00</p></td> 
        <td><h2>Kino 1</h2><p onClick={()=>openBooking("Kino 1")}>12:00</p></td> 
        <td><h2>Kino 1</h2><p onClick={()=>openBooking("Kino 1")}>12:00</p></td> 
        <td><h2>Kino 1</h2><p onClick={()=>openBooking("Kino 1")}>12:00</p></td> 
        <td><h2>Kino 1</h2><p onClick={()=>openBooking("Kino 1")}>12:00</p></td> 
        <td><h2>Kino 1</h2><p onClick={()=>openBooking("Kino 1")}>12:00</p></td> 
        <td><h2>Kino 1</h2><p onClick={()=>openBooking("Kino 1")}>12:00</p></td> 

        </tr>
        <tr>
        <td><h2>Kino 2</h2><p onClick={()=>openBooking("Kino 2")}>14:30</p></td> 
        <td><h2>Kino 2</h2><p onClick={()=>openBooking("Kino 2")}>14:30</p></td> 
        <td><h2>Kino 2</h2><p onClick={()=>openBooking("Kino 2")}>14:30</p></td> 
        <td><h2>Kino 2</h2><p onClick={()=>openBooking("Kino 2")}>14:30</p></td> 
        <td><h2>Kino 2</h2><p onClick={()=>openBooking("Kino 2")}>14:30</p></td> 
        <td><h2>Kino 2</h2><p onClick={()=>openBooking("Kino 2")}>14:30</p></td> 
        <td><h2>Kino 2</h2><p onClick={()=>openBooking("Kino 2")}>14:30</p></td> 
        </tr>
        <tr>
        <td><h2>Kino 3</h2><p onClick={()=>openBooking("Kino 3")}>17:30</p></td> 
        <td><h2>Kino 3</h2><p onClick={()=>openBooking("Kino 3")}>17:30</p></td> 
        <td><h2>Kino 3</h2><p onClick={()=>openBooking("Kino 3")}>17:30</p></td> 
        <td><h2>Kino 3</h2><p onClick={()=>openBooking("Kino 3")}>17:30</p></td> 
        <td><h2>Kino 3</h2><p onClick={()=>openBooking("Kino 3")}>17:30</p></td> 
        <td><h2>Kino 3</h2><p onClick={()=>openBooking("Kino 3")}>17:30</p></td> 
        <td><h2>Kino 3</h2><p onClick={()=>openBooking("Kino 3")}>17:30</p></td> 
        </tr>
        <tr>
        
            <td><h2>Kino 4</h2><p onClick={()=>openBooking("Kino 4")}>20:30</p></td> 
            <td><h2>Kino 4</h2><p onClick={()=>openBooking("Kino 4")}>20:30</p></td> 
            <td><h2>Kino 4</h2><p onClick={()=>openBooking("Kino 4")}>20:30</p></td> 
            <td><h2>Kino 4</h2><p onClick={()=>openBooking("Kino 4")}>20:30</p></td> 
            <td><h2>Kino 4</h2><p onClick={()=>openBooking("Kino 4")}>20:30</p></td> 
            <td><h2>Kino 4</h2><p onClick={()=>openBooking("Kino 4")}>20:30</p></td> 
            <td><h2>Kino 4</h2><p onClick={()=>openBooking("Kino 4")}>20:30</p></td>    
        </tr>
        
    </table>
   </div>
    </div>
        </>

    ) 


}

export default Movie;