//Inicializar la función para calcular el factorial
function calcularElFactorial() {
  let numero;
  //Solicitar al usuario el número para calcular
  do {
      numero = prompt("Por favor ingresa el número que deseas calcular el factorial");
      if (isNaN(numero) || numero === "") {
        //Si el valor ingresado no es un número mostrar un mensaje para que ingrese nuevamente el valor
          alert("Por favor ingrese un número válido.");
      }//Crear bucle hasta que el usuario ingrese el valor correcto
  } while (isNaN(numero) || numero === "");
  //Convertir el valor de la variable numero a un número entero utilizando la función parseInt()
  numero = parseInt(numero);
  //Declarar una variable llamada factorial | inicializarla con el valor de 1.
  let factorialEs = 1;
  //Inicializar un bucle for para clacular el factorial del núimero ingresado por el usuario // Multiplicar el valor actual de factorial por el valor de i en cada iteración.
  for (let i = 1; i <= numero; i++) {
      factorialEs *= i;
  }
  //Imprimir en el DOM
  document.getElementById("resultadoCalculo").innerHTML = `El factorial de ${numero} es: ${factorialEs}`;
}

  
   
   