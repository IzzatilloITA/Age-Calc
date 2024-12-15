import React, { useState } from 'react';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');

  const calculateAge = () => {
    const birthDateObj = new Date(birthDate);
    const today = new Date();
    const differenceInMilliseconds = today - birthDateObj;

    // Разбиваем разницу на дни, часы и минуты
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const differenceInHours = Math.floor((differenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const differenceInMinutes = Math.floor((differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));

    return `Вы прожили ${differenceInDays} дней, ${differenceInHours} часов и ${differenceInMinutes} минут`;
  }

  return (
    <div className="age-calculator">
      <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
      <p className="result">{calculateAge()}</p>
    </div>
  );
}

export default AgeCalculator;









//import React, { useState } from 'react';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const motivationalPhrases = [
    "Жизнь — это путешествие, а не пункт назначения.",
    // ... другие фразы
    "Каждый день — это новый шанс начать все сначала.",
    "Возраст — это всего лишь число, главное — это то, что ты чувствуешь.",
  ];

  const calculateAge = () => {
    // ... расчет возраста
    const birthDateObj = new Date(birthDate);
    const today = new Date();
    const differenceInMilliseconds = today - birthDateObj;

    // Разбиваем разницу на дни, часы и минуты
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const differenceInHours = Math.floor((differenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const differenceInMinutes = Math.floor((differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    // ... выбор случайной фразы
    const randomIndex = Math.floor(Math.random() * motivationalPhrases.length);
    const randomPhrase = motivationalPhrases[randomIndex]
    return `Вы прожили ${differenceInDays} дней, ${differenceInHours} часов и ${differenceInMinutes} минут. ${randomPhrase}`;
  };

  return (
    <div className="age-calculator">
      <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
      <p className="result">{calculateAge()}</p>
    </div>
  );
}

//export default AgeCalculator;