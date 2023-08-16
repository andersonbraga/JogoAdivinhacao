const tryBtn = document.getElementById('tryBtn');
const input = document.querySelector('awserInput');

numero = parseInt(Math.random() * 20);
console.log(numero);

tryBtn.addEventListener('click', (e) => this.Tentativas());

function Tentativas() {
  if (input.value == numero) {
    console.log('acerto >:D');
    numero = parseInt(Math.random() * 20);
    console.log(numero);

    document.getElementById('txtChute').innerHTML = 'Acertou';
  }
}
