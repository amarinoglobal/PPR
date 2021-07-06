# PPR
***

# Aplicación web para trackear equipamiento de empresas desde su almacen hasta su destino y viceversa.
***

# Actualmente en desarrollo de endpoints:
    -Pendiente de añadir la API de GoogleMaps para el seguimiento de material.
    -Posibles escalabilidades.
***

# Desarrollado en un stack MEN (MongoDB,Express.js,Node.js)
***


# Listado de endpoints a desarrollar:    
***
```
ID	    Path	                Description
ff	    /                           Index
V	    /registro                   Registra nuevo usuario
V	    /iniciar-sesión             Inicio de sesión de usuario
ff	    /perfil                     Mi perfil
ff	    /perfil-editar              Editar perfil
ff	    /perfil-borrar              Borrar perfil
V	    /almacenes                  Lista de almacenes
V	    /almacenes/registrar        Crear nuevo almacen
V	    /almacenes/:id/editar       Editar almacen
V	    /almacenes/borrar/:id       Borrar almacen
ff	    /almacenes/ubicación        Ubicación almacen
ff	    /equipamiento-registro      Crear nuevo equipamiento
ff	    /equipamiento-editar        Editar equipamiento
ff	    /equipamiento-borrar        Borrar equipamiento
ff	    /equipamiento-ubicación     Ubicación equipamiento
ff	    /envío-registro             Crear nuevo envío
ff	    /envío-status               Status del envío (aprobado,pendiente..)
ff	    /envío-ubicación            Muestra lista de material y cantidad

```
***

# Instalación
***
A little intro about the installation. 
```
$ git clone https://https://github.com/amarinoglobal/PPR/
$ cd ../PPR
$ npm install
$ npm run dev
