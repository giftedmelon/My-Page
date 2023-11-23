const myName = document.getElementById('myName');

myName.addEventListener('mouseover', function() {
  myName.style.fontFamily = 'Baskerville, serif';
});

myName.addEventListener('mouseout', function() {
  myName.style.fontFamily = 'Arial, sans-serif';
});

function changeLanguage(language) {
    const nameElement = document.getElementById('myName');
    const greetings = {
      'en': 'Hello, I\'m [Your Name]',
      'zh': '你好，我是[你的名字]',
      'ja': 'こんにちは、私は[あなたの名前]です'
    };
    
    const selectedGreeting = greetings[language] || greetings['en'];
    nameElement.textContent = selectedGreeting;
  }