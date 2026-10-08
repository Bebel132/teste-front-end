# Teste Front-end

Aplicação front-end desenvolvida com React, TypeScript, Vite e Sass.

## Tecnologias

- React 19
- TypeScript
- Vite
- Sass
- Axios
- TanStack React Query
- JSON Server

## Pré-requisitos

- Node.js instalado
- npm instalado

## Instalação

Entre na pasta do projeto:

```bash
cd app
```

Instale as dependências:

```bash
npm install
```

## Executando o projeto

O projeto precisa de dois processos rodando simultaneamente: o servidor da API e o servidor do Vite.

### 1. Inicie a API

Em um terminal, execute:

```bash
npx json-server db.json
```

A API ficará disponível em:

```text
http://127.0.0.1:3000
```

Os produtos podem ser acessados em:

```text
http://127.0.0.1:3000/products
```

### 2. Inicie a aplicação

Em outro terminal, dentro da pasta `app`, execute:

```bash
npm run dev
```

A aplicação ficará disponível no endereço exibido pelo Vite, normalmente:

```text
http://localhost:5173
```

## Scripts disponíveis

Inicia o servidor de desenvolvimento:

```bash
npm run dev
```

Gera a versão de produção:

```bash
npm run build
```

Inicia o preview da versão de produção:

```bash
npm run preview
```

## Estrutura principal

```text
app/
├── db.json
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── interfaces/
│   ├── services/
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## Observações

O front-end consome os produtos através do JSON Server. Por isso, mantenha os dois servidores ativos durante o desenvolvimento:

- JSON Server: `http://127.0.0.1:3000`
- Vite: normalmente `http://localhost:5173`