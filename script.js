const todosCarrosseis = document.querySelectorAll(".slides");
const largura = 300;

todosCarrosseis.forEach((slides) => {
  const imagens = Array.from(slides.querySelectorAll("img"));

  imagens.forEach((img) => {
    const clone = img.cloneNode(true);
    slides.appendChild(clone);
  });

  let indice = 0;

  function mudarSlide() {
    indice++;
    slides.style.transition = "transform 0.8s ease-in-out";
    slides.style.transform = `translateX(${-indice * largura}px)`;

    if (indice === imagens.length) {
      setTimeout(() => {
        slides.style.transition = "none";
        slides.style.transform = "translateX(0)";
        indice = 0;
      }, 800);
    }
  }

  setInterval(mudarSlide, 3000);
});