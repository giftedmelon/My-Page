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


  /*function changeLanguage(language) {
    const nameElement = document.getElementById('myName');
    const textToTranslate = nameElement.textContent;
    const targetLanguage = language;
  
    translateText(textToTranslate, targetLanguage)
      .then(translatedText => {
        nameElement.textContent = translatedText;
      })
      .catch(error => {
        console.error('Translation error:', error);
      });
  }
  
  function translateText(text, targetLanguage) {
    const apiKey = 'YOUR_GOOGLE_TRANSLATE_API_KEY';
    const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  
    return new Promise((resolve, reject) => {
      $.ajax({
        url: apiUrl,
        type: 'POST',
        data: {
          q: text,
          target: targetLanguage
        },
        success: function(response) {
          if (response && response.data && response.data.translations && response.data.translations.length > 0) {
            resolve(response.data.translations[0].translatedText);
          } else {
            reject('No translation available');
          }
        },
        error: function(xhr, status, error) {
          reject(error);
        }
      });
    });
  } */