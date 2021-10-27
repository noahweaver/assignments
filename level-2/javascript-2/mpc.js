// Mario Pest Control
const form = document.billing

// const bobombCost = bobombCount * 7
// const cheepcheepsCost = cheepcheepsCount * 11
// const goombaCost = goombaCount * 5


form.addEventListener("submit", function(event){
    const goombaCount = form.goombas.value * 5
    console.log(goombaCount)
    const bobombCount = form.bobombs.value * 7
    console.log(bobombCount)
    const cheepcheepsCount = form.cheepcheeps.value * 11
    console.log(cheepcheepsCount)
    const totalCount = (parseInt(goombaCount) + parseInt(bobombCount) + parseInt(cheepcheepsCount))
    console.log(totalCount)
    event.preventDefault()
    const total = document.getElementById("total")
    total.textContent = "Total: " +totalCount+ " Coins"
})





//onchange function?
//input or input event function
