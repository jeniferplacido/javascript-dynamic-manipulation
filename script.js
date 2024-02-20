function jogar(escolhaDoJogador) {
  const escolhas = ['Pedra', 'Papel', 'Tesoura'];
  const escolhaDoComputador = escolhas[Math.floor(Math.random() * escolhas.length)];

  let resultado = '';

  if (escolhaDoJogador === escolhaDoComputador) {
      resultado = 'Empate!';
  } else if (
      (escolhaDoJogador === 'Pedra' && escolhaDoComputador === 'Tesoura') ||
      (escolhaDoJogador === 'Papel' && escolhaDoComputador === 'Pedra') ||
      (escolhaDoJogador === 'Tesoura' && escolhaDoComputador === 'Papel')
  ) {
      resultado = 'Você ganhou!';
  } else {
      resultado = 'Você perdeu!';
  }

  document.getElementById('result').innerText = `Você escolheu ${escolhaDoJogador}, o computador escolheu ${escolhaDoComputador}. ${resultado}`;
}