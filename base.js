//DOM 
'use strict'
const list = document.getElementById('list')
const input = document.getElementById('input')
const add = document.getElementById('add')
const clear = document.getElementById('clear')
const url = document.getElementById('url')
const load = document.getElementById('load')


//Une nouvelle instance pour stocker les taches
const storage = new Storage('tasks')
// On recupere le tableau des taches deja existant ou un tableau vide 
const tasks = storage.list
// c'est une fonction qui ajoute une tache dans la liste 

function dom(task){
    if (typeof task === 'string' && task){
        const li = document.createElement('li')
        const remove = document.createElement('button')

        li.textContent = task
        remove.textContent = 'Delete'

        remove.addEventListener('click', () =>{
            const value = remove.parentNode.firstChild.textContent
            storage.remove(value)
            list.removeChild(remove.parentNode)
        })

        li.appendChild(remove)

        list.insertBefore(li, list.firstChild)
        return true
    }
    return false
}
tasks.forEach(task => dom(task))

// Ajout des taches dans la liste
// on gere l'ajout de nouvelles taches avec le button add et la touche entrer
function newtask(){
    if (storage.list.indexOf(input.value) === -1 && dom(input.value)){
        storage.set(input.value)
        input.value = ''
    }
 input.focus()
}
add.addEventListener('click',newtask)
input.addEventListener('keydown',e =>{
    if(e.key === 'Enter'){
        newtask()
    }
})
//on supprime la liste du DOM et du navigateur
clear.addEventListener('click',() =>{
    storage.clear()
    list.innerHTML =''
})
//importation des taches
load.addEventListener('click',()=>{
    
})
