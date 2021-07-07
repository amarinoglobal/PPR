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


***
.class {
  /* position */
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99; 
  /* display */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /* aspecto */
  width: 100%;
  height: 100px;
  padding: 0;
  margin: 0 0 20px;
  border-radius: 50%;
  border: 1px solid black;
  background: red;
  color: #F8F9FA;
  opacity: 1;
  /* tipo */
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-style: italic;
  font-size: 30px;
  line-height: 1.2;
  letter-spacing: 0;
  text-transform: uppercase;
  text-align: center;
  /* extras */
  overflow: hidden;
  transform: translate3d(0, 100%, 0);
  transition: opacity .4s ease, transform .7s ease;
  ***
