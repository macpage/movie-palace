import Movie from "./Movie";

function Gallery(){
    const array = [{name: "The Flash"},{name: "The Flash"},{name: "The Flash"},{name: "The Flash"},{name: "The Flash"},{name: "The Flash"},{name: "The Flash"},{name: "The Flash"},{name: "The Flash"},{name: "The Flash"}];
    return <div id="Gallery">
        {array.map((item,index) => <Movie title={item.name} key={index}></Movie>)}
    </div>
}

export default Gallery;