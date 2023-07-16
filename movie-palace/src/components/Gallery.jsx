import Movie from "./Movie";

function Gallery(){
    const array = [1,2,3,4,5,6,7,8,9,10];
    return <div id="Gallery">
        {array.map((item,index) => <Movie key={index}></Movie>)}
    </div>
}

export default Gallery;