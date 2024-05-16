import { tablazatKeszit } from "./kartyakeszit.js";
import { OBJEKTUMLISTA } from "./adat.js";
import { rendezArszerint , sortorles} from "./rendezesek.js";
import { megjelenit } from "./main.js";
$(document).ready(function () {
    aInit(OBJEKTUMLISTA);
  });
  let katt = 1;
  export function aInit(lista) {
    megjelenit(lista,$("#admintabla"),tablazatKeszit);
    adminrendezesArszerint(lista,katt);
    sortorles(lista);
  }
  function adminrendezesArszerint(lista) {
    let thElem = $("table th:first");
    thElem.on("click", function () {
      rendezArszerint(lista, katt);
      katt *= -1;
      aInit(lista);
    });
  }
  function ujEszkoz() {
    
  }