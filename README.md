# ⚙️ DeskFlow Finance — Back-End

API REST do **DeskFlow Finance**, uma aplicação Full Stack para gerenciamento de tarefas com autenticação de usuários, persistência de dados e integração com Inteligência Artificial.

O Back-End foi desenvolvido com **Node.js e Express.js** e é responsável pela autenticação, proteção das rotas, regras da aplicação, gerenciamento das tarefas, comunicação com o MongoDB e integração com a API do Google Gemini.

---

## 📸 Preview

![DeskFlow Finance Back-End](https://github.com/MykeMartins96/deskflow-finance-backend/blob/main/Captura%20de%20tela%202026-09-01%20001529.png?raw=true)

---

## 🚀 Sobre o projeto

O Back-End do **DeskFlow Finance** fornece a API responsável por toda a comunicação entre a interface React, o banco de dados e o serviço de Inteligência Artificial.

A API permite cadastrar e autenticar usuários, gerenciar tarefas através de operações CRUD e garantir que cada usuário tenha acesso somente às suas próprias tarefas.

O projeto também possui integração com **Google Gemini**, utilizada pelo Assistente de IA do Dashboard para analisar as tarefas cadastradas e gerar sugestões de prioridade.

---

## ✨ Funcionalidades

- 👤 Cadastro de usuários
- 🔐 Login
- 🔑 Autenticação com JWT
- 🔒 Hash de senhas
- 🛡️ Rotas protegidas
- 📋 CRUD completo de tarefas
- 👥 Associação das tarefas ao usuário autenticado
- 💾 Persistência de dados com MongoDB
- 🤖 Integração com Google Gemini
- 🧠 Análise inteligente das tarefas
- ⚡ Sugestão de prioridades
- ⚠️ Tratamento de erros da API de IA
- 🌐 API REST
- 🚀 Deploy no Render

---

## 🛠 Tecnologias utilizadas

- **Node.js** — ambiente de execução do Back-End
- **Express.js** — criação da API REST e gerenciamento das rotas
- **MongoDB** — banco de dados
- **Mongoose** — modelagem e comunicação com o MongoDB
- **JWT** — autenticação dos usuários
- **bcrypt** — hash e proteção das senhas
- **CORS** — comunicação entre Front-End e Back-End
- **dotenv** — gerenciamento das variáveis de ambiente
- **Google Gemini API** — análise inteligente das tarefas
- **@google/genai** — integração da aplicação com os modelos Gemini

---

## 🔐 Autenticação

O sistema utiliza **JWT (JSON Web Token)** para autenticação.

Após realizar o login, a API gera um token que é utilizado pelo Front-End nas requisições para as rotas protegidas.

```text
Authorization: Bearer TOKEN
```

O middleware de autenticação verifica o token antes de permitir o acesso às rotas privadas.

As tarefas também são associadas ao usuário autenticado, evitando que um usuário visualize ou manipule tarefas pertencentes a outra conta.

---

## 📡 Principais rotas

### 👤 Autenticação

```text
POST /auth/register
POST /auth/login
```

### 📋 Tarefas

```text
GET    /tasks
POST   /tasks
GET    /tasks/:id
PUT    /tasks/:id
DELETE /tasks/:id
```

As rotas de tarefas exigem autenticação.

### 🤖 Inteligência Artificial

```text
POST /api/ai/analyze
```

Essa rota recebe as tarefas enviadas pelo Front-End e solicita ao modelo de IA uma análise para auxiliar na definição de prioridades.

---

## 🤖 Integração com Inteligência Artificial

O DeskFlow Finance possui um Assistente de IA integrado ao **Google Gemini**.

Atualmente, a aplicação utiliza o modelo:

```text
gemini-3.1-flash-lite
```

O fluxo da funcionalidade funciona da seguinte maneira:

1. O usuário solicita uma análise através do Dashboard.
2. O Front-End envia as tarefas para o Back-End.
3. O Back-End prepara as informações para análise.
4. A API do Google Gemini recebe a solicitação.
5. O modelo analisa as tarefas.
6. O Back-End recebe a resposta da IA.
7. A análise é devolvida para o Front-End.
8. O resultado é apresentado no Dashboard.

---

## ⚠️ Tratamento de limite da IA

A integração também possui tratamento para limites de requisição da API externa.

Caso o Google Gemini retorne o status:

```text
429 Too Many Requests
```

o Back-End identifica o erro e retorna uma resposta adequada para o Front-End.

Isso permite que a interface apresente uma mensagem amigável ao usuário em vez de exibir apenas um erro interno da aplicação.

---

## 📋 Estrutura das tarefas

Uma tarefa pode possuir informações como:

- Título
- Descrição
- Status
- Prioridade
- Data de vencimento
- Usuário responsável

Cada tarefa fica associada ao usuário autenticado.

---

## 🏗️ Arquitetura da aplicação

```text
Front-End React
      ↓
   API REST
      ↓
Node.js + Express
      ↓
 ┌───────────────┐
 ↓               ↓
MongoDB      Google Gemini
 ↓               ↓
Dados       Análise com IA
```

O Back-End funciona como responsável pela comunicação entre a interface, o banco de dados e o serviço externo de Inteligência Artificial.

---

## 🧠 O que pratiquei neste projeto

Durante o desenvolvimento deste Back-End, pratiquei conceitos importantes como:

- Criação de API REST
- Desenvolvimento com Node.js e Express
- Organização de rotas e controllers
- Operações CRUD
- Autenticação JWT
- Criação de middleware
- Hash de senhas
- Proteção de rotas
- Associação de dados ao usuário autenticado
- Integração com MongoDB
- Modelagem com Mongoose
- Variáveis de ambiente
- Integração com API de Inteligência Artificial
- Tratamento de erros de APIs externas
- Tratamento de Rate Limit (`429`)
- Comunicação entre Front-End e Back-End
- Deploy de API

---

## 🌐 API publicada

Back-End publicado no Render:

https://deskflow-finance-backend.onrender.com

---

## 💻 Front-End

O Front-End do DeskFlow Finance possui um repositório separado:

https://github.com/MykeMartins96/deskflow-finance-frontend

Aplicação publicada:

https://deskflow-finance-frontend.vercel.app

---

## ⚙️ Executando localmente

Clone o repositório:

```bash
git clone https://github.com/MykeMartins96/deskflow-finance-backend.git
```

Entre na pasta:

```bash
cd deskflow-finance-backend
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` com as variáveis necessárias:

```env
MONGO_URI=sua_string_de_conexao
JWT_SECRET=sua_chave_secreta
PORT=3001
GEMINI_API_KEY=sua_chave_da_api
```

Execute:

```bash
npm run dev
```

---

## 🔒 Segurança

Informações sensíveis não devem ser enviadas para o GitHub.

O `.gitignore` deve incluir:

```text
node_modules/
.env
```

As senhas dos usuários são armazenadas utilizando **hash com bcrypt**, e não em texto puro.

Variáveis como conexão com banco de dados, segredo JWT e chave da API de IA devem permanecer apenas nas variáveis de ambiente.

> Nunca publique sua `MONGO_URI`, `JWT_SECRET` ou `GEMINI_API_KEY`.

---

## 👨‍💻 Autor

**Myke Santana Martins**

Desenvolvedor Front-End em formação, com conhecimentos de Back-End para criação e integração de aplicações através de APIs REST.

- GitHub: https://github.com/MykeMartins96
- LinkedIn: https://www.linkedin.com/in/myke-santana-martins
