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
      window.location.href = '../index.html';
    }, 500); // espera 0.5 s
  });
});

/*Evento adicionar tarefa*/

document.addEventListener('DOMContentLoaded', () => {
  const botaoSalvar = document.getElementById('botaoSalvar');

  botaoSalvar.addEventListener('click', () => {

    const titulo = document.getElementById('tituloTarefa').value;

    /*const prioridade = document.querySelector('input[name="prioridade"]:checked');*/

    let prioridade = null;
    if (document.getElementById('prioridadeBaixa').checked) {
      prioridade = 'Baixa';
    } else if (document.getElementById('prioridadeMedia').checked) {
      prioridade = 'Média';
    } else if (document.getElementById('prioridadeAlta').checked) {
      prioridade = 'Alta';
    }

    /*const status = document.querySelector('input[name="status"]:checked');*/

    let status = null;
    if (document.getElementById('statusAndamento').checked) {
      status = 'Em andamento';
    } else if (document.getElementById('statusConcluido').checked) {
      status = 'Concluída';
    }

    if (!titulo || !prioridade || !status) {
      alert('Preencha todos os campos antes de salvar!');
      return;
    }

    //Data no formato DD-MM-YYYY
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0'); //garante que tenha 2 dígitos
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // mês começa em 0
    const ano = hoje.getFullYear();
    const dataAtual = `${dia}-${mes}-${ano}`;

    // Criar ID único para a tarefa
    const id = Date.now();

    const novaTarefa = {
      id: id,
      titulo: titulo,
      prioridade: prioridade,
      status: status,
      dataCriacao: dataAtual,
      dataTerminada: '--'      //ainda não concluída
    };

    // Recuperar tarefas existentes ou iniciar com array vazio
    let tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];

    // Adiciona nova tarefa
    tarefasSalvas.push(novaTarefa);

    // Salva no localStorage
    localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));

    alert('Tarefa salva com sucesso!');
    
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = '../minhaTarefa/index.html';
    }, 500); // espera 0.5s


    // Limpa o formulário
    document.querySelector('.formTarefa').reset();
  });
});