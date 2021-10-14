//PART 1
//A user will be able to add list items to the pre-built ul using the pre-built form
// New list items should have the same format as the li's that came with the git repo


document.getElementById("submit").addEventListener("click", function(e){
    e.preventDefault()
    createListItem(e)
    console.log(e)
    console.log(e.target)
    const input = document.addItem.title
    input.value = ""
})
function createListItem(e){
    const list = document.getElementById("list")
    const listItem = document.createElement("li")
    listItem.setAttribute ("class", "listItem")
    list.append(listItem)
    var listItemValue = document.getElementById("title").value      
    const listItemDiv = document.createElement("div")        
    listItemDiv.textContent = listItemValue
    console.log(listItemValue)
    listItemDiv.setAttribute("class", "list-items")
    listItem.appendChild(listItemDiv)
    const editButton = document.createElement("button")
    editButton.textContent = "edit"
    editButton.setAttribute("class", "edit")
    listItem.appendChild(editButton)
    const xButton = document.createElement("button")
    xButton.textContent = "X"
    xButton.setAttribute("class", "x")
    listItem.appendChild(xButton)
    //PART 2
    //MAKE THE DELETE BUTTON WORK
    xButton.addEventListener("click", function(e){
        console.log("delete button")
        list.removeChild(listItem)
    })}
