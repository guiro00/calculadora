var valor;
var resultado;
var apaga;

function botao(num){
  valor = document.calc.visor.value += num;
  
}
function apagar() {
  valor = document.calc.visor.value = valor.substring(0,valor.length-1);
}



function reseta(){
  document.calc.visor.value = '';
}

function calcula() {
  resultado = eval(valor);
  document.calc.visor.value = resultado.toLocaleString('pt-BR');
}





