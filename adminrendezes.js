
import { rendezArszerint} from "./rendezesek.js";
import { aInit} from "./admin.js";
let katt = 1;
export function adminrendezesArszerint(lista) {
    let thElem = $("table th:first");
    thElem.on("click", function () {
      rendezArszerint(lista, katt);
      katt *= -1;
      aInit(lista);
      
    })};