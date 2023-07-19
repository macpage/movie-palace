function Movie(props){
    const movieObj = {name: "", times:{time1:"12:30",time2:"17:00",time3:"20:00"}}
    return <div id="Movie">
       
        <h1>{props.title}</h1>
       <img src={props.img} alt="" />
      
    </div>
}

export default Movie;