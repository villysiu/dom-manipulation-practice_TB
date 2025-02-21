const hideBtn = document.getElementById("hide-btn");
const showBtn = document.getElementById("show-btn");
const changeBtn = document.getElementById("change-color-btn");
const toggleBtn = document.getElementById("toggle-btn")

const el = document.querySelector("h1");

const colors = ["red", "orange", "yellow", "green", "blue"]
hideBtn.addEventListener("click", ()=>{

    el.style.display = "none";

})
showBtn.addEventListener('click', ()=>{
    el.style.display = "block";
})
changeBtn.addEventListener('click', ()=>{
    el.color="pink";
})

toggleBtn.addEventListener('click', ()=>{
    if(el.style.display === "block")
        el.style.display = "none";
    else
        el.style.display = "block"
})
let i=0;
setInterval(()=>{
    if(i===colors.length)
        i=0
    else
        i++

    el.style.color = colors[i];
}, 1000)


