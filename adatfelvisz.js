export function adatFelvisz(lista){
    let felviszElem = $("#felir");
    felviszElem.off('click');
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
       
       aInit(lista)
    })
    
    }