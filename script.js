'use strict'
const input = document.getElementById('nombre')
const valid = document.getElementById('valid')
const entrer = document.getElementById('entrer')
const total = document.getElementById('total')
const renitialiser = document.getElementById('renitialiser')
const admin = document.getElementById('admin')


const actions = new Actions(total)
function calcul(){
    
        entrer.textContent = input.value

        let ok = parseInt(input.value, 10) || 0

        let or = parseInt(actions.get())

        let result = ok + or
        total.textContent = result

        rer()

        input.value = ''
       
}
function rer(){
    actions.set(parseInt(total.textContent, 10))
}

input.addEventListener('keydown',e =>{
    if (e.key === 'Enter'){
        e.preventDefault()
        calcul()
        }
    input.focus()
})
valid.addEventListener('click',(e) =>{
    e.preventDefault()
    calcul()
})
renitialiser.addEventListener('click',()=>{
    renitialiser.remove()
    const h1 = document.createElement('h1')
    h1.textContent = 'Etes vous un administrateur ?'
    const mot = document.createElement('div')
    mot.innerHTML = "<input type='text' id='list' placeholder='Mot de passe admin'>"
    admin.appendChild(h1)
    admin.appendChild(mot)
    const list = document.getElementById('list')
    list.focus()
    list.addEventListener('keyup', e=>{
        if(e.key === 'Enter'){
            e.preventDefault
            let passeword = list.value.trim()
            if(passeword ==='Huu78L0Zu'){
                actions.clear()
                alert('Ok Mr Administrateur on peut recommencer')
            } else {
                const p = document.createElement('p')
                p.textContent = "Mot de passe incorrect ou vous n'etes pas un administrateur"
                admin.appendChild(p)
            }
            list.value = ''
        }
    })
    

})

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