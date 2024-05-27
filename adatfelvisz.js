import { aInit } from "./admin.js";
export function adatFelvisz(lista){
    let felviszElem = $("#felir");
    
    let nevElem=$("#knev").val();
    let gyartoElem=$("#kgyarto").val();
    let arElem=$("#kar").val();
    felviszElem.on('click', function(){
       
       lista.push(
          {
             nev:`${nevElem}`,
             gyarto:`${gyartoElem}`,
             ar:`${arElem}`,
          }
       )
       console.log(lista)
       aInit(lista)
    })
    
    }