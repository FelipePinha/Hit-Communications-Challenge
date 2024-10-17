# Hit Communications Challenge

## Requisitos

Para rodar o projeto é necessário ter:

<ul>
  <li><a href='https://nodejs.org/en'>Node.js</a></li>
  <li><a href='https://www.npmjs.com/'>NPM</a></li>
  <li><a href='https://www.docker.com/'>Docker</a></li>
  <li><a href='https://git-scm.com/'>Git</a></li>
</ul>

## Instalação

Faça o clone do projeto em uma pasta.

```bash
  git clone https://github.com/FelipePinha/Hit-Communications-Challenge.git
```

Instale as dependências.

```bash
  npm install
```

O banco de dados está rodando localmente no docker. Execute o comando para iniciar o container do postgres.

```bash
  docker-compose up -d
```

Faça uma cópia do .env.example e insira a url do banco de dados na variável.
```bash
  postgresql://docker:docker@localhost:5432/hit_challenge
```

## Comandos

Para rodar o projeto execute o comando abaixo.

```bash
  npm run dev
```

Para rodar os testes execute o comando abaixo.

```bash
  npm run test
```
