const catImg = document.querySelector(".imagem--gatos");
const catBtn = document.getElementById("mudar--imagem--gato");
const dogImg = document.querySelector(".imagem--cachorros");
const dogBtn = document.getElementById("mudar--imagem--cachorro");

async function getCatAPI() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const catData = await response.json();

    return catData;
};


async function showCatIMG() {
    const catObj = await getCatAPI();
    const img = document.createElement("img");

    img.id = await catObj[0].id
    img.src = catObj[0].url;

    catImg.appendChild(img);
};

catBtn.addEventListener("click", (e) => {
    e.preventDefault();
    catImg.innerHTML = "";

    showCatIMG();
});


async function getDogAPI() {
    const response = await fetch("https://api.thedogapi.com/v1/images/search");
    const dogData = await response.json();

    return dogData;
};

async function showDogIMG() {
    const dogObj = await getDogAPI();
    const img = document.createElement("img");

    img.id = await dogObj[0].id
    img.src = dogObj[0].url;

    dogImg.append(img);
};

dogBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dogImg.innerHTML = "";

    showDogIMG();
});