const nicosia = document.getElementById("nicosia");
const limasol = document.getElementById("limasol");
const paphos = document.getElementById("paphos");
const larnaka = document.getElementById("larnaka");
const mainPhoto = document.querySelector(".main__content");
const title = document.querySelector(".info__title");

nicosia.onclick = () => {
    mainPhoto.style.backgroundImage = `url('../img/nicossia.jpg')`;
    title.textContent = "Nicosia";
}
limasol.onclick = () => {
    mainPhoto.style.backgroundImage = `url('../img/limassol.jpg')`;
    title.textContent = "Limasol";
}
paphos.onclick = () => {
    mainPhoto.style.backgroundImage = `url('../img/papphos.jpeg')`;
    title.textContent = "Paphos";
}
larnaka.onclick = () => {
    mainPhoto.style.backgroundImage = `url('../img/larnakka.jpg')`;
    title.textContent = "Larnaka";
}

function fnicosia() {
    mainPhoto.style.backgroundImage = `url('../img/nicossia.jpg')`;
    title.textContent = "Nicosia";

    limasol.style.display="none";
    paphos.style.display="none";
    larnaka.style.display="none";
    nicosia.style.cssText = "display: block; transform: scale(1.05);  background: linear-gradient(to right, #6D31D0, #AB80EF); color:white;";
}
function flimasol() {
    mainPhoto.style.backgroundImage = `url('../img/limassol.jpg')`;
    title.textContent = "Limasol";

    nicosia.style.display="none";
    paphos.style.display="none";
    larnaka.style.display="none";
    limasol.style.cssText = "display: block; transform: scale(1.05);  background: linear-gradient(to right, #6D31D0, #AB80EF); color:white;";
}
function fpaphos() {
    mainPhoto.style.backgroundImage = `url('../img/papphos.jpeg')`;
    title.textContent = "Paphos";

    nicosia.style.display="none";
    limasol.style.display="none";
    larnaka.style.display="none";
    paphos.style.cssText = "display: block; transform: scale(1.05);  background: linear-gradient(to right, #6D31D0, #AB80EF); color:white;";
}
function flarnaka() {
    mainPhoto.style.backgroundImage = `url('../img/larnakka.jpg')`;
    title.textContent = "Larnaka";

    nicosia.style.display="none";
    limasol.style.display="none";
    paphos.style.display="none";
    larnaka.style.cssText = "display: block; transform: scale(1.05);  background: linear-gradient(to right, #6D31D0, #AB80EF); color:white;";
}


const but1 = document.getElementById("butbottom1");
const but2 = document.getElementById("butbottom2");
const but3 = document.getElementById("butbottom3");
const question1 = document.getElementById("questionbusiness");
const question2 = document.getElementById("questioncost");
const question3 = document.getElementById("questioncities");
but1.onclick = () => {
    question1.style.display = "flex";
    question2.style.display = "none";
    question3.style.display = "none";
}
but2.onclick = () => {
    question2.style.display = "flex";
    question1.style.display = "none";
    question3.style.display = "none";
}
but3.onclick = () => {
    question3.style.display = "flex";
    question2.style.display = "none";
    question1.style.display = "none";
}
