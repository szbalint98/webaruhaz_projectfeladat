import { cardkeszit} from "./kartyakeszit.js";
$(document).ready(function () {
    init();
  });
  function init(){
    let artElem=$("article");
    artElem=cardkeszit(6);
    console.log(artElem)
  };