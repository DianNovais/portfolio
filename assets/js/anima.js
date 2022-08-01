const header = document.getElementById('header');
const tudo = document.getElementById('tudo');
const info = document.getElementById('info');
const footer = document.getElementById('footer');

function AbrirTudo(){
    header.style.height = "100vh";
    header.style.transform = "translateY(0px)";
    header.style.transition = "2s";

    tudo.style.height = "100%";
    tudo.style.transform = "translateY(0px)";
    tudo.style.transition = "2s";

    info.style.visibility = "hidden";

    footer.style.transform = "translateY(0px)";
    footer.style.transition= "2s";
    footer.style.height = "10vh";
}
function FecharTudo(){
    header.style.height = "0";
    header.style.transform = "translateY(-1000px)";
    header.style.transition = "2s";

    tudo.style.height = "0";
    tudo.style.transform = "translateY(1000px)";
    tudo.style.transition = "2s";

    info.style.visibility = "visible";

    footer.style.height = "0";
    footer.style.transform = "translateY(1000px)";
    footer.style.transition= "2s";
    
}