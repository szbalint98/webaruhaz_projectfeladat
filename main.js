import { OBJEKTUMLISTA } from "./adat.js";
import { cardkeszit} from "./kartyakeszit.js";
import { rendezArszerintNov, rendezArszerintCsok } from "./rendezesek.js";
$(document).ready(function () {
    init();
  });
  function init(){
    let artElem=$("article");
    let txt=cardkeszit(OBJEKTUMLISTA);
    artElem.html(txt);
    select();
  };
  
  
  function select() {
    const selectElem=$("#sel");
    selectElem.on('change', function() {
      if ($(this).val()==="nov") {
          rendezArszerintNov(OBJEKTUMLISTA);
          init();
    }else if($(this).val()==="csok"){
        rendezArszerintCsok(OBJEKTUMLISTA);
          init();
    }
    })
  }
    
    
