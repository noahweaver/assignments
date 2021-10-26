const form = document.airlineForm;

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const age = form.age.value
    const gender = form.gender.value
    const travelLocation = form.destination.value
    const dietSelections = []
    
    for (let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            dietSelections.push(form.diet[i].value)
        }
    }
    
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + travelLocation + "\nDiet: " + dietSelections + "\nThank you for your submission with Airlines")
 
})
