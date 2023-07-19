import { useEffect, useState } from "react";
import Movie from "./Movie";

function Gallery(){
    const [array,setArray] = useState()
    
    const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=0d5b49816c94fd70b896c46342342111"
    useEffect(()=>{
            async function fetchMovies(){
    const response = await fetch(url);
        const movies = await response.json();
        console.log(movies);
        setArray(movies.results);
    }
    fetchMovies();
    },[])

    return <div id="Gallery">
        {array ?  array.map((item,index) => <Movie title={item.title} img={"https://image.tmdb.org/t/p/w500"+item.poster_path} key={index}></Movie>) : null}
       
    </div>
}

export default Gallery;