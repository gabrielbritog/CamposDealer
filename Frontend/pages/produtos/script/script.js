//Consumindo a API
function listarProdutos() {
  fetch('https://localhost:7070/api/produto')
    .then(response => {
      return response.json()
    })
    .then(r => {
      let dados
      dados = r.map(data => {
        let dado = `<tr>
                    <td>${data.dscProduto}</td>
                    <td>R$ ${data.vlrUnitario.toFixed(2)}</td>
                    <td><button  onclick="excluir(${data.id})">Excluir</button>
                    <a href="alterarProduto.html?id=${data.id}">Alterar</a></td>
                    </tr>`

        document.getElementById('tableProduto').innerHTML += dado
      })
    })
}

//Listando os produtos
function getProduto() {
  document.getElementById('tableProduto').innerHTML = ''
  let nome = document.getElementById('dscProduto').value
  console.log(nome)
  fetch('https://localhost:7070/api/produto/' + nome)
    .then(response => {
      return response.json()
    })
    .then(r => {
      let dados
      console.log(r)
      dados = r.map(data => {
        let dado = `<tr><td>${
          data.dscProduto
        }</td><td>R$ ${data.vlrUnitario.toFixed(2)}</td>
        <td><button onclick="excluir(${
          data.id
        })">Excluir</button> <a href="alterarProduto.html?id=${
          data.id
        }">Alterar</a></tr></td>
        `

        document.getElementById('tableProduto').innerHTML += dado
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
    fetch('https://localhost:7070/api/produto/' + id, {
      method: 'DELETE'
    }).then(() => {
      this.reloadPage()
    })
  }
}
//Salvando produtos
function salvarProduto() {
  let dscProduto = document.getElementById('nome').value
  let vlrUnitario = document.getElementById('valor').value
  if (dscProduto == '' || vlrUnitario == '') {
    return
  }
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ dscProduto, vlrUnitario })
  }
  fetch('https://localhost:7070/api/produto', requestOptions)
    .then(response => response.json())
    .then(r => {
      this.reloadPage()
    })
}

//Buscando Produtos
function buscarProduto(id) {
  // console.log(id);

  fetch('https://localhost:7070/api/produto/id/' + id)
    .then(response => {
      return response.json()
    })
    .then(r => {
      document.getElementById('id').value = r.id
      document.getElementById('nome').value = r.dscProduto
      document.getElementById('valor').value = r.vlrUnitario
    })
}

//Alterando produtos
function AlterarProduto() {
  let id = document.getElementById('id').value
  let dscProduto = document.getElementById('nome').value
  let vlrUnitario = document.getElementById('valor').value

  if (dscProduto == '' || vlrUnitario == '') {
    if (dscProduto == '') {
      document.getElementById('erroDescricao').innerHTML = 'Preencha o campo'
    } else {
      document.getElementById('erroDescricao').innerHTML = ''
    }
    if (vlrUnitario == '') {
      document.getElementById('erroValor').innerHTML = 'Preencha o campo'
    } else {
      document.getElementById('erroValor').innerHTML = ''
    }
    return
  }

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, dscProduto, vlrUnitario })
  }
  fetch('https://localhost:7070/api/produto/' + id, requestOptions).then(() => {
    document.location.href = 'produtos.html'
  })
}

//Voltando a página
function voltar() {
  document.location.href = 'produtos.html'
}
