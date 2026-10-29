
    function autoSpeak() {
        if (window.hasSpoken) return;
        
        const text = "Welcome Rinky";
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        
        window.speechSynthesis.speak(utterance);
        window.hasSpoken = true;
    }

    document.body.addEventListener('click', autoSpeak);
    document.body.addEventListener('touchstart', autoSpeak);
});
