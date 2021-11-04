//Level-2 Capstone: Axios Todo Project
//API 
    //base url: https://api.vschool.io/<yourname>/todo[/<todoId>]
    //documentation: https://coursework.vschool.io/v-schools-todo-api-documentation/
    //GET All: https://api.vschool.io/<yourname>/todo
    //GET One: https://api.vschool.io/<yourname>/todo/<todoId>
    //POST: https://api.vschool.io/<yourname>/todo
    //PUT: https://api.vschool.io/<yourname>/todo/<todoId>
    //DELETE: https://api.vschool.io/<yourname>/todo/<todoId>
//

//Get
axios.get("https://api.vschool.io/noahweaver/todo")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))


