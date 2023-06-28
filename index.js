const express = require("express");
const app = express();
const Handlebars = require("handlebars");

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", { titulo: "Inicio" });
});

app.get("/proveedores", (req, res) => {
  res.render("proveedores", { titulo: "proveedores" });
});

app.get("/*", (req, res) => {
  res.render("error");
});

app.listen(8080, () => {
  console.log("Servidor escuchando en http://localhost:8080");
});
