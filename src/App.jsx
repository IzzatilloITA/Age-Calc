import React, { useState } from 'react';
import './App.css'



function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);

  // Массив мотивационных фраз
  const motivationalPhrases = [
      "Каждый день — это новый шанс начать все сначала.",
      "Возраст — это всего лишь число, главное — это то, что ты чувствуешь.",
      "Жизнь – это не количество прожитых дней, а те моменты, которые мы помним.",
      "С возрастом приходит понимание того, что действительно важно.",
      "Каждый возраст имеет свою уникальную красоту.",
      "Возраст определяется не количеством прожитых лет, а состоянием души.",
      "Жизнь без цели — это корабль без компаса.",
      "Самое большое богатство — это семья и друзья.",
      "Инвестиции в себя — самые выгодные инвестиции.",
      "Никогда не поздно стать тем, кем ты всегда хотел быть.",
      "Настоящая жизнь измеряется не числом прожитых лет, а моментами, когда захватывает дух.",
      "Жизнь – это не количество прожитых дней, а те моменты, которые мы помним.",
      // ... остальные фразы
  ];

  const handleCalculate = () => {
    setIsCalculated(true);
  };

  const calculateAge = () => {
    const birthDateObj = new Date(birthDate);
    const today = new Date();
    const differenceInMilliseconds = today - birthDateObj;
    // Разбиваем разницу на дни, часы и минуты
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const differenceInHours = Math.floor((differenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000* 60 * 60));
    const differenceInMinutes = Math.floor((differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    // Выбираем случайную мотивационную фразу из общего массива
    const randomIndex = Math.floor(Math.random() * motivationalPhrases.length);
    const randomPhrase = motivationalPhrases[randomIndex];
    let result=``
    if(birthDate==""){
      result="Невозможно рассчитать"
    }
    else(
      result= `Вы прожили  ${differenceInDays} дней, ${differenceInHours} часов и ${differenceInMinutes} минут. ${randomPhrase}`
    )
    // ... расчет возраста
    console.log(birthDate)
   return result
  };

  return (
    <div className="age-calculator">
      <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
      <button onClick={handleCalculate}>Рассчитать возраст</button>
      <p className="result">{isCalculated && calculateAge()}</p>
    </div>
  );
}

export default AgeCalculator;