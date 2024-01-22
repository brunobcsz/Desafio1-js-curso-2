let titulo = document.querySelector('h1');
titulo.innerHTML = ('Hora do desafio');

function verificarChute() {
    console.log('O botão foi clicado!');
  }

function verificarAlerta() {
    alert('Eu amo TS');
}

function verificarCidade() {
    cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function somandoNumeros() {
    let numero1 = parseInt(prompt('Digite o primeiro número para a soma'));
    let numero2 = parseInt(prompt('Digite o segundo número para a soma'));
    let soma = numero1 + numero2;
    alert(`${numero1} + ${numero2} = ${soma}`);
}
