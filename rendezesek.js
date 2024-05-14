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
   function beir(elem,elem2){
      let kiirElem=$("#kiir");
      kiirElem.append("<p>"+elem+" : "+ elem2+" Ft "+"</p>");
      

   }
   export function kosarBarak(lista, koslista){
      let kosargombELEM = $(".btn")
      kosargombELEM.on("click", function(event) {
        let index = event.target.id; 
        let kivalasztottElem = lista[index];
        koslista.push(kivalasztottElem);
        beir(kivalasztottElem.nev,kivalasztottElem.ar);
        console.log(koslista);
      });
    }
    export function kosarUrites(koslista){
      let kosartorolELEM = $("#ures");
      let kiirElem=$("#kiir");
      console.log(kosartorolELEM);
      console.log(kiirElem);
      kosartorolELEM.on("click",function() {
         kiirElem.html("");
         koslista.length = 0;
      })

    }
  