'use strict'
const input = document.getElementById('nombre')
//document get element with id 
const valid = document.getElementById('valid')
const entrer = document.getElementById('entrer')
const total = document.getElementById('total')
const renitialiser = document.getElementById('renitialiser')
const admin = document.getElementById('admin')


const actions = new Actions(total) // Calling the class action note that to call a class we always use the name newit important
// function to make calculation
function calcul(){
    //Put the number take in imput and make it a text and put it in input text by taking old text place
        entrer.textContent = input.value
//The variable ok or will take information in type of number because of parse
        let ok = parseInt(input.value, 10) || 0

        let or = parseInt(actions.get())
//here an addition
        let result = ok + or
        total.textContent = result

        rer()// an function

        input.value = ''
       
}
function rer(){//store it in local
    actions.set(parseInt(total.textContent, 10))
}
// The input event
input.addEventListener('keydown',e =>{
    if (e.key === 'Enter'){
        e.preventDefault()
        calcul()
        }
    input.focus()
})
//the button event
valid.addEventListener('click',(e) =>{
    e.preventDefault()
    calcul()
})
//A button to clear all the number in store and start it with 0
renitialiser.addEventListener('click',()=>{
    renitialiser.remove()
    const h1 = document.createElement('h1')
    h1.textContent = 'Etes vous un administrateur ?'
    const mot = document.createElement('div')
    mot.innerHTML = "<input type='text' id='list' placeholder='Mot de passe admin'>"
    admin.appendChild(h1)
    admin.appendChild(mot)
    const list = document.getElementById('list')
    list.focus()//important
    list.addEventListener('keyup', e=>{
        if(e.key === 'Enter'){
            e.preventDefault//important
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