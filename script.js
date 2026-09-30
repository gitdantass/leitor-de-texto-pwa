const btn = document.getElementById('btn');
const textarea = document.getElementById('text');

btn.addEventListener('click', () => {
    const textToSpeech = textarea.value.trim();

    if (textToSpeech === '') {
        alert('Por favor, digite um texto antes de clicar em Falar!');
        return;
    }

    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(textToSpeech);
        utterance.lang = 'pt-BR';
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Desculpe, seu navegador não suporta leitura de voz.');
    }
});