const baseURL = "https://api.giphy.com/v1/gifs/random?api_key=G1Wbqbl1wAnP773Gs9ifpSbNmp10t4Xt&tag=trippy&rating=pg";
const button = document.getElementById("requestTrippyGif");
const theGifItself = document.getElementById("theGifItSelf");
requestTrippyGif.addEventListener('click', fetchGif); 

async function fetchGif() {
    let response = await fetch(baseURL);
    let json = await response.json();

    displayGif(json);
}

let displayGif = json => {
    console.log(json);
    while (theGifItself.firstChild) {
        theGifItself.removeChild(theGifItself.firstChild); 
    }
    
    let card=document.createElement("div");
    card.classname="card";
    let img = document.createElement("img");
    img.classname="card-img-top";
    img.src=json.data.image_url;
    let cardBody=document.createElement("div");
    cardBody.classname="card-body";
    let p = document.createElement("p");
    p.style = "color: #ffffff";
    p.classname="card-text";
    p.innerText=json.data.title;

    theGifItself.appendChild(card);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(p);

}



















