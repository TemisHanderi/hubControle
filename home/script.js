const nome = localStorage.getItem("nomeUsuario");

if (nome) {
  document.getElementById("boasVindas").textContent = `Olá, ${nome}!`;
}

function limparStorage() {
  localStorage.clear()
}

/*Mudança de tela*/

document.addEventListener('DOMContentLoaded', () => {
  const botaoHome = document.getElementById('botaoHome');

  botaoHome.addEventListener('click', () => {
        document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = '../Home/index.html';
    }, 500); // espera 0.5 s
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const botaoTarefa = document.getElementById('botaoTarefa');

  botaoTarefa.addEventListener('click', () => {
        document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = '../minhaTarefa/index.html';
    }, 500); // espera 0.5 s
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const botaoSair = document.getElementById('botaoSair');

  botaoSair.addEventListener('click', () => {
        document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = '../login/index.html';
    }, 500); // espera 0.5 s
  });
});