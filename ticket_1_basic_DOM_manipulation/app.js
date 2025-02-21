document.addEventListener('DOMContentLoaded', function() {
    const changeTxtBtn = document.getElementById("change-text");
    changeTxtBtn.addEventListener("click", () =>{
        const el = document.getElementById("main-heading");
        el.innerText = "A new heading";
    })


    const addListItemBtn = document.getElementById("add-item");
    addListItemBtn.addEventListener("click", ()=>{
        const list = document.getElementById("item-list");
        const newItem = document.createElement('li');
        newItem.textContent = "Item 4";
        list.appendChild(newItem);
    })

    changeTxtBtn.addEventListener("mouseover", ()=>{
        const listEls = document.querySelectorAll("li");
        listEls.forEach(el =>{
            el.style.color = "blue";
        })
    })
    changeTxtBtn.addEventListener("mouseout", ()=>{
        const listEls = document.querySelectorAll("li");
        listEls.forEach(el =>{
            el.removeAttribute('style');
        })
    })

    document.addEventListener("dblclick", ()=>{

        const listEls = document.querySelectorAll("li");
        if(listEls.length > 0)
            listEls[listEls.length - 1].remove();
    })

    const headingEl = document.getElementById("main-heading");
    headingEl.addEventListener("mouseover", ()=>{
        const descEl = document.getElementsByClassName("description");
        for(let el of descEl){
            el.innerText = "updated text when mouse over heading"
        }
    })


    headingEl.addEventListener("mouseout", ()=>{
        const descEl = document.getElementsByClassName("description");
        for(let el of descEl){
            el.innerText = "This is a simple paragraph of text."
        }
    })

})

