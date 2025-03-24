const cont = document.querySelector(".container")
const gridButton = document.querySelector(".size")
const eraseButton = document.querySelector(".erase")
const blackButton = document.querySelector(".black")
const randomButton = document.querySelector(".random")
const resetButton = document.querySelector(".reset")
let curMode="black"

function make(sz){
    cont.innerHTML= ''
    const s = 500/sz
    for(let i=0;i<sz *sz;i++){
        let cell = document.createElement("div")
        cell.className = "gridBox"
        cell.style.height = `${s}px`
        cell.style.width = `${s}px`
        cell.addEventListener('mouseover', ()=> set(cell))
        cont.append(cell)
    }
}

gridButton.addEventListener('click', function gridSize(){
    let sz = prompt('What size do you want your grid to be? (1-100)')
    sz = parseInt(sz)
    if(sz >=1 && sz <=100){
        make(sz)
    }else{
        alert("Please enter a number between 1-100")
    }
})

eraseButton.addEventListener('click', function erase(){
    curMode = "white"
})

blackButton.addEventListener('click', function black(){
    curMode = "black"
})

randomButton.addEventListener('click', function random(){
    curMode = "random"
})

resetButton.addEventListener('click', function reset(){
    make(16)
})

function set(cell){
    if(curMode ==="black"){
        cell.style.backgroundColor = "black"
    }else if(curMode === "white"){
        cell.style.backgroundColor = "white"
    }else{
        cell.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255}, ${Math.random() * 255})`
    }
}
make(16)