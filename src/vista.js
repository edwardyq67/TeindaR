const todoDentro1=document.querySelector(".todoDentro1")
const todoDentro2=document.querySelector(".todoDentro2")
// evento1
todoDentro1.addEventListener("mouseover", () => {
    // Aplicar estilos al elemento cuando el mouse está sobre él
    todoDentro1.style.transform = "scale(1.1)";
    todoDentro1.style.transition = "all ease .25s";
    todoDentro1.style.color="#4b5563"
});

todoDentro1.addEventListener("mouseout", () => {
    // Revertir los estilos cuando el mouse sale del elemento
    todoDentro1.style.transform = "scale(1)";
    todoDentro1.style.transition = "all ease .25s";
    todoDentro1.style.color="black"
});

// evento2
todoDentro2.addEventListener("mouseover", () => {
    // Aplicar estilos al elemento cuando el mouse está sobre él
    todoDentro2.style.transform = "scale(1.1)";
    todoDentro2.style.transition = "all ease .25s";
    todoDentro2.style.color="#4b5563"
});

todoDentro2.addEventListener("mouseout", () => {
    // Revertir los estilos cuando el mouse sale del elemento
    todoDentro2.style.transform = "scale(1)";
    todoDentro2.style.transition = "all ease .25s";
    todoDentro2.style.color="black"
});
