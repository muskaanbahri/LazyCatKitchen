const queryBox= document.getElementById("input")
const submit = document.getElementById("button")

submit.addEventListener("click", function(){
    const query= queryBox.value
    getter(query)
})
document.addEventListener("keypress", function(e){
    if(e.key=== "Enter"){
        const query= queryBox.value
        getter(query)
    }
})

const APPD= "a59a7160"
const KEY= "69e96203434da5104b731b2fd8a597b7"

async function getter(query) {
    const APPD= "a59a7160"
    const KEY= "69e96203434da5104b731b2fd8a597b7"
    const target= "https://api.edamam.com/search?q="+ query+ "&app_id="+ APPD + "&app_key="+ KEY
    
    const response = await fetch(target)
    var data = await response.json()
    console.log(data)
    console.log(data.hits[0].recipe.label)
    useApiData(data)
    
}
function useApiData(data){
    toadd=""
    for  (x = 0; x<8; x++){
        
        toadd+= `    
    <div class="card" >
        <img src="${data.hits[x].recipe.image}" class="card-ing-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">${data.hits[x].recipe.label}</h5>
             <a href="${data.hits[x].recipe.url}" class="btn">Click here for full recipe!</a>
        </div>
        
    </div>
    
    `

    }
    document.getElementById("cards").innerHTML= toadd
        
}











