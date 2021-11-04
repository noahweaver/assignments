//Level-2 Capstone: Axios Todo Project
//API 
    //base url: https://api.vschool.io/<yourname>/todo[/<todoId>]
    //documentation: https://coursework.vschool.io/v-schools-todo-api-documentation/
    //GET All: https://api.vschool.io/<yourname>/todo
    //GET One: https://api.vschool.io/<yourname>/todo/<todoId>
    //POST: https://api.vschool.io/<yourname>/todo
    //PUT: https://api.vschool.io/<yourname>/todo/<todoId>
    //DELETE: https://api.vschool.io/<yourname>/todo/<todoId>
    //<yourname> = noahweaver
    //<todoId> = object ID from GET
//

//Get data
function getData(){
    axios.get("https://api.vschool.io/noahweaver/todo")
        .then(res => listTodo(res.data))
        .catch(error => console.log(error))
}

//add item to DOM
function listTodo (data){
    clearList()

        for (let i = 0; i < data.length; i++){
            const newDiv = document.createElement('div')
            const h1 = document.createElement('h1')
            const checkbox = document.createElement('input')
            const p = document.createElement('p')
            const img = document.createElement('img')
            const price = document.createElement('p')
            const xButton = document.createElement('button')
            newDiv.setAttribute("class", "new-divs")
            h1.textContent = data[i].title
            checkbox.type = "checkbox"
            checkbox.value = "completed"
            checkbox.setAttribute("class", "checkbox")
            xButton.textContent = "Delete"
            p.textContent = data[i].description
            img.src = data[i].imgUrl
            //price not showing up
            price.textContent = data[i].price
            document.getElementById("list").appendChild(newDiv)
            newDiv.appendChild(h1).appendChild(checkbox)
            newDiv.appendChild(p)
            newDiv.appendChild(img)
            //price not showing up
            newDiv.appendChild(price)
            newDiv.appendChild(xButton)
            
            if(data[i].completed === true){
                h1.style.setProperty("text-decoration", "line-through")
                p.style.setProperty("text-decoration", "line-through")
                checkbox.checked = true
            }
            checkbox.addEventListener("change", function(event){
                event.preventDefault()
                const complete = {
                    completed: true
                }
                const notComplete = {
                    completed: false
                }
                if (checkbox.checked){
                    axios.put(`https://api.vschool.io/noahweaver/todo/${data[i]._id}`, complete)
                    .then(res => getData())
                    .catch(err => console.log(err))
                } else {
                    axios.put(`https://api.vschool.io/noahweaver/todo/${data[i]._id}`, notComplete)
                    .then(res => getData())
                    .catch(err => console.log(err))
                }
            })
            xButton.addEventListener("click", function(event){
                event.preventDefault()

                axios.delete(`https://api.vschool.io/noahweaver/todo/${data[i]._id}`)
                    .then(res => getData())
                    .catch(err => console.log(err))
            })
            }
        }

//clear list function
function clearList(){
    const list = document.getElementById("list")
    while(list.firstChild){
        list.removeChild(list.firstChild)
    }
}

getData()

//Add Item to API
const todoForm = document.todoForm
todoForm.addEventListener("submit", function(event){
    event.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }

    axios.post("https://api.vschool.io/noahweaver/todo", newTodo)
        .then(res => getData())
        //this console.log comes back undefined. console.log(res.data) isn't working either
        .then(res => console.log(res))
        .catch(err => console.log(err))

    todoForm.title.value = ""
    todoForm.description.value = ""
    todoForm.imgUrl.value = ""
})