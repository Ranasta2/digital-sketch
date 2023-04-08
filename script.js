const numBoxes = 16;

const container = document.querySelector("#container");

for (let i = 0; i < numBoxes; i++){
    let el = document.createElement("div")
    el.classList.add("box")
    el.addEventListener("mouseover",() => {
        el.classList.toggle('selected')} )
    container.appendChild(el)
}

//box will same dimensions, but squares inside will change depending on #
