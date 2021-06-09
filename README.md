# API Node para validar CPF

Para startar esse projeto, utilize um terminal, navegue até a raiz do projeto e execute 
```
node index.js
```

Certifique-se de ter instalado o express
```
npm install express
```

# Documentação

Envie uma requisição GET para: 
````
http://localhost:9000/api/cpf/{CPF}
````

A API retornará uma propriedade chamada ````result````, é uma propriedade booleana informando se o CPF é válido ou não.
