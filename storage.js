'use strict'
// Une classe pour gerer le stockage dans le navigateur
class Storage {
    //unconstructeur pour initialisation
    constructor(name){
        this.name = name
        this.list = this.get()
    }
    // une methode pour recuperer un tableau des valeur ou en creer si ca n'existe pas
    get(){

     if(!localStorage.getItem(this.name)){
      localStorage.setItem(this.name,'[]')
  }
  return JSON.parse(localStorage.getItem(this.name))
    }
    // une methode pour ajouter une valeur dans le tableau
    set(value){
        this.list.push(value)
        localStorage.setItem(this.name,JSON.stringify(this.list))
    }
    // une methode pour pouvoir supprimer apres usage
    remove(value){
        // on cherche l'index de la valeur a supprimer
        const index = this.list.indexOf(value)
        this.list.splice(index,1)
        localStorage.setItem(this.name,JSON.stringify(this.list))
    }
// une methode pour vider tous le tableau
    clear(){
        localStorage.removeItem(this.name)
    }
}