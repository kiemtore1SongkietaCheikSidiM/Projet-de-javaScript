A programme that a made for countiong the number of passeport succed to upload
src ="https://www.w3schools.com/Js/#gsc.tab=0&gsc.q=localStorage"
Here my draft
/*
function calcul(){
        entrer.textContent = input.value
        let ok = parseInt(entrer.textContent)
        let reel = parseInt(total.textContent)
        let result = ok + reel
        total.textContent = result
        input.value = ''
}

input.addEventListener('keydown',e =>{
    if (e.key === 'Enter'){
        e.preventDefault()
        calcul()
        }
    input.focus()
})

renitialiser.addEventListener('click',()=>{
    renitialiser.remove()
    const h1 = document.createElement('h1')
    h1.textContent = 'Etes vous un administrateur ?'
    const mot = document.createElement('div')
    mot.innerHTML = "<input type='text' id='list' placeholder='Mot de passe admin'>"
    const list = document.getElementById('list')
    admin.appendChild(h1)
    admin.appendChild(mot)
    list.addEventListener('keydown',e =>{
            if(e.key ==='Enter'){
            if(list.value ==='Huu78L0Zu'){
              Actions.clear()  
            }
              

            }
            list.focus()
            list.value = ''
        })
    
})


const x = document.getElementById("result");

if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("lastname", "Smith");
  localStorage.setItem("bgcolor", "yellow");
  // Retrieve
  x.innerHTML = localStorage.getItem("lastname");
  x.style.backgroundColor = localStorage.getItem("bgcolor");
} else {
  x.innerHTML = "Sorry, no Web storage support!";
}
  
entrer.textContent = input.value
let ok = parseInt(entrer.textContent)
let or =parseInt(total.textContent)
localStorage.setItem("lastname", or)
let b = parseInt(localStorage.getItem(lastname))
let result = ok + b
total.textContent = result
*/