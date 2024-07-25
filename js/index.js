document.addEventListener('DOMContentLoaded', function() {
   const periodicidadSelect = document.getElementById('comunicacion-select');
   const chartIframe = document.querySelector('#chart2 .chart-container__iframe');
   const chartUrls = {
      asignaciones: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTo0Ygg87eW3QuRh0dXy5Z3v_AmGJreCeXnvV_1fIa5SSAmbY44jlIzBWVVKv3NU26JHsPDQaL1LHXC/pubchart?oid=1411195835&format=interactive',
      previsional: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTo0Ygg87eW3QuRh0dXy5Z3v_AmGJreCeXnvV_1fIa5SSAmbY44jlIzBWVVKv3NU26JHsPDQaL1LHXC/pubchart?oid=1999240229&format=interactive',
      tramitesYservicios: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTo0Ygg87eW3QuRh0dXy5Z3v_AmGJreCeXnvV_1fIa5SSAmbY44jlIzBWVVKv3NU26JHsPDQaL1LHXC/pubchart?oid=744059156&format=interactive',
      programas: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTo0Ygg87eW3QuRh0dXy5Z3v_AmGJreCeXnvV_1fIa5SSAmbY44jlIzBWVVKv3NU26JHsPDQaL1LHXC/pubchart?oid=744059156&format=interactive',
      organismoExternos: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTo0Ygg87eW3QuRh0dXy5Z3v_AmGJreCeXnvV_1fIa5SSAmbY44jlIzBWVVKv3NU26JHsPDQaL1LHXC/pubchart?oid=744059156&format=interactive'
   };
   // Agregar un event listener al dropdown para detectar cambios
   periodicidadSelect.addEventListener('change', function() {
       // Obtener el valor seleccionado del dropdown
       const selectedOption = periodicidadSelect.value;
       // Actualizar el src del iframe con la URL correspondiente
       chartIframe.src = chartUrls[selectedOption];
   });
});

document.addEventListener('DOMContentLoaded', function() {
    const periodicidadSelect = document.getElementById('periodicidad-select');
    const chartIframe = document.querySelector('#chart4 .chart-container__iframe');
    const chartUrls = {
      aDemanda: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTo0Ygg87eW3QuRh0dXy5Z3v_AmGJreCeXnvV_1fIa5SSAmbY44jlIzBWVVKv3NU26JHsPDQaL1LHXC/pubchart?oid=744059156&format=interactive',
      diaria: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTo0Ygg87eW3QuRh0dXy5Z3v_AmGJreCeXnvV_1fIa5SSAmbY44jlIzBWVVKv3NU26JHsPDQaL1LHXC/pubchart?oid=1418436833&format=interactive',
      eventual: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTo0Ygg87eW3QuRh0dXy5Z3v_AmGJreCeXnvV_1fIa5SSAmbY44jlIzBWVVKv3NU26JHsPDQaL1LHXC/pubchart?oid=1363399549&format=interactive',
      mensual: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTo0Ygg87eW3QuRh0dXy5Z3v_AmGJreCeXnvV_1fIa5SSAmbY44jlIzBWVVKv3NU26JHsPDQaL1LHXC/pubchart?oid=881729646&format=interactive'
    };
    // Agregar un event listener al dropdown para detectar cambios
    periodicidadSelect.addEventListener('change', function() {
        // Obtener el valor seleccionado del dropdown
        const selectedOption = periodicidadSelect.value;
        // Actualizar el src del iframe con la URL correspondiente
        chartIframe.src = chartUrls[selectedOption];
    });
});

/*
Explicación detallada:
1. document.addEventListener('DOMContentLoaded', function() { ... });
   - Esta línea asegura que el código dentro de la función no se ejecutará hasta que el DOM esté completamente cargado. Esto significa que todos los elementos del DOM estarán disponibles para ser manipulados.

2. const canalesSelect = document.getElementById('canales-select');
   - Obtener el elemento del dropdown por su ID
   Se obtiene una referencia al elemento dropdown con el ID 'canales-select'.

3. const chartIframe = document.querySelector('#chart2 iframe.chart-container__iframe');
   - Obtener el iframe que se actualizará por su clase
   Se obtiene una referencia al iframe dentro del contenedor con el ID 'chart2'.
   - ('#chart2 iframe.chart-container__iframe')
   Combina selectores, seleccionando el primer elemento <iframe> que tiene la clase chart-container__iframe y que es un descendiente del elemento con el ID chart2.

4. const chartUrls = { ... };
   - Definir las URLs de los gráficos según las opciones del dropdown
   Se define un objeto que contiene las URLs de los gráficos para cada opción del dropdown ('SMS', 'PUSH', 'MAIL').

5. canalesSelect.addEventListener('change', function() { ... });
   - Agregar un event listener al dropdown para detectar cambios
   Se añade un event listener al dropdown que escucha por cambios (cuando el usuario selecciona una nueva opción).
   function() { ... }
   - funcion sin nombre(anonima), define lo q se ejecutara una se dispare eDOMContentLoaded. Esta vacia inicialmente porque la arbrimos con {

6. const selectedcanales = canalesSelect.value;
   - Obtener el valor seleccionado del dropdown
   Dentro del event listener, se obtiene el valor de la opción seleccionada.

7. chartIframe.src = chartUrls[selectedcanales];
   - Actualizar el src del iframe con la URL correspondiente
   Se actualiza el atributo 'src' del iframe con la URL correspondiente del objeto chartUrls según la opción seleccionada.
*/

