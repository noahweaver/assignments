//Go Speed Clicker
const button = document.getElementById("button")

totalClicks = JSON.parse(sessionStorage.getItem("total clicks"))
if (totalClicks === null){
    totalClicks = 0
}

document.getElementById("total").textContent = "Total Clicks: " +totalClicks
button.addEventListener("click", () => {
    totalClicks += 1
    document.getElementById("total").textContent = "Total Clicks: " + totalClicks
    sessionStorage.setItem("total clicks", totalClicks)
})


