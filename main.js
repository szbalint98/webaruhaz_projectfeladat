import { OBJEKTUMLISTA } from "./adat.js";
import { cardkeszit} from "./kartyakeszit.js";
$(document).ready(function () {
    init();
  });
  function init(){
    let artElem=$("article");
    let txt=cardkeszit(OBJEKTUMLISTA);
    artElem.html(txt);
    console.log(artElem)
  };