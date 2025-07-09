document.addEventListener('DOMContentLoaded', () => {
  const botaoEntrar = document.getElementById('botaoEntrar');

  botaoEntrar.addEventListener('click', () => {
    const nome = document.getElementById("nomeUsuario").value.trim();

    if (nome === "") {
      alert("Por favor, digite seu nome.");
      return;
    }

    localStorage.setItem("nomeUsuario", nome);

    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = "home/index.html";
    }, 500); // esperar 0.5s
  });
});
