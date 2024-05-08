import { OBJEKTUMLISTA } from "./adat.js";
import { cardkeszit} from "./kartyakeszit.js";
import { rendezNevszerint } from "./rendezesek.js";

$(document).ready(function () {
  pInit(OBJEKTUMLISTA);
});

 function pInit(lista) {
  megjelenit(lista, $("#public"), cardkeszit);
  select();
  szovegSzerint();
}

export function megjelenit(lista, szuloElem, fv){
  let txt = fv(lista);
  szuloElem.html(txt);
}

function select() {
  const selectElem = $("#sel");
  selectElem.on("change", function () {
    if ($(this).val() === "nov") {
      rendezArszerintNov(OBJEKTUMLISTA);
      pInit();
    } else if ($(this).val() === "csok") {
      rendezArszerintCsok(OBJEKTUMLISTA);
      pInit();
    } else if ($(this).val() === "nev") {
      rendezNevszerint(OBJEKTUMLISTA);
      pInit();
    }
  });
}
function szures(lista,szurtSzoveg){
  const SZURTLISTA=lista.filter(function(elem) {
  return elem.nev.includes(szurtSzoveg)
})
  return SZURTLISTA
}
function szovegSzerint(){
  const keresElem=$("#szur")
  keresElem.on("keyup", function () {
      let szoveg=keresElem.val();
      szoveg.toLowerCase()
      const LISTA=szures(OBJEKTUMLISTA,szoveg)
      pInit(LISTA)
      
  })
}
