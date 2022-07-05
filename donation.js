//Estado da aplicação
let numero = 5280.54;

//alteradores de estado
function aumentarIrme() {
  numero = numero + 20;
  console.log(numero);
  mostrarNaTela();
}

function aumentarElasNoPoder() {
  numero = numero + 20;
  console.log(numero);
  mostrarNaTela();
}

function aumentarFalaMulher() {
  numero = numero + 20;
  console.log(numero);
  mostrarNaTela();
}

//mostrar no HTML a alteração

function mostrarNaTela() {
  const ValorArrecadado = document.getElementById("ValorArrecadado");
  ValorArrecadado.innerText = `R$ ${numero}`;


}

// iniciar
mostrarNaTela();




let VAValue = ValorArrecadado.value













/********************ANIMAÇÕES JS********************************/

//Lógica

// 1 - Selecionar elementos que devem ser animados
// 2 - Definir a classe que é adcionada durante a animação
// 3 - Criar função de animação
// 3.1 - Verificar a distância entre a barra de scroll e o topo do site
// 3.2 - Verificar se a distância do 3.1 + Offset é maior do que a distância entre o elemento e o Topo da Página
// 3.3 - Se verdadeiro adicionar classe de animação, remover se for falso
// 4 - Ativar a função de animação toda vez que o usuário ultilizar o scroll
// 5 - Otimizar ativação

//DEBOUNCE DO LODASH

const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;

  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

animeScroll();

if (target.length) {
  window.addEventListener(
    "scroll",
    debounce(function () {
      animeScroll();
    }, 10)
  );
}




