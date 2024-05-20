import { KOSARLISTA, OBJEKTUMLISTA } from "./adat.js";
import { cardkeszit} from "./kartyakeszit.js";
import { select } from "./valasztottrendezes.js";
import { kosarBarak,kosarUrites,localMentes} from "./kosar.js";
import { szovegSzerint} from "./szuresek.js";

$(document).ready(function () {
  pInit(OBJEKTUMLISTA);
});

 export function pInit(lista) {
  megjelenit(lista, $("#public"), cardkeszit);
  select(lista);
  szovegSzerint(lista);
  kosarBarak(lista,KOSARLISTA);
  kosarUrites(KOSARLISTA);
  localMentes(KOSARLISTA);
}
export function megjelenit(lista, szuloElem, fv){
  let txt = fv(lista);
  szuloElem.html(txt);
}



