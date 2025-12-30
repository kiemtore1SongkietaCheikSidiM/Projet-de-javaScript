//usage du mode strict qui empeche les les petite erreurs de passer
'use strict'
//POO on creer une classe en js
// aThis class may store Number off the site et will set it for another function
class Actions{
    // The constructor in js like def init in python and here self is like this
    constructor(name){
        this.name =name
    }
    //This action will help to take the information store in localStorage
    get(){
        //So if there is no storage it will initialize on 0
     if(!localStorage.getItem(this.name)){
      localStorage.setItem(this.name, JSON.stringify(0))
  }
  //if not it will give us the main number
  return JSON.parse(localStorage.getItem(this.name))
  }
  // Here we store it and all actions outside 
   set(value){
    localStorage.setItem(this.name,JSON.stringify(value))
   }
   // This will start our local to 0
   clear(){
    localStorage.setItem(this.name, JSON.stringify(0))
   }
}