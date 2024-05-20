import { aInit } from "./admin.js";
export function sortorles(objektumlista){
    let torlesElem=$(".kuka");
    torlesElem.on("click", function(event){
       let index = $(this).prop("id");
       objektumlista.splice(index, 1);
       aInit(objektumlista);
 
    })}
 