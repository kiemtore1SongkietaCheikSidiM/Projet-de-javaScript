'use strict'
class Actions{
    constructor(name){
        this.name =name
    }
    get(){
     if(!localStorage.getItem(this.name)){
      localStorage.setItem(this.name, JSON.stringify(0))
  }
  return JSON.parse(localStorage.getItem(this.name))
  }
   set(value){
    localStorage.setItem(this.name,JSON.stringify(value))
   }
   clear(){
    localStorage.setItem(this.name, JSON.stringify(0))
   }
}