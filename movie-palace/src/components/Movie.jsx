
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
        <td><h2>Kino 1</h2><p>12:00</p></td> 
        <td><h2>Kino 1</h2><p>12:00</p></td> 
        <td><h2>Kino 1</h2><p>12:00</p></td> 
        <td><h2>Kino 1</h2><p>12:00</p></td> 
        <td><h2>Kino 1</h2><p>12:00</p></td> 
        <td><h2>Kino 1</h2><p>12:00</p></td> 
        <td><h2>Kino 1</h2><p>12:00</p></td> 

        </tr>
        <tr>
        <td><h2>Kino 2</h2><p>14:30</p></td> 
        <td><h2>Kino 2</h2><p>14:30</p></td> 
        <td><h2>Kino 2</h2><p>14:30</p></td> 
        <td><h2>Kino 2</h2><p>14:30</p></td> 
        <td><h2>Kino 2</h2><p>14:30</p></td> 
        <td><h2>Kino 2</h2><p>14:30</p></td> 
        <td><h2>Kino 2</h2><p>14:30</p></td> 
        </tr>
        <tr>
        <td><h2>Kino 3</h2><p>17:30</p></td> 
        <td><h2>Kino 3</h2><p>17:30</p></td> 
        <td><h2>Kino 3</h2><p>17:30</p></td> 
        <td><h2>Kino 3</h2><p>17:30</p></td> 
        <td><h2>Kino 3</h2><p>17:30</p></td> 
        <td><h2>Kino 3</h2><p>17:30</p></td> 
        <td><h2>Kino 3</h2><p>17:30</p></td> 
        </tr>
        <tr>
        
            <td><h2>Kino 4</h2><p>20:30</p></td> 
            <td><h2>Kino 4</h2><p>20:30</p></td> 
            <td><h2>Kino 4</h2><p>20:30</p></td> 
            <td><h2>Kino 4</h2><p>20:30</p></td> 
            <td><h2>Kino 4</h2><p>20:30</p></td> 
            <td><h2>Kino 4</h2><p>20:30</p></td> 
            <td><h2>Kino 4</h2><p>20:30</p></td>    
        </tr>
        
    </table>
   </div>
    </div>
        </>

    ) 


}

export default Movie;