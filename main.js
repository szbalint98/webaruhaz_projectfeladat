import { KOSARLISTA, OBJEKTUMLISTA } from "./adat.js";
import { cardkeszit} from "./kartyakeszit.js";
import { kosarBarak, rendezNevszerint,kosarUrites, rendezArszerint } from "./rendezesek.js";

$(document).ready(function () {
  pInit(OBJEKTUMLISTA);
});

 function pInit(lista) {
  megjelenit(lista, $("#public"), cardkeszit);
  select();
  szovegSzerint();
  kosarBarak(lista,KOSARLISTA);
  kosarUrites(KOSARLISTA);
}
export function megjelenit(lista, szuloElem, fv){
  let txt = fv(lista);
  szuloElem.html(txt);
}

function select() {
  const selectElem = $("#sel");
  selectElem.on("change", function () {
    if ($(this).val() === "nov") {
      rendezArszerint(OBJEKTUMLISTA,1);
      pInit(OBJEKTUMLISTA);
    } else if ($(this).val() === "csok") {
      rendezArszerint(OBJEKTUMLISTA,-1);
      pInit(OBJEKTUMLISTA);
    } else if ($(this).val() === "nev") {
      rendezNevszerint(OBJEKTUMLISTA);
      pInit(OBJEKTUMLISTA);
    }
  });
}
function szures(lista,szurtSzoveg){
  const SZURTLISTA=lista.filter(function(elem) {
  return elem.nev.toLowerCase().includes(szurtSzoveg)
})
  
  return SZURTLISTA
}
function szovegSzerint(){
  const keresElem=$("#szur")
  keresElem.on("keyup", function () {
      let szoveg=keresElem.val().toLowerCase();
      
      const LISTA=szures(OBJEKTUMLISTA,szoveg)
      pInit(LISTA)
      
  })
}
