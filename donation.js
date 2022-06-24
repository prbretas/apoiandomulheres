//Estado da aplicação
let numero = 5792.57

//alteradores de estado
function aumentar() {
numero = numero + 20
console.log(numero)
mostrarNaTela()
}

//mostrar no HTML a alteração

  function mostrarNaTela(){
const ValorArrecadado = document.getElementById("ValorArrecadado");
ValorArrecadado.innerText = `R$ ${numero}`
  }
  
  // iniciar
  mostrarNaTela()
  
