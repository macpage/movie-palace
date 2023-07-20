function Booking(props){
    const seatCount = 25;
    return <div id="Booking" style={{display: props.active ? "grid" : "none"}}>
        
           {Array.from({length:seatCount}).map((item,index) => <div className="seat" key={index}>Seat {index+1}</div>)}
        
     
    </div>
}

export default Booking;