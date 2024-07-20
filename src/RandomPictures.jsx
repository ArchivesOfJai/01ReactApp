let src="https://picsum.photos/"
let width=300
let height=200

const customStyle={
    height:"200px",
    width:"300px"
}
function RandomPicture(){

    return(
        <img style={customStyle} src="https://picsum.photos/1080" alt="random image" />
    );
        
}

export default RandomPicture