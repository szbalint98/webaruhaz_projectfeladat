
export function rendezArszerintCsok(lista){
   lista.sort(function(a,b){return a.ar-b.ar})
   
}
export function rendezArszerintNov(lista){
    lista.sort(function(a,b){return b.ar-a.ar})
    
 }
export function sortorles(objektumlista){
   let torlesElem=$(".kuka");
   torlesElem.on("click", function(event){
      let index = $(this).prop("id");
      objektumlista.splice(index, 1);
      sortorles(objektumlista);

   })}
