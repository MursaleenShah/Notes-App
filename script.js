const createButton = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");
let notes = document.querySelectorAll(".input-box");


createButton.addEventListener("click",()=>
{
    let inputBox = document.createElement("p");
    inputBox.innerHTML = `

    <p contenteditable="true" class="input-box"  autofocus>
    <i class="fa-solid fa-trash-arrow-up" contenteditable="false"></i>
    
</p>
    `
    notesContainer.appendChild(inputBox)
    inputBox.querySelector("i").addEventListener("click",()=>
    {
        notesContainer.removeChild(inputBox); 
       
        
        
        
    });

   

   });


