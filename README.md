<!-- @format -->

# My Bank API

## Descrição

Esta API simula operações bancárias, permitindo a criação de contas, atualização de saldos (entrada e saída de valores) e exclusão de contas.

## Tecnologias Utilizadas

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/) v20.17.0
- [Express](https://expressjs.com/) - Framework para servidor web
- [Winston](https://github.com/winstonjs/winston) - Gerenciamento de logs
- [FS (File System)](https://nodejs.org/api/fs.html) - Leitura e gravação de arquivos
- [CORS](https://www.npmjs.com/package/cors) - Permissão de acesso à API fora da rede local
- [Swagger-UI-Express](https://www.npmjs.com/package/swagger-ui-express) - Documentação interativa da API
- [GraphQL](https://graphql.org/) - Camada de acesso ao banco com queries para o frontend
- [Insomnia](https://insomnia.rest/) - Teste de rotas e requisições

## Rotas do Sistema

| Descrição            | Método   | Rota           |
| -------------------- | -------- | -------------- |
| Criar conta          | `POST`   | `/account`     |
| Listar contas        | `GET`    | `/account`     |
| Listar conta pelo ID | `GET`    | `/account/:id` |
| Atualizar conta      | `PUT`    | `/account`     |
| Atualizar saldo      | `PATCH`  | `/account`     |
| Remover conta        | `DELETE` | `/account/:id` |

## Exemplos de Uso

### Criar Conta

**Requisição:**

```json
{
	"name": "João da Silva",
	"balance": 10200.1
}
```

**Resposta:**

```json
{
	"id": 3,
	"name": "João da Silva",
	"balance": 10200.1
}
```

## Testes das Rotas

Os testes das rotas já estão prontos na pasta `insomnia`. Após clonar a API, importe o arquivo de teste no **Insomnia** para facilitar a verificação das requisições.

## Instalação

Para instalar e executar a API localmente, siga os passos abaixo:

1. Clone o repositório:

   ```sh
   git clone https://github.com/IMoisasZ/my-bank-api.git
   ```

2. Acesse o diretório do projeto:

   ```sh
   cd my-bank-api
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

4. Inicie o servidor:
   ```sh
   npm start
   ```

A API estará disponível em `http://localhost:3000` ou `http://localhost:3333`, dependendo da configuração do ambiente.

## Criador

Esta API foi desenvolvida por **Moisas**.

## Observações

Este projeto foi criado como parte do **Bootcamp de Node.js** do [IGTI](https://www.igti.com.br/).
