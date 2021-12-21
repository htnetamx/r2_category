[![Deploy to Amazon ECS](https://github.com/htnetamx/r2_category/actions/workflows/aws.yml/badge.svg?branch=dev)](https://github.com/htnetamx/r2_category/actions/workflows/aws.yml)

Microservicio de Categoría
==========================

Microservicio web que permite descargar de las diferentes categorias de Neta.

El flujo es:

- La aplicacion frontend realiza una peticion al endpoint ../category/ para obtener todas las categorias existentes.
- La aplicacion frontend realiza una peticion al endpoint ../category/:id para obtener la informacion de una categoria en especifico.

Instalando ambiente para desarrollo
--------------------------

Instalar los requerimientos

    npm install

Crear un archivo '.env' con las credenciales necesarias.

    DATABASE_MYSQL_USER=
    DATABASE_MYSQL_PASSWORD=
    DATABASE_MYSQL_HOST=
    DATABASE_MYSQL_NAME=

Iniciar la app

    npm run dev

Verificar en la consola que la aplicacion se ejecuto correctamente, abrir un navegador y verificar en el http://localhost:3000

La documentación del microservicio se encuentra en http://localhost:3000/docs

Compilacion de imagen Docker

    docker build -t r2_category:latest .

Ejecuccion de imagen Docker pasandole el archivo .env

     docker run --env-file .env -p 3000:3000 r2_category

Deploy
------

El deploy se registra un nuevo cambio en las ramas dev y main ya se mediante el merge de un pull request o un cambio directo en estas ramas.
