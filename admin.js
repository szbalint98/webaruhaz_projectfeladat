import { tablazatKeszit } from "./kartyakeszit.js";
import { OBJEKTUMLISTA } from "./adat.js";
import { megjelenit } from "./main.js";
import { adatFelvisz } from "./adatfelvisz.js";
import { sortorles } from "./sortorol.js";
import {adminrendezesArszerint} from "./adminrendezes.js";
$(document).ready(function () {
    aInit(OBJEKTUMLISTA);
  });
  
  export function aInit(lista) {
    megjelenit(lista,$("#admintabla"),tablazatKeszit);
    adminrendezesArszerint(lista,katt);
    sortorles(lista);
    adatFelvisz(lista);
  }
  