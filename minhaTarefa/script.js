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

/*Evento posicionar tarefa*/

document.addEventListener('DOMContentLoaded', () => {
  const corpoTabela = document.getElementById('corpoTabela');
  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

  corpoTabela.innerHTML = ''; //Limpa a tabela

  tarefas.forEach((tarefa) => {
    const tr = document.createElement('tr');

    const prioridadeClasse = tarefa.prioridade
      .normalize('NFD')            // separa acento
      .replace(/[\u0300-\u036f]/g, '')  // remove acento
      .toLowerCase();              // deixa minúsculo


    let statusClasse = '';
    if (tarefa.status === 'Em andamento') {
      statusClasse = 'andamento';
    } else if (tarefa.status === 'Concluída') {
      statusClasse = 'concluida';
    };

    tr.innerHTML = `
    <td>${tarefa.titulo}</td>
    <td><span class = "${prioridadeClasse}">${tarefa.prioridade}</span></td>
    <td><span class = "${statusClasse}">${tarefa.status}<span></td>
    <td>${tarefa.dataCriacao}</td>
    <td>${tarefa.dataTerminada || '--'}</td>
    <td>
        <span class="material-symbols-outlined iconLixo" onclick="excluirTarefa(${tarefa.id})">delete_forever</span>
        <span class="material-symbols-outlined iconConcluido" onclick="concluirTarefa(${tarefa.id})">check</span>
    </td>
    `;

    corpoTabela.appendChild(tr);
  });
});

//Função excluir tarefa

function excluirTarefa(id) {
  let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  tarefas = tarefas.filter(tarefa => tarefa.id !== id);
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
  location.reload(); // recarrega para atualizar tabela
};

//Função concluir tarefa

function concluirTarefa(id) {
  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

  // Gera data atual no formato DD-MM-YYYY
  const hoje = new Date();
  const dia = String(hoje.getDate()).padStart(2, '0');
  const mes = String(hoje.getMonth() + 1).padStart(2, '0');
  const ano = hoje.getFullYear();
  const dataConclusao = `${dia}-${mes}-${ano}`;

  // Atualiza a tarefa correspondente
  const tarefasAtualizadas = tarefas.map(tarefa => {
    if (tarefa.id === id) {
      return {
        ...tarefa,
        status: 'Concluída',
        dataTerminada: dataConclusao
      };
    }
    return tarefa;
  });

  // Salva de volta no localStorage
  localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));

  // Recarrega a página para atualizar a tabela
  location.reload();
};