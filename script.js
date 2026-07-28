const likes = document.querySelectorAll(".like");

likes.forEach(botao => {

    botao.addEventListener("click", function(){

        if(this.innerHTML==="❤️ Curtir"){

            this.innerHTML="💖 Curtido!";
            this.style.background="#00b894";

        }else{

            this.innerHTML="❤️ Curtir";
            this.style.background="#ff3d3d";

        }

    });

});

const busca = document.getElementById("buscar");

busca.addEventListener("keyup", ()=>{

    const texto = busca.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card=>{

        const titulo = card.querySelector("h2").textContent.toLowerCase();

        if(titulo.indexOf(texto)>-1){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});