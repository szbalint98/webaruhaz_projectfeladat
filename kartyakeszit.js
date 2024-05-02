export function cardkeszit(objektumlista){
    let txt=""
    
    for (let index = 0; index < objektumlista.length; index++) {
        txt+=`<div class="card" style="width:200px">
        <img class="card-img-top" src=${objektumlista[index].kep} alt="Card image">
        <div class="card-body">
          <h4 class="card-title">${objektumlista[index].nev}</h4>
          <p class="card-text">${objektumlista[index].gyarto}</p>
          <p class="card-text">Ár:${objektumlista[index].ar}</p>
          <a href='#' class='btn btn-primary'>Kosárba!</a>
        </div>
      </div>`
    }
    return txt;
};