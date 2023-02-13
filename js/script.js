var icon= document.querySelector(".sunicon");

icon.onclick=function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
       
       var imglight=document.createElement("img");
       imglight.classList="light-image";
       imglight.src="./images/bg-desktop-light.jpg";
       document.body.appendChild(imglight);
     
        icon.innerHTML=` <svg  class="moonicon" xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>`
    }else{
        icon.innerHTML=` <svg  class="sunicon"xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>`
        var imgdark=document.createElement("img");
        imgdark.classList="dark-image";
        imgdark.src="./images/bg-desktop-dark.jpg";
        document.body.appendChild(imgdark);
     } 
}


 const inputValue=document.querySelector(".input-container");
 const inputText=document.getElementById("text-value");
 const inputBtn=document.querySelector(".add");
 const listContainer=document.querySelector(".list-container");
const addBtn=document.querySelector(".add");
const newLi=document.querySelectorAll(".todo-list");
const itemCount=document.querySelector("span");
const todoItemsCheckbox=document.querySelectorAll(".todo-item-checkbox");
 function handleInput(){
    // creating li element
    let newLi=document.createElement("li");
    const checkBox=document.createElement("input");
     checkBox.type="checkbox";
     checkBox.className="todo-item-checkbox";
      checkBox.addEventListener("click",()=>{
         newLi.classList.toggle("completed-items");
      })
    
     const inputText=document.getElementById("text-value").value;
     const txt=document.createTextNode(inputText);
     newLi.className="todo-list";
     //newLi.className="todo-item-checkbox";
     
     newLi.append(txt,checkBox);
     let closeBtn=document.createElement("button");
     closeBtn.className="todo-item-remove";
     closeBtn.innerHTML=`<button class="todo-item-remove">
     <svg  class="remove" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
     </button>`
     newLi.append(closeBtn);
     
     listContainer.append(newLi);
     removeBtn();
     filterTodo();
    updateCount();
   
 }

function removeBtn(){
   const removes=document.querySelectorAll(".remove");
    for(const remove of removes){
   remove.addEventListener('click',(e)=>{
         const removeItems=e.target.parentNode.parentNode.parentNode;
      removeItems.remove(e);
      updateCount();
   })
}
}
function updateCount(){
    itemCount.innerText= `${listContainer.children.length}`;
}
 



function filterTodo(){
  const all=document.querySelector(".all");
  const active=document.querySelector(".active");
  const completed=document.querySelector(".completed");
  const clearCompleted=document.querySelector(".clearcompleted");

all.addEventListener("click",()=>{
   const items=  document.querySelectorAll(".todo-list");

 items.forEach(item=>{
 if (item.classList.contains("completed-items")){
       item.style.display="flex";
   //listContainer.style.display="block";
 } else if(!item.classList.contains("completed-items")){
   item.style.display="flex";
 }
})
})
completed.addEventListener("click",()=>{
        const items=  document.querySelectorAll(".todo-list");
        //console.log(items);
     items.forEach(item=>{
      if (item.classList.contains("completed-items")){
            item.style.display="flex";
         //listContainer.remove(item);
        
      }else if(!item.classList.contains("completed-items")){
            item.style.display="none";
      }
     })
        
             
         
      })
   active.addEventListener("click",()=>{
      const items=  document.querySelectorAll(".todo-list");
        //console.log(items);
        items.forEach(item=>{
         if (item.classList.contains("completed-items")){
            item.style.display="none";
         }else if(!item.classList.contains("completed-items")){
            item.style.display="flex";
         }
         })
        
      })
      clearCompleted.addEventListener("click",()=>{
         const items=  document.querySelectorAll(".todo-list");
         items.forEach(item=>{
            if (item.classList.contains("completed-items")){
                 //console.log(item);
                item.remove();
                
            }else if(!item.classList.contains("completed-items")){
               item.style.display="flex";
            }
            })
            updateCount();
      })
   }
   
 addBtn.addEventListener('click', (e)=>{
   e.preventDefault;
   handleInput();
   inputText.value="";
 })
   



    
 


