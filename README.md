# entrevista_dw

# Instructivo para ejecutar aplicación usando docker

Dentro del repositorio clonado y en la carpeta movies por favor ejecutar los siguientes dos comandos:

    docker build -t nameofyourapp .

    docker run --name container -d -p 3000:3000 nameofyourapp

La página web se podrá después observar en la dirección http://localhost:3000/

Para frenar la aplicación, debe eliminar el contenedor creado utilizando el comando:

    docker compose kill container_id

# Arquitectura

Para la arquitectura de la solución, decidí que lo mejor era organizar todo en componentes reutilizables dentro de la carpeta components. Además, 

# Aspectos a mejorar

Debería agregarle paginación y algún proceso de filtrado para los items desplegados en la plataforma.

# Qué haría diferente

Si tuviera más tiempo ordenaría algo mejor el aplicativo y utilizaría redux. Esto no se utilizó, además agregaría procesos de carga para cada una de las imágenes.