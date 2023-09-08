import {products} from './data.js'
let box = document.querySelector(".box");

for(let i of products){
    let wrapBox = document.createElement('div');
    // let title = document.createElement('h2');
    // let img = document.createElement( "img" );
    // wrapBox.className = "card-box";

    // title.textContent= i.title;
    // title.className = "title";

    // img.src= i.img;
    // img.className = "img";

    // wrapBox.append(img ,title);

    wrapBox.innerHTML=`
        <img class="img" scr = "${i.img}"/>
        <h2 class ="title">${i.title}</h2>
    `;


    // box.prepend (wrapBox);
    box.append(wrapBox);
}