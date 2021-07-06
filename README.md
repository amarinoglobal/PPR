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
1	    /                         Index
2	    /registro	                Registra nuevo usuario
3	    /iniciar-sesión	        Inicio de sesión de usuario
4	    /perfil                     Mi perfil
5	    /perfil-editar              Editar perfil
6	    /perfil-borrar              Borrar perfil
7	    /almacen-registro           Crear nuevo almacen
8	    /almacen-editar             Editar almacen
9	    /almacen-borrar             Borrar almacen
10	    /almacen-ubicación          Ubicación almacen
11	    /equipamiento-registro      Crear nuevo equipamiento
12	    /equipamiento-editar        Editar equipamiento
13	    /equipamiento-borrar        Borrar equipamiento
14	    /equipamiento-ubicación     Ubicación equipamiento
14	    /envío-registro	        Crear nuevo envío
15	    /envío-status	        Status del envío (aprobado,pendiente..)
16	    /envío-ubicación            Muestra lista de material y cantidad

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
