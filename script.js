// Pesquisa

const busca=document.getElementById("buscar");

busca.addEventListener("keyup",()=>{

let texto=busca.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

let nome=card.querySelector("h2").innerText.toLowerCase();

card.style.display=nome.includes(texto)?"block":"none";

});

});

// Curtidas

document.querySelectorAll(".like").forEach(botao=>{

let likes=0;

botao.onclick=function(){

likes++;

botao.querySelector("span").innerHTML=likes;

}

});

// Contadores

const numeros=document.querySelectorAll(".contador");

numeros.forEach(numero=>{

let alvo=+numero.dataset.numero;

let atual=0;

let tempo=setInterval(()=>{

atual+=Math.ceil(alvo/100);

if(atual>=alvo){

atual=alvo;

clearInterval(tempo);

}

numero.innerHTML=atual.toLocaleString("pt-BR");

},20);

});
// Modo Claro / Escuro

const tema = document.getElementById("tema");

tema.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        tema.innerHTML = "☀️ Modo Claro";
    } else {
        tema.innerHTML = "🌙 Modo Escuro";
    }

});