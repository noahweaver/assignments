// Mario Pest Control
const form = document.billing

const goombaCount = form.goombas.value
const bobombCount = form.bobombs.value
const cheepcheepsCount = form.cheepcheeps.value
const bobombCost = bobombCount * 7
const cheepcheepsCost = cheepcheepsCount * 11
const goombaCost = goombaCount * 5

// const totalCount = goombaCount + bobombCount + cheepcheepsCount

const total = document.getElementById("total")
total.textContent = "Total: " +(goombaCost + bobombCost + cheepcheepsCost)+ " Coins"




//onchange function?
//input or input event function
