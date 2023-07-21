
import { createElement, useEffect, useState } from "react";

function Booking(props){
   
    const [seatCount,setSeatCount] = useState(0);
    const [state, setState] = useState(-1);
      const seat = [];
    const [seats,setSteats] = useState(seat);
    const tickets = [];



      
   for (let index = 0; index < 35; index++) {
    seat.push({seatNum: false});
   }


  function changeColor(i,index){
    console.log(i);
   
    if(i.seatNum){
        i.seatNum = false;
    }else{
        i.seatNum = true;
    }
    setState(index);
    console.log(i);
    console.log(seats);
  }


    return <div id="Booking" style={{display: props.active ? "grid" : "none"}}>
        
           
        <div id="seats">
            
            {seats.map((item,index) => <div className="seat" onClick={() => changeColor(item,state+1)} style={{backgroundColor:  seats[index].seatNum  ? "Yellowgreen" : "white"}} key={index}>{index+1}</div>)}
        </div>

        <div id="selection">
            <h1>Kino 1</h1>
            <h2>{props.movie}</h2>
            <div id="ticketSelection">Tickets
            <div>Seat:  </div></div>
        </div>
     
    </div>
}

export default Booking;