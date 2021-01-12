# wispro-test

Test para Wispro

1. Hacer un formulario de registración de usuario con los atributos que desee.
2. Hacer un login para usuario, ya sea con email username, como prefieras.
3. Listar, editar y borrar usuarios (estando logueado).
4. Gráfico estático de cantidad de logueos por dia del ultimo mes.
5. Realizar un gráfico con cantidad de usuarios registrados por día en el último mes
(fakear/mockear los datos) utilizando websockets. (No es obligatorio, pero es deseable el
uso de websockets)
6. Integrar bootstrap o alguna librería front-end para los estilos


Requisitos :
● Usar react 17.
● Podés desarrollar tu backend para atender las peticiones o mockear las consultas.
(Esto es solo para que funcione el Frontend, no será evaluado, ni revisado)
● Utilizar cualquier librería que te sea conveniente.
● Integrar bootstrap o alguna librería front-end para los estilos.
Fecha límite de entrega (1 semana)
Una vez entregado se pactará una reunión para defender el desarrollo realizado.

# Instrucciones para levantar el proyecto

# How to start the project:

Para levantar el proyecto es necesario seguir los siguientes pasos:

- Clonar el repositorio

- Instalar [PostgreSQL](https://www.postgresql.org/) en tu PC y crear una base de datos llamada `development`.


- Crear un archivo `.env` en la carpeta `api` con el siguiente contenido:

DB_USER={Tu usuario de postgreSQL}
DB_PASSWORD={Tu contraseña de postgreSQL}
DB_HOST=localhost
ACCESS_TOKEN_SECRET=wispro

- Registrarse dentro de la pagina y luego loguearse.