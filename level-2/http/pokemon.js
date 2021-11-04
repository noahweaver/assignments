//Pokemon

//url: https://api.vschool.io/pokemon

const xhr = new XMLHttpRequest()
        //type of req   //url                   //async?
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            const JSONdata = xhr.responseText
            const data = JSON.parse(JSONdata)
            pokemonList(data.objects)
            console.log(data.objects)
        } 
    }
function pokemonList(pokemon){
        for (let i = 0; i < pokemon.length; i++) {
                const h3 = document.createElement('h3')
                h3.textContent = pokemon[i].name
                document.body.appendChild(h3)
        }
}