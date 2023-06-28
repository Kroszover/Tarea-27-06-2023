# Tarea-27-06-2023

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sistema web de Proveedores</title>
</head>
<body>
  <h1>Sistema web de Proveedores</h1>
  <h2>Tecnologías utilizadas</h2>
  <ul>
    <li>Lenguaje de programación: JavaScript (JS)</li>
    <li>Entorno de ejecución: Node.js</li>
    <li>Framework de servidor: Express.js</li>
    <li>Motor de plantillas: Handlebars (HBS)</li>
    <li>Gestión de paquetes: NPM</li>
    <li>Control de versión: Git</li>
  </ul>
  <h2>Estructura de los datos</h2>
  <p>Los datos de proveedores se encuentran en un archivo CSV y siguen la siguiente estructura por cada registro:</p>
  <ul>
    <li>idProveedor</li>
    <li>nombreCompañia</li>
    <li>nombreContacto</li>
    <li>tituloContacto</li>
    <li>ciudad</li>
    <li>país</li>
  </ul>
  <h2>Capas del sistema</h2>
  <p>El sistema está organizado en las siguientes capas:</p>
  <ol>
    <li><strong>Models:</strong> En esta capa se define la clase "Proveedor" que representa la estructura de cada proveedor y permite almacenar los datos consumidos desde el archivo CSV.</li>
    <li><strong>Services:</strong> En esta capa se encuentra el método "obtenerProveedores" que consume los datos del origen (archivo CSV) y construye objetos de tipo "Proveedor". Estos objetos se almacenan en un arreglo representando el listado de proveedores.</li>
    <li><strong>Views:</strong> En esta capa se encuentra la vista HBS que se renderiza en el servidor. Esta vista mostrará los datos de los proveedores en una página web.</li>
  </ol>
  <h2>Archivo index.js y ruteos</h2>
  <p>El archivo "index.js" contiene la configuración principal del servidor utilizando Express.js. En este archivo se construye el método ".get" para el ruteo "/proveedores". Este método responde con el listado de datos de los proveedores obtenidos desde el archivo CSV utilizando el método definido en la capa de Services.</p>
  <h2>Configuraciones de Git</h2>
  <p>Se deben tener en consideración las configuraciones de Git para evitar el seguimiento de archivos o carpetas innecesarios en el control de versión.</p>
  <p>¡Disfruta construyendo el sistema web de Proveedores!</p>
</body>
</html>
