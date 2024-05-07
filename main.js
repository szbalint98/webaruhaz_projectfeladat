import { OBJEKTUMLISTA } from "./adat.js";
import { cardkeszit,tablazatKeszit} from "./kartyakeszit.js";
import { rendezArszerintNov, rendezArszerintCsok, sortorles } from "./rendezesek.js";
$(document).ready(function () {
    init();
    sortorles(OBJEKTUMLISTA);
  });
  function init(){
    let artElem=$("#public");
    let adminTablaEelem=$("#admintabla")
    adminTablaEelem.html("Hello")
    let txt=cardkeszit(OBJEKTUMLISTA);
    artElem.html(txt);
    txt=tablazatKeszit(OBJEKTUMLISTA);
    adminTablaEelem.html(txt);
    console.log(txt)
    select();
    adminrendezesArszerint();
    
  };
  
  function adminrendezesArszerint(){
    let katt=true;
    let thElem=$("table th:first");
    thElem.on('click', function () {
      
      if (katt) {
        rendezArszerintCsok(OBJEKTUMLISTA);
        katt=false;
        init();
      }else{
        rendezArszerintNov(OBJEKTUMLISTA);
        katt=true;
        init();
      }
        
    })
  }
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
    
    
