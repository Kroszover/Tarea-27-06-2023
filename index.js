const express = require("express");
const app = express();
const { obtenerProveedores } = require("./services/proveedorService");

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index", { titulo: "Inicio" });
});

// Ruta para obtener los proveedores
app.get("/proveedores", async (req, res) => {
  try {
    const proveedores = await obtenerProveedores("proveedores");
    res.render("proveedores", { proveedores });
  } catch (error) {
    console.error("Error al obtener los proveedores:", error);
    res.status(500).send("Error al obtener los proveedores");
  }
});

app.get("/*", (req, res) => {
  res.render("error");
});

app.listen(8080, () => {
  console.log("Servidor escuchando en http://localhost:8080");
});
