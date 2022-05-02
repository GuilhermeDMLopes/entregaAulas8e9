# Resumo dos exercícios que foram entregues

## :computer: - Exercicio 1
### Este exercício foi realizado com o intuito de fazer uma revisão de POO utilizando a linguagem JavaScript

## :computer: - Exercicio 2 
### Este exercício foi realizado com o intuito de fazer um gerenciamento de dependencias utilizando a linguagem JavaScript, Node.js, arquivo package.json e boas práticas de inserir os node_modules no git.ignore

## :computer: - Exercicio 3 
### Este exercício foi realizado com o intuito de fazer uma introdução ao Git utilizando a linguagem JavaScript, comandos como git pull, git add ., git commit, git push.

## :computer: - Exercicio aula 06
### Este exercício foi realizado com o intuito de fazer uma interação de API'S REST com banco de dados MongoDB utilizando a linguagem JavaScript. Utilizamos comandos CRUD basicos e o software Postman para verificação dos mesmos


<head>
    Passos para realização do exercício
</head>

<body>
    <h1 style="color:#00008b">Foram instaladas as seguintes dependências: </h1>
        <li> npm install --save express </li>
        <li> npm install--save cors </li>
        <li> npm install--save http-status-codes </li>
        <li> npm install--save validate.js </li>
        <li> npm install--save moongose </li>
        <li> npm install--save uuid </li>
    <h1 style="color:#00008b">Alterações feitas: </h1>
        <h2> Classe users_validation.js: </h2> 
            <li> Foram adicionados os campos de nome, força, poder e origem em cada comando para validação dos dados </li> 
        <h2> Classe users_repository.js </h2>
            <li> Foram alteradas as funções de update, delete, getByOrigem </li>
                    <p> Em update, é necessário inserir todos os campos de validação para atualizar o nome do super-herói </p>
                    <p> Em delete, é necessário inserir todos os campos de validação para deletar o super-herói pelo campo poder </p>
                    <p> Em getByOrigem, é necessário inserir a origem para buscar um super-herói </p>
        <h2> Classe database.js </h2>
            <li> Foram adicionados os campoes de nome, forca, poder e origem no banco de dados para as consultas </li>
        <h2> No software Postman, acessamos o localhost na porta 5000 para realizar as consultas </h2>
            <li> Em http://localhost:5000/users/create: </li>  
                <p> Mudamos a requisição para "Post", vamos em "Body", selecionamos raw e alteramos o tipo de arquivo para JSON. Inserimos os dados dos campos de validação (nome, forca, poder e origem) </p> 
            <li> Em http://localhost:5000/users/update: </li> 
                <p> Mudamos a requisição para "Put", inserimos os campos de validação com o nome atualizado</p>
            <li> Em http://localhost:5000/users/delete: </li>  
                <p> Mudamos a requisição para "delete", inserimos os campos de validação com o poder para deletarmos</p>
            <li> Em http://localhost:5000/users/getByOrigem: </li> 
                <p> Mudamos a requisição para "get", inserimos os campos de validação com a origem para buscarmos um super-herói</p>
            <li> Em http://localhost:5000/users/list: </li>
                <p> Mudamos a requisição para "get", inserimos os campos de validação para listar os super-heróis</p>                                               
</body>

## :computer: - Exercicio aula 07
### Este exercício foi realizado com o intuito de fazer teste unitários utilizando a linguagem JavaScript (jest). 

<head>
    Passos para realização do exercício
</head>

<body>
    <h1 style="color:#00008b">Foram instaladas as seguintes dependências: </h1>
        <li> npm install --save jest </li>        
    <h1 style="color:#00008b">Alterações feitas: </h1>
        <h2> Classe package.json: </h2> 
            <li> Foi adicionado o campo ""test": "jest --coverage"" para que o node entenda que deve utilizar o framework jest para realizar os testes </li> 
        <h2> Foi criado o pacote "tests" </h2>
            <li> Foram criadas as classes (delete.test, response_status.test, validation.test).js </li>
                    <p> Em delete.test, é necessário inserir todos os campos de teste para deletar o super-herói </p>
                    <p> Em response_status.test, é necessário inserir todos os campos de teste para verificar as respostas das requisições super-herói </p>
                    <p> Em validation.test, é necessário inserir todos os campos de teste para verificar a validação dos dados do super-herói </p>
        <h2> Foram criadas as classes delete.js e validation.js </h2>
            <li> Separamos as funcionalidades de delete e validation em duas classes para conseguirmos testar de forma independente os testes </li>                               
</body>