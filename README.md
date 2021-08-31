# **Projeto de Testes Automatizados**

Olá,

Este é um projeto para testes automatizados de FrontEnd da **VR Benefícios**.

----
## **Tecnologias Utilizadas**
* **NodeJS e Javascript** (_para o desenvolvimento do script automatizado_)
* **NPM** (_para gerenciamento das dependências do projeto_)
* **Cypress** (_para interações com a página e validações do comportamento da aplicação_)


----
## **Ferramentas Necessárias**
* [**NodeJS 14 LTS e NPM 6**](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [**Git Client**](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git)


----

## **Instalando Dependências**
1. Antes de tudo, faça a instalação das **Ferramentas** informadas anteriormente. Logo, abra o terminal e faça um clone do projeto:
```
$ git clone https://github.com/fteixeira471/vr_desafio_frontend.git
```

2. Instale as dependências
```
$ npm install
```

----
## **Executando a Automação**
Foram desenvolvidos 3 scripts para facilitar a execução dos testes:
```
cy:open
// Abre o test runner do Cypress ()

cy:chrome
// Executa os testes em modo headless utilizando o Chrome

cy:firefox
// Executa os testes em modo headless utilizando o Firefox

*nas execuções em modo headless é gerado um video e reports em formato html e json
```

Para executar os testes:
```
$ npm run cy:open
```
ou
```
$ npm run cy:chrome
```
ou
```
$ npm run cy:firefox
```

----
## **Visualizar Video e os Reports**
O video fica disponível em:
```
cypress
└── videos
```
O report em:
```
mochawesome-report
```
