

  function mostrarSeccion(id) {
    // Oculta todas las secciones
    document.querySelectorAll('.seccion').forEach(seccion => {
      seccion.classList.add('oculto');
    });

    // Muestra la sección seleccionada
    document.getElementById(id).classList.remove('oculto');

    // Oculta los botones
    document.getElementById('contenedor-botones').style.display = 'none';
  }

  
  function volverInicio() {
    // Oculta todas las secciones
    document.querySelectorAll('.seccion').forEach(seccion => {
      seccion.classList.add('oculto');
    });

    // Muestra los botones otra vez
    document.getElementById('contenedor-botones').style.display = 'flex';
  }





  