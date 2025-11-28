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
})


document.querySelectorAll('.button2').forEach(botao => {
    botao.addEventListener('click', function (e) {
        e.preventDefault();                
        this.classList.toggle('ativo');       
    });
});


    document.addEventListener('DOMContentLoaded', () => {
      let itensAdicionados = 0;
      const contador = document.getElementById('contador');

      function atualizaContador() {
        contador.textContent = "Itens adicionados: " + itensAdicionados;
      }

      document.querySelectorAll('.button2').forEach(botao => {
        botao.replaceWith(botao.cloneNode(true));
      });

      document.querySelectorAll('.button2').forEach(botao => {
        botao.addEventListener('click', function (e) {
          e.preventDefault && e.preventDefault();

          const ativadoAgora = this.classList.toggle('ativo');
          if (ativadoAgora) itensAdicionados++;
          else itensAdicionados = Math.max(0, itensAdicionados - 1);

          if (ativadoAgora) {
            this.style.backgroundColor = '#44d6f3';
            this.style.transform = 'scale(1.05)';
          } else {
            this.style.backgroundColor = '#32bcd9';
            this.style.transform = 'scale(1.005)';
          }

          atualizaContador();
          console.log('Clique em:', this.textContent.trim(), 'ativado?', ativadoAgora);
        });

        botao.addEventListener('focus', () => botao.style.outline = '2px solid rgba(0,0,0,0.1)');
        botao.addEventListener('blur', () => botao.style.outline = 'none');
      });

      atualizaContador();
      console.log('Script de teste iniciado — botões prontos.');
    });


document.addEventListener('DOMContentLoaded', () => {
  let itensRemovidos = 0;
  const contador2 = document.getElementById('contador2');

  function atualizaContador2() {
    contador2.textContent = "Itens removidos: " + itensRemovidos;
  }

  // Remove listeners antigos (caso haja)
  document.querySelectorAll('.button4').forEach(botao => {
    botao.replaceWith(botao.cloneNode(true));
  });

  // Re-seleciona os botões já clonados
  document.querySelectorAll('.button4').forEach(botao => {

    botao.addEventListener('click', function (e) {
      e.preventDefault && e.preventDefault();

      const ativadoAgora = this.classList.toggle('ativo');

      if (ativadoAgora) itensRemovidos++;
      else itensRemovidos = Math.max(0, itensRemovidos - 1);

      // Estilo quando ativo
      if (ativadoAgora) {
        this.style.backgroundColor = '#44d6f3';
        this.style.transform = 'scale(1.05)';
      } else {
        this.style.backgroundColor = '#32bcd9';
        this.style.transform = 'scale(1.005)';
      }

      atualizaContador2();
      console.log('Clique em:', this.textContent.trim(), 'ativado?', ativadoAgora);
    });

    botao.addEventListener('focus', () => botao.style.outline = '2px solid rgba(0,0,0,0.1)');
    botao.addEventListener('blur', () => botao.style.outline = 'none');
  });

  atualizaContador2();
  console.log('Script de teste iniciado — botões de remoção prontos.');
});