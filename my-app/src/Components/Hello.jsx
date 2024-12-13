function Hello (){

let img = document.getElementById("img")

function show(){
    // let show =  document.getElementById("show")
    
}
function close(){
    // let close = document.getElementById("close")
    img.remove();
}
return (

    <div>

    <h1>Hello React</h1>

    <img id="img" src="https://cdn.pixabay.com/photo/2017/03/27/14/53/canoe-2179196_640.jpg" alt="" />   
    
    <br/> 

    <button id='show' onClick={show}>show img</button>
    <button id='close' onClick={close}>close img</button>

    </div>
   
)
}

export default Hello