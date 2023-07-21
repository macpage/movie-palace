
import { createElement, useEffect, useState } from "react";

function Booking(props){
   
    const [seatCount,setSeatCount] = useState(0);
    const [state, setState] = useState(-1);
      const seat = [];
    const [seats,setSteats] = useState(seat);
    const[totalCosts,setTotalCosts] = useState(0);
    const [ticket,setTicket] = useState(0)


      
   for (let index = 0; index < 35; index++) {
    seat.push({selected: false, seatNumber: index+1, price: 9.90});
   }

const [selectedSeats,setSelectedSeats] = useState([]);

  function changeColor(i,index){
    console.log(i);
   
    if(i.selected){
        i.selected = false;
       selectedSeats.forEach((e,index) => {
        if(e==i){
           console.log("found " + e);
           delete selectedSeats[index];
           setTotalCosts(totalCosts-i.price)
           setTicket(ticket-1)
           if(totalCosts <= 0){
            setTotalCosts(0);
            console.log("juuu")
           }
        }
       });
        
    }else{
        i.selected = true;
        selectedSeats.push(i);
        setTotalCosts(totalCosts+i.price)
        setTicket(ticket+1);
    }
    setState(index);
    console.log(i);
    console.log(seats);
    console.log(selectedSeats);
  }


    return <div id="Booking" style={{display: props.active ? "grid" : "none"}}>
        
           
        <div id="seats">
            
            {seats.map((item,index) => <div className="seat" onClick={() => changeColor(item,state+1)} style={{backgroundColor:  seats[index].selected  ? "Yellowgreen" : "white"}} key={index}>Seat <br></br>{index+1}</div>)}
        </div>

        <div id="selection">
            <h1>{props.cinema}</h1>
            <h2>{props.movie}</h2>
            <div id="ticketSelection"><h3>Tickets: {ticket}</h3>
            <div>{selectedSeats.map((item,index)=> <p id="ticket" key={index}><b> -Seat:</b> {item.seatNumber} {<b>Price:</b>} {item.price.toFixed(2)}€</p>)} </div>
            </div>
            <div id="total">Total: {totalCosts.toFixed(2)}€</div>
             <button id="checkout">Buy Tickets</button>
        </div>

       
     
    </div>
}

export default Booking;