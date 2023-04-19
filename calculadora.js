let valorVisor = 0;
let numeroA;
let numeroB;
let operacion;

function button(dado) {
    var auxiliar = document.getElementById("visor").value;
    document.getElementById("visor").value = auxiliar + dado; 


    valorVisor = document.getElementById("visor").value = auxiliar + dado;
    var hora = eldia.getHours();
}

function btn_suma(caracter){
    numeroA = valorVisor;
    operacion = "+";
    
    limpiar();
}

function btn_subtract(caracter){
  numeroA = valorVisor;
  operacion = "-";
  
  limpiar();
}

function btn_multiplicar(caracter){
  numeroA = valorVisor;
  operacion = "*";
  
  limpiar();
}

function btn_divide(caracter){
  numeroA = valorVisor;
  operacion = "/";
  
  limpiar();
}

function reset() {
    document.getElementById('visor').value = '';
    valorVisor = 0;
    operacion = "";
}
function limpiar(){
    document.getElementById('visor').value = '';
    
}

function btn_igual(){
    numeroB = valorVisor;
    calcular();
}

function calcular() {
    var total = 0;
    var ultimoTotal = 0;
      switch(operacion){
        case "+":
          total = parseFloat(numeroA) + parseFloat(numeroB);
          break;
        case "-":
            total = parseFloat(numeroA) - parseFloat(numeroB);
            break;
        case "*":
          total = parseFloat(numeroA) * parseFloat(numeroB);
          break;
        case "/":
          total = parseFloat(numeroA) / parseFloat(numeroB);
          break;
      }
      ultimoTotal = total;
      reset();
      document.getElementById('visor').value = total;
      valorVisor = ultimoTotal;
}