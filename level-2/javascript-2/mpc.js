// Mario Pest Control
const form = document.billing

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
