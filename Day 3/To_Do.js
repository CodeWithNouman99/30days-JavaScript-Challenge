const taskform=document.getElementById("taskform")
const tasklist=document.getElementById("tasklist")
const taskinput=document.getElementById("taskinput")
const itemsleft=document.getElementById("itemsleft")
const clearCompleted=document.getElementById("clearCompleted")


let tasks=[]
let currentFilter="all"
//load tasks from localstroage on page load

window.addEventListener("DOMContentLoaded",()=>
{
  const saved=localStorage.getItem("tasks")
  if(saved)
  {
    tasks=JSON.parse(saved)
  }
  rendertask()
})

//save task to localstorage
function savetask()
{
  localStorage.setItem("tasks",JSON.stringify(tasks))
}


// Render task
function rendertask()
{
  tasklist.innerHTML=""
  let filteredtask=tasks
  if(currentFilter=="active")
  {
    filteredtask=tasks.filter(t => !t.completed)
  }
  else if(currentFilter=="completed")
  {
    filteredtask=tasks.filter(t=> t.completed)
  }

  filteredtask.forEach(task=>{
    const li=document.createElement("li")
    li.setAttribute("data-id",task.id)
    if(task.completed)
      li.classList.add("completed")

    //checkBox
    const checkBox=document.createElement("input")
    checkBox.type="checkbox"
    checkBox.checked=task.completed
    checkBox.addEventListener("change",()=> toggleTask(task.id))
 

  // Text
  const span=document.createElement("span")
  span.textContent=task.text


  //edit Button
  const editBtn=document.createElement("button")
  editBtn.textContent="Edit"
  editBtn.className="btn-edit"
  editBtn.addEventListener("click",()=>editTask(task.id))

  //Delete button
  const deleteBtn=document.createElement("button")
  deleteBtn.textContent="Delete"
  deleteBtn.className="btn-delete"
  deleteBtn.addEventListener("click",()=>deleteTask(task.id))

  li.appendChild(checkBox)
  li.appendChild(span)
  li.appendChild(editBtn)
  li.appendChild(deleteBtn)
  tasklist.appendChild(li)
   })
   updateItemsLeft()
}
//Update items left
function updateItemsLeft()
{
  const activecount=tasks.filter(t=> !t.completed).length
  // itemsleft.textContent=`${activecount} item(s) left`
  itemsleft.textContent = `${activecount} item${activecount !== 1 ? "s" : ""} left`

}

// Add new task
taskform.addEventListener("submit",e=>
{
  e.preventDefault()
  const text=taskinput.value.trim()
  if(text ==="")
    return
  const newtask={
    id:Date.now(),
    text,
    completed:false,
    createdAt:new Date().toISOString()
  }

  tasks.push(newtask)
  savetask()
  rendertask()
  taskinput.value=""
}
)

//Toggle task completed
function toggleTask(id)
{
 tasks = tasks.map(t =>
  t.id === id ? { ...t, completed: !t.completed } : t
)
  savetask()
  rendertask()
}

// Delete task
function deleteTask(id)
{
  tasks=tasks.filter(t=> t.id !== id)
  savetask()
  rendertask()
}
//edit task
function editTask(id) {
  const task = tasks.find(t => t.id === id)   // ek hi task find karo
  if (!task) return

  const newtext = prompt("Edit task:", task.text)
  if (newtext !== null && newtext.trim() !== "") {
    task.text = newtext.trim()  // sirf usi task ka text update karo
    savetask()
    rendertask()
  }
}


//clear completed
clearCompleted.addEventListener("click",()=>
{
  tasks=tasks.filter(t=> !t.completed)
  savetask()
  rendertask()
})

//filter (All | active | completed)
document.querySelectorAll(".filters button").forEach(btn=> 
{
  btn.addEventListener("click",()=>
  {
    currentFilter=btn.textContent.toLowerCase()
    rendertask()
  })
}
)