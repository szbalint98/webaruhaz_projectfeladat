import { OBJEKTUMLISTA } from "./adat.js";
import { cardkeszit} from "./kartyakeszit.js";
import { rendezArszerint } from "./rendezesek.js";
$(document).ready(function () {
    init();
  });
  function init(){
    let artElem=$("article");
    let txt=cardkeszit(OBJEKTUMLISTA);
    artElem.html(txt);
    rendezArszerint(OBJEKTUMLISTA);
    select();
  };
  
  
  function select() {
    const selectElem=$("#sel");
    selectElem.on('change', function() {
      if ($(this).val()==="nov") {
          rendezArszerint(OBJEKTUMLISTA);
          init();
    }
    })
  }
    
    
