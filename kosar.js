function beir(elem,elem2){
    let kiirElem=$("#kiir");
    kiirElem.append("<p>"+elem+" : "+ elem2+" Ft "+"</p>");
 }
 function localurit(){
    localStorage.clear();
  }

 export function kosarBarak(lista, koslista){
    let kosargombELEM = $(".btn")
    kosargombELEM.on("click", function(event) {
      let index = event.target.id; 
      let kivalasztottElem = lista[index];
      koslista.push(kivalasztottElem);
      
      beir(kivalasztottElem.nev,kivalasztottElem.ar);
      console.log(koslista);
    });
  }

  export function kosarUrites(koslista){
    let kosartorolELEM = $("#ures");
    let kiirElem=$("#kiir");
    kosartorolELEM.on("click",function() {
       kiirElem.html("");
       koslista.length = 0;
       localurit();
    })
  }
  
  function localHozAd(lista){
    localStorage.setItem('videókártya',JSON.stringify(lista));
  }

  export function localMentes(lista) {
    let kosargombELEM = $("#ment");
    kosargombELEM.on("click", function() {
        localHozAd(lista);
    });
}