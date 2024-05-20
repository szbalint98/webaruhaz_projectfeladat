import { pInit } from "./main.js";

function szures(lista,szurtSzoveg){
    const SZURTLISTA=lista.filter(function(elem) {
    return elem.nev.toLowerCase().includes(szurtSzoveg)
  })
    
    return SZURTLISTA
  }
  export function szovegSzerint(lista){
    const keresElem=$("#szur")
    keresElem.on("keyup", function () {
        let szoveg=keresElem.val().toLowerCase();
        
        const LISTA=szures(lista,szoveg)
        pInit(LISTA)
        
    })
  }