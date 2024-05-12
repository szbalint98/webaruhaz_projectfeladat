export function cardkeszit(objektumlista){
    let txt=""
    
    for (let index = 0; index < objektumlista.length; index++) {
        txt+=`<div class="card" style="width:200px">
        <img class="card-img-top" src=${objektumlista[index].kep} alt="Card image">
        <div class="card-body">
          <h4 class="card-title">${objektumlista[index].nev}</h4>
          <p class="card-text">${objektumlista[index].gyarto}</p>
          <p class="card-text">Ár:${objektumlista[index].ar} Ft</p>
          <button id='${index}' class='btn btn-primary'>Kosárba!</button>
        </div>
      </div>`
    }
    return txt;
};
export function tablazatKeszit(objektumlista) {
  let txt = `<table class="table table-dark table-striped" ><tr><th>Név</th><th>Gyártó:</th><th>Ár:</th><th>Törlés</th></tr>`;

  objektumlista.forEach((objektum, index) => {
      txt += "<tr>";
      let count = 0;

      for (let key in objektum) {
          if (count < 3) {
              txt += `<td>${objektum[key]}</td>`;
          }
          count++;
      }
      
      txt += `<td><button class="kuka" id="${index}">🗑️</button></td></tr>`;
  });

  txt += "</table>";
  return txt;
}