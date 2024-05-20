import {  rendezNevszerint,rendezArszerint} from "./rendezesek.js";
import { pInit } from "./main.js";
export function select(lista) {
    const selectElem = $("#sel");
    selectElem.on("change", function () {
      if ($(this).val() === "nov") {
        rendezArszerint(lista,1);
        pInit(lista);
      } else if ($(this).val() === "csok") {
        rendezArszerint(lista,-1);
        pInit(lista);
      } else if ($(this).val() === "nev") {
        rendezNevszerint(lista);
        pInit(lista);
      }
    });
  }