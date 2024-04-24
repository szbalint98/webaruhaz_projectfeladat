export function cardkeszit(objektumlista){
    let txt=""
    
    for (let index = 0; index < objektumlista.length; index++) {
        txt+=`"<div class="card" style="width:300px">
        <img class="card-img-top" src="img_avatar1.png" alt="Card image">
        <div class="card-body">
          <h4 class="card-title">John Doe</h4>
          <p class="card-text">Some example text.</p>
          <a href="#" class="btn btn-primary">See Profile</a>
        </div>
      </div>`
    }
    return txt;
};