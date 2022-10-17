//Consumindo a API
function listaVendas() {
  fetch('https://localhost:7070/api/venda')
    .then(response => {
      return response.json()
    })
    .then(r => {
      let dados
      dados = r.map(data => {
        let dado = `<tr>
                    <td>${data.clienteId}</td>
                    <td>${data.produtoId}</td>
                    <td>${data.qtdVenda}</td>
                    <td>${data.dthVend}</td>
                    <td>R$ ${data.vlrUnitarioVenda.toFixed(2)}</td>
                    <td>R$ ${data.vlrTotalVenda.toFixed(2)}</td>
                    <td>
                        <button  onclick="excluir(${data.id})">Excluir</button>
                        <a href="alterarVenda.html?id=${data.id}">Alterar</a>
                    </td>
                    </tr>`

        document.getElementById('tableVenda').innerHTML += dado
      })
    })
}
//Listando os clientes

function listaClientes() {
  fetch('https://localhost:7070/api/cliente')
    .then(response => {
      return response.json()
    })
    .then(r => {
      r.map(data => {
        let dadoCliente = `<option value="${data.id}">Id: ${data.id} - ${data.nmCliente}</option>`

        document.getElementById('clienteId').innerHTML += dadoCliente
      })
    })
}
//Listando os produtos

function listaProdutos() {
  fetch('https://localhost:7070/api/produto')
    .then(response => {
      return response.json()
    })
    .then(r => {
      r.map(data => {
        let dadoProduto = `<option value="${data.id}">Id: ${data.id} - ${
          data.dscProduto
        } - R$ ${data.vlrUnitario.toFixed(2)}</option>`

        document.getElementById('produtoId').innerHTML += dadoProduto
      })
    })
}
//Listando as vendas
function getVenda() {
  document.getElementById('tableVenda').innerHTML = ''
  let clienteProduto = document.getElementById('clienteProduto').value

  fetch('https://localhost:7070/api/venda/' + clienteProduto)
    .then(response => {
      return response.json()
    })
    .then(r => {
      let dados
      console.log(r)
      dados = r.map(data => {
        let dado = `<tr>
                        <td>${data.clienteId}</td>
                        <td>${data.produtoId}</td>
                        <td>${data.qtdVenda}</td>
                        <td>${data.dthVend}</td>
                        <td>${data.vlrUnitarioVenda}</td>
                        <td>${data.vlrTotalVenda}</td>
                        <td><button  onclick="excluir(${data.id})">Excluir</button></td>
                    </tr>`

        document.getElementById('tableVenda').innerHTML += dado
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
    fetch('https://localhost:7070/api/venda/' + id, { method: 'DELETE' }).then(
      () => {
        this.reloadPage()
      }
    )
  }
}

//Salvando vendas
function salvarVenda() {
  let clienteId = document.getElementById('clienteId').value
  let produtoId = parseInt(document.getElementById('produtoId').value)
  let qtdVenda = document.getElementById('quantidade').value
  if (qtdVenda == '') {
    return
  }
  console.log(clienteId)
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ clienteId, produtoId, qtdVenda })
  }
  fetch('https://localhost:7070/api/Venda', requestOptions)
    .then(response => response.json())
    .then(r => {
      this.reloadPage()
    })
}

//Buscando vendas
function buscarVenda(id) {
  // console.log(id);

  fetch('https://localhost:7070/api/venda/id/' + id)
    .then(response => {
      return response.json()
    })
    .then(r => {
      document.getElementById('id').value = r.id
      document.getElementById('clienteId').value = r.clienteId
      document.getElementById('produtoId').value = r.produtoId
      document.getElementById('quantidade').value = r.qtdVenda
    })
}

//Alterando vendas
function alterarVenda() {
  let id = document.getElementById('id').value
  let clienteId = document.getElementById('clienteId').value
  let produtoId = document.getElementById('produtoId').value
  let qtdVenda = document.getElementById('quantidade').value

  if (qtdVenda == '') {
    document.getElementById('erroQtd').innerHTML = 'Preencha o campo'
    return
  }

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, clienteId, produtoId, qtdVenda })
  }
  fetch('https://localhost:7070/api/venda/' + id, requestOptions).then(() => {
    document.location.href = 'vendas.html'
  })
}
//Função para formatar e aceitar apenas números
function somenteNumeros(num) {
  var er = /[^0-9]/
  er.lastIndex = 0
  var campo = num
  if (er.test(campo.value)) {
    campo.value = ''
  }
}
function voltar() {
  document.location.href = 'vendas.html'
}
