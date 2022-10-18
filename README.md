# Projeto FullStack Campos Dealer

Esse projeto é um desafio relacionado à um processo seletivo onde desenvolvi um sistema de cadastro e pesquisas(Vendas, Clientes e Produtos) relacionados entre si.

## O que foi utilizado no backend?

- .Net(C#)
- Entity Framework
- SqlServer
- Swagger/Insominia

## Pacotes usados Backend(Visual Studio 2022)

- Microsoft.EntityFrameworkCore 6.0.10
- Microsoft.EntityFrameworkCore.SqlServer 6.0.10
- Microsoft.EntityFrameworkCore.Tools 6.0.10
- Flunt 2.0.5

## O que foi utilizado no Frontend? (Visual Studio Code)

- Code Time
- Live Server

## Extensões usadas Frontend

- Microsoft.EntityFrameworkCore 6.0.10
- Microsoft.EntityFrameworkCore.SqlServer 6.0.10
- Microsoft.EntityFrameworkCore.Tools 6.0.10
- Flunt 2.0.5

## Como rodar o projeto?

Ao abrir o código, é importante mudar o link da ConnectionString do banco da dados que está localizado na "appsettings.json"

Após isso crie um banco de dados através da migration usando o comando abaixo no Package-Manager:

```bash
  Update-Database
```

A porta da API é 7070

## Documentação da API

#### Retorna todos os clientes

```http
  GET /api/cliente
```

#### Retorna um cliente

```http
  GET /api/id/cliente/${id}
  GET /api/cliente/${nome}
```

| Parâmetro   | Tipo     | Descrição                                         |
| :---------- | :------- | :------------------------------------------------ |
| `id`        | `string` | **Obrigatório**. O ID do item que você quer.      |
| `nmCliente` | `string` | **Obrigatório**. O nome do cliente que você quer. |

#### Adiciona um cliente

```http
  POST /api/id/cliente/

```

| Parâmetro   | Tipo     | Descrição                                  |
| :---------- | :------- | :----------------------------------------- |
| `nmCliente` | `string` | **Obrigatório**. É preciso passar no Body. |
| `cidade`    | `string` | **Obrigatório**. É preciso passar no Body. |

#### Altera um cliente

```http
  PUT /api/id/cliente/${id}

```

| Parâmetro   | Tipo     | Descrição                                                                          |
| :---------- | :------- | :--------------------------------------------------------------------------------- |
| `id`        | `int`    | **Obrigatório**. Id do produto à ser alterado, deve ser passado na rota e no body. |
| `nmCliente` | `string` | **Obrigatório**. É preciso passar no Body.                                         |
| `cidade`    | `string` | **Obrigatório**. É preciso passar no Body.                                         |

#### Deletar um cliente

```http
  DELETE /api/id/cliente/${id}

```

| Parâmetro | Tipo  | Descrição                                     |
| :-------- | :---- | :-------------------------------------------- |
| `id`      | `int` | **Obrigatório**. É preciso passar no na rota. |

---

#### Retorna todos os produtos

```http
  GET /api/produto
```

#### Retorna um produto

```http
  GET /api/id/produto/${id}
  GET /api/produto/${nome}
```

| Parâmetro    | Tipo     | Descrição                                         |
| :----------- | :------- | :------------------------------------------------ |
| `id`         | `string` | **Obrigatório**. O ID do item que você quer.      |
| `dscProduto` | `string` | **Obrigatório**. O nome do produto que você quer. |

#### Adiciona um produto

```http
  POST /api/id/produto/

```

| Parâmetro     | Tipo     | Descrição                                  |
| :------------ | :------- | :----------------------------------------- |
| `dscProduto`  | `string` | **Obrigatório**. É preciso passar no Body. |
| `vlrUnitario` | `float`  | **Obrigatório**. É preciso passar no Body. |

#### Altera um produto

```http
  PUT /api/id/produto/${id}

```

| Parâmetro     | Tipo     | Descrição                                                                          |
| :------------ | :------- | :--------------------------------------------------------------------------------- |
| `id`          | `int`    | **Obrigatório**. Id do produto à ser alterado, deve ser passado na rota e no body. |
| `dscProduto`  | `string` | **Obrigatório**. É preciso passar no Body.                                         |
| `vlrUnitario` | `float`  | **Obrigatório**. É preciso passar no Body.                                         |

#### Deletar um produto

```http
  DELETE /api/id/produto/${id}

```

| Parâmetro | Tipo  | Descrição                                     |
| :-------- | :---- | :-------------------------------------------- |
| `id`      | `int` | **Obrigatório**. É preciso passar no na rota. |

---

#### Retorna todos as vendas

```http
  GET /api/venda
```

#### Retorna um venda

```http
  GET /api/id/venda/${id}
  GET /api/venda/${nome}
```

| Parâmetro    | Tipo     | Descrição                                       |
| :----------- | :------- | :---------------------------------------------- |
| `id`         | `string` | **Obrigatório**. O ID do item que você quer.    |
| `dscProduto` | `string` | **Obrigatório**. O nome da venda que você quer. |

#### Adiciona um venda

```http
  POST /api/id/venda/

```

| Parâmetro   | Tipo  | Descrição                                  |
| :---------- | :---- | :----------------------------------------- |
| `clienteId` | `int` | **Obrigatório**. É preciso passar no Body. |
| `produtoId` | `int` | **Obrigatório**. É preciso passar no Body. |
| `qtdVenda`  | `int` | **Obrigatório**. É preciso passar no Body. |

#### Altera um venda

```http
  PUT /api/id/venda/${id}

```

| Parâmetro   | Tipo  | Descrição                                                                        |
| :---------- | :---- | :------------------------------------------------------------------------------- |
| `id`        | `int` | **Obrigatório**. Id do venda à ser alterado, deve ser passado na rota e no body. |
| `clienteId` | `int` | **Obrigatório**. É preciso passar no Body.                                       |
| `produtoId` | `int` | **Obrigatório**. É preciso passar no Body.                                       |
| `qtdVenda`  | `int` | **Obrigatório**. É preciso passar no Body.                                       |

#### Deletar um venda

```http
  DELETE /api/id/venda/${id}

```

| Parâmetro | Tipo  | Descrição                                     |
| :-------- | :---- | :-------------------------------------------- |
| `id`      | `int` | **Obrigatório**. É preciso passar no na rota. |

####

## 🚀 Sobre mim

Eu sou uma programador web .net. Atualmente estou cursando Análise de sistemas, a rotina de estudos se faz presente em cada parte do meu dia e assim eu procuro sempre estar evoluindo!

# Olá, me chamo Gabriel! 👋

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/gabrielbritog)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-caetano-a06880140/)

## Funcionalidades

- Criar: Clientes, produtos e vendas
- Adicionar: Clientes, produtos e vendas
- Editar: Clientes, produtos e vendas
- Remover: Clientes, produtos e vendas

## Aprendizados

Esse projeto certamente me ensinou muitas coisas, desde coisas básicas como utilizar JQuery, que nunca tinha usado antes, como as diversas formas de consumir uma API. Após horas desenvolvendo ele, sinto que consegui absorver muito conteúdo novo.
