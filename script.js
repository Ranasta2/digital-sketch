//constants
const numBoxes = 16;
const DEFAULTGRID = 32;

//pull out container and style sheet reference
const container = document.querySelector("#container");
const style = document.styleSheets[0].cssRules
console.log(style[2].style.width)

//display grid #
const value = document.querySelector("#grid-value")
const input = document.querySelector("#slider")
value.textContent = input.value
input.addEventListener("input", (e) => {
    value.textContent = e.target.value;
    //setBoxes(e.target.value)
    newGrid(e.target.value)
})

//init function for testing
function init() {
    addBoxes(DEFAULTGRID)
}


function reset() {
    const boxes = document.querySelectorAll(".box")
    const rows = document.querySelectorAll(".row")
    console.log(boxes.length)
    //boxes.forEach(element => element.classList.remove("selected"))
    rows.forEach(element => container.removeChild(element))
}

function clear() {
    const filled = document.querySelectorAll(".selected")
    filled.forEach(el => el.classList.toggle("selected"))
}

//will always be a square, so width will equal height
//function setBoxSize(width) {
    //style[2].style.width = "50px"
    //style[2].style.height = style[2].style.width

//num - number of columns to add; always equal to number of rows
function addBoxes(num) {
    for (let i = 0; i < num; i++){
        addRow(num)
    }
}

function addRow(numCol) {
    console.log("Adding row!")
    const row = document.createElement("div");
    row.classList.add("row")
    for (let i = 0; i < numCol; i++){
        let el = document.createElement("div")
        el.classList.add("box")
        el.addEventListener("mouseover",() => {
            el.classList.toggle('selected')} )
        row.appendChild(el)
    }
    container.appendChild(row)
}

//called when slider is edited
//destroy and recreate grid based on new size/value of slider
function newGrid(size) {
    reset()
    for (let i = 0; i < size; i++){
        addRow(size)    //resizing boxes should be property of flex?
    }
}

const resetBtn = document.querySelector("#reset-btn")
resetBtn.addEventListener("click", reset)

const testBtn = document.querySelector("#test-btn")
testBtn.addEventListener("click", clear)

const testBtn2 = document.querySelector("#test-btn2")
testBtn2.addEventListener("click", () => {setBoxSize(100)})

input.value = 16
init()
