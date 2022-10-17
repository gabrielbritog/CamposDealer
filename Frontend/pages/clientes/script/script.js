//Consumindo a API

function listarClientes() {
  fetch('https://localhost:7070/api/cliente')
    .then(response => {
      return response.json()
    })
    .then(r => {
      let dados
      dados = r.map(data => {
        let dado = `<tr>
                    <td>${data.nmCliente}</td>
                    <td>${data.cidade}</td>
                    <td>
                        <button  onclick="excluir(${data.id})">Excluir</button>
                        <a href="alterarCliente.html?id=${data.id}">Alterar</a>    
                    </td>
                    </tr>`

        document.getElementById('tableCliente').innerHTML += dado
      })
    })
}

//Listando os clientes
function getCliente() {
  document.getElementById('tableCliente').innerHTML = ''
  let nome = document.getElementById('nmCliente').value
  console.log(nome)
  fetch('https://localhost:7070/api/cliente/' + nome)
    .then(response => {
      return response.json()
    })
    .then(r => {
      let dados
      console.log(r)
      dados = r.map(data => {
        let dado = `<tr><td>${data.nmCliente}</td><td>${data.cidade}</td>
        <td>
        <button  onclick="excluir(${data.id})">Excluir</button>
        <a href="alterarCliente.html?id=${data.id}">Alterar</a>
        </td>
        </tr>`

        document.getElementById('tableCliente').innerHTML += dado
      })
    })
}
//Atualizando página
function reloadPage() {
  window.location.reload()
}

//Excluindo com base no Id
function excluir(id) {
  let conf = confirm('Quer mesmo excluir?')

  if (conf) {
    fetch('https://localhost:7070/api/cliente/' + id, {
      method: 'DELETE'
    }).then(() => {
      this.reloadPage()
    })
  }
}

//Salvando clientes
function salvarCliente() {
  let nmCliente = document.getElementById('nome').value
  let cidade = document.getElementById('cidade').value
  if (nmCliente == '' || cidade == '') {
    return
  }
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nmCliente, cidade })
  }
  fetch('https://localhost:7070/api/cliente', requestOptions)
    .then(response => response.json())
    .then(r => {
      this.reloadPage()
    })
}

//Buscando Clientes
function buscarCliente(id) {
  fetch('https://localhost:7070/api/cliente/id/' + id)
    .then(response => {
      return response.json()
    })
    .then(r => {
      document.getElementById('id').value = r.id
      document.getElementById('nome').value = r.nmCliente
      document.getElementById('cidade').value = r.cidade
    })
}
//Alterando CLientes
function AlterarCliente() {
  let id = document.getElementById('id').value
  let nmCliente = document.getElementById('nome').value
  let cidade = document.getElementById('cidade').value

  if (nmCliente == '' || cidade == '') {
    if (nmCliente == '') {
      document.getElementById('erroNome').innerHTML = 'Preencha o campo'
    } else {
      document.getElementById('erroNome').innerHTML = ''
    }
    if (cidade == '') {
      document.getElementById('erroCidade').innerHTML = 'Preencha o campo'
    } else {
      document.getElementById('erroCidade').innerHTML = ''
    }
    return
  }
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, nmCliente, cidade })
  }
  fetch('https://localhost:7070/api/cliente/' + id, requestOptions).then(() => {
    document.location.href = 'clientes.html'
  })
}

//Voltando página
function voltar() {
  document.location.href = 'clientes.html'
}
