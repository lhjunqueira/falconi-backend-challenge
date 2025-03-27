# Backend NestJS com Docker

## 📌 Visão Geral
Este projeto é um backend desenvolvido em **NestJS**, configurado para rodar dentro de um contêiner **Docker**. Ele implementa uma API RESTful para gerenciamento de usuários e perfis, com dados mockados em memória. O projeto foi desenvolvido como parte de um desafio técnico Fullstack.

## 🛠️ Tecnologias Utilizadas
- **NestJS**
- **Docker**
- **TypeScript**
- **Node.js 18.x**
- **UUID** para identificação única
- **PNPM**

## 🚀 Como rodar a aplicação

### 1️⃣ **Pré-requisitos**
Certifique-se de ter instalado:
- [Docker](https://www.docker.com/)

### 2️⃣ **Executar com Docker**

Para rodar a aplicação em um contêiner Docker, basta executar os seguintes comandos:

Executar os três comandos para construir a imagem e subir os contêineres:

```sh
docker-compose up --build
```

Para apenas construir a imagem Docker:

```sh
docker-compose build
```

Subir os contêineres:

```sh
docker-compose up
```

A aplicação estará disponível em `http://localhost:3000`.

### 3️⃣ **Executar sem Docker (não recomendado)**

Caso prefira rodar a aplicação localmente sem o Docker, execute:

```sh
pnpm install
pnpm run start
```

## 🎯 Funcionalidades Implementadas
- **Gerenciamento de Usuários**: Criar, editar, remover e listar usuários.
- **Ativar e desativar usuários**.
- **Buscar um usuário pelo ID**.
- **Filtrar usuários por perfil**.

## 🤔 Explicação das Decisões Tomadas

### 🟢 **Uso do NestJS**
Optamos por usar **NestJS** por ser um framework altamente escalável e organizado para a criação de aplicações back-end em Node.js. Ele proporciona uma estrutura robusta com o uso de módulos e injeção de dependências.

### 🟢 **Uso do Docker**
O **Docker** foi utilizado para garantir que a aplicação funcione da mesma forma em qualquer ambiente, sem se preocupar com configurações específicas do sistema ou dependências. Isso também facilita o processo de deploy, padronizando o ambiente de desenvolvimento e produção.

### 🟢 **Uso do UUID**
Optamos pelo uso de **UUID completo** para garantir a unicidade e escalabilidade das identificações dos usuários, considerando que a performance não será impactada significativamente.

### 🟢 **Uso de dados mockados**
A aplicação utiliza dados **mockados em memória** para fins de desenvolvimento e testes. Isso permite testar a funcionalidade da API sem a necessidade de um banco de dados real.

### 🟢 **Uso do TypeScript**
O projeto foi desenvolvido em **TypeScript** para garantir tipagem forte, o que facilita a manutenção do código e melhora a experiência do desenvolvedor.

### 🟢 **Uso de Docker Compose**
O **Docker Compose** foi configurado para orquestrar os contêineres da aplicação, simplificando o processo de construção e execução do ambiente de desenvolvimento.

## ⚡ Possíveis Pontos de Melhoria ou Sugestões de Evolução
- **Persistência de dados**: Integrar um banco de dados real (como PostgreSQL ou MongoDB) para substituir os dados mockados.
- **Autenticação e Autorização**: Implementar um sistema de autenticação (JWT, por exemplo) para garantir que apenas usuários autenticados possam acessar ou modificar os dados.
- **Testes automatizados**: Adicionar testes unitários e de integração usando ferramentas como **Jest** ou **Supertest** para garantir a qualidade do código.
- **Validação de dados**: Adicionar validações mais robustas para as entradas da API usando **class-validator**.

## 🛠️ Problemas Conhecidos
- ⚠️ **Problema ao rodar o Docker pela primeira vez**: Caso ocorra algum erro durante a execução do Docker pela primeira vez, tente reconstruir a imagem e iniciar os contêineres novamente:

```sh
docker-compose down
docker-compose up --build
```

## 📄 Licença
Este projeto está sob a licença MIT.
