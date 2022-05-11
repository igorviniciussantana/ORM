var express = require("express");
var app = express();
var { usuario } = require("./models");
var { empresa } = require("./models")

app.use(express.json());
app.use(express.urlencoded({

  extended: true
}));
//Página Inicial
app.get("/", function(req, res) {

  var resultado = "Página Inicial, Bem Vindo!";
  res.json(resultado);


});
//Usuarios
app.get("/usuarios", async function(req, res) {

  var retorna = await usuario.findAll();
  res.json(retorna)


});


app.post("/usuarios", function(req, res) {

  var resultado = usuario.create(req.body);
  res.json(resultado);


});

app.put("/usuarios/:id", async function(req, res) {
  var atualizar = await usuario.findByPk(req.params.id);

  var resultado = await atualizar.update(req.body);
  res.json(resultado);
});

app.get("/usuarios/:id", async function(req, res) {
  var resultado = await usuario.findByPk(req.params.id);

  res.json(resultado);
});

app.delete("/usuarios/:id", async function(req, res) {
  var deletar = await usuario.findByPk(req.params.id);
   deletar.destroy();
});


//Empresas

app.get("/empresas", async function(req, res) {

  var retorna = await empresa.findAll();
  res.json(retorna)


});


app.post("/empresas", function(req, res) {

  var resultado = empresa.create(req.body);
  res.json(resultado);


});

app.put("/empresas/:id", async function(req, res) {
  var atualizar = await empresa.findByPk(req.params.id);

  var resultado = await atualizar.update(req.body);
  res.json(resultado);
});

app.get("/empresas/:id", async function(req, res) {
  var resultado = await empresa.findByPk(req.params.id);

  res.json(resultado);
});

app.delete("/empresas/:id", async function(req, res) {
  var deletar = await empresa.findByPk(req.params.id);
  deletar.destroy();
});




app.listen(3000, function() {

  console.log("O servidor está supimpa!!!!")

});