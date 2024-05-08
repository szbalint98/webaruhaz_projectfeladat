import { aInit } from "./admin.js";
export function rendezArszerint(lista,irany){
   lista.sort(function(a,b){return irany * (a.ar-b.ar)})
   
} 
 
 export function rendezNevszerint(lista){
   lista.sort(function(a, b) {
      if (a.nev < b.nev) return -1; 
      if (a.nev > b.nev) return 1; 
      return 0; 
   });
}
export function sortorles(objektumlista){
   let torlesElem=$(".kuka");
   torlesElem.on("click", function(event){
      let index = $(this).prop("id");
      objektumlista.splice(index, 1);
      aInit(objektumlista);

   })}
