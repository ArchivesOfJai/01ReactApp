let name= "Jai Singh"
let date = new Date();

function DisplayMsg(){
    return(
        <>
        <h1>Created by {name}</h1>
        <p>Copyright &copy;{date.getFullYear()}</p>
        </>
    );
}

export default DisplayMsg