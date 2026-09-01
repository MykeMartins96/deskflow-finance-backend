# ⚙️ DeskFlow Finance — Back-End

API REST do **DeskFlow Finance**, uma aplicação Full Stack para gerenciamento de tarefas.

O Back-End é responsável pela autenticação dos usuários, proteção das rotas, regras da aplicação, gerenciamento das tarefas e comunicação com o MongoDB.

## 🚀 Funcionalidades

- Cadastro de usuários
- Login
- Autenticação com JWT
- Senhas protegidas
- Rotas protegidas
- CRUD completo de tarefas
- Associação das tarefas ao usuário autenticado
- Integração com MongoDB
- API REST

## 🛠️ Tecnologias

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcrypt
- CORS
- dotenv

## 🔐 Autenticação

O sistema utiliza JWT para autenticação.

Depois do login, a API gera um token que permite ao usuário acessar as rotas protegidas.

As tarefas são associadas ao usuário autenticado, evitando que um usuário acesse as tarefas de outro.

## 📡 Principais rotas

### Autenticação

```text
POST /auth/register
POST /auth/login
```

### Tarefas

```text
GET    /tasks
POST   /tasks
GET    /tasks/:id
PUT    /tasks/:id
DELETE /tasks/:id
```

As rotas de tarefas exigem autenticação.

## 📋 Estrutura das tarefas

Uma tarefa pode possuir:

- Título
- Descrição
- Status
- Prioridade
- Data de vencimento
- Usuário responsável

## ⚙️ Executando localmente

Clone o repositório:

```bash
git clone URL-DO-REPOSITORIO-BACKEND
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env`:

```env
MONGO_URI=sua_string_de_conexao
JWT_SECRET=sua_chave_secreta
PORT=3001
```

Execute:

```bash
npm run dev
```

## 🔒 Segurança

O projeto não envia informações sensíveis para o GitHub.

O `.gitignore` deve conter:

```text
node_modules/
.env
```

As senhas dos usuários são armazenadas utilizando hash, e não em texto puro.

> Nunca adicione sua `MONGO_URI`, `JWT_SECRET` ou chave de IA real ao GitHub.

## 🤖 Próximas melhorias

- Integração com Inteligência Artificial
- Análise das tarefas
- Sugestão inteligente de prioridades
- Melhorias no tratamento de erros
- Deploy completo da API

📸 Imagem do Projeto
![Des
