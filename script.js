document.addEventListener('DOMContentLoaded', () => {
    const florestaButton = document.getElementById('floresta');
    const bibliotecaButton = document.getElementById('biblioteca');
    const resultadoDiv = document.getElementById('resultado');
  
    florestaButton.addEventListener('click', () => {
      resultadoDiv.textContent = 'Você decidiu explorar a Floresta Proibida. O ar é denso e misterioso, e sons estranhos ecoam ao longe...';
      resultadoDiv.style.color = '#4CAF50'; // Cor para efeito dramático
    });
  
    bibliotecaButton.addEventListener('click', () => {
      resultadoDiv.textContent = 'Você escolheu investigar a sala secreta na Biblioteca de Hogwarts. Livros antigos revelam segredos esquecidos...';
      resultadoDiv.style.color = '#2196F3'; // Cor para efeito dramático
    });
  });