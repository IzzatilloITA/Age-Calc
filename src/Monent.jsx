import React, { useState } from 'react';
import moment from 'moment';

function DateDifferenceApp() {
  const [inputDate, setInputDate] = useState('');
  const [dateDifference, setDateDifference] = useState(null);

  const handleDateChange = (e) => {
    setInputDate(e.target.value);
  };

  const calculateDifference = () => {
    if (inputDate) {
      const currentDate = moment();
      const targetDate = moment(inputDate);
      const diff = targetDate.diff(currentDate);

      if (diff > -1000000000000) {
        // разница в миллисекундах
        const duration = moment.duration(diff);
        setDateDifference({
          days: duration.days(),
          hours: duration.hours(),
          minutes: duration.minutes(),
          seconds: duration.seconds(),
        });
      } else {
        setDateDifference(null);
        alert('Введенная дата уже прошла!');
      }
    }
  };

  return (
    <div>
      <h1>Расчет разницы между датами</h1>
      <input
        type="datetime-local"
        value={inputDate}
        onChange={handleDateChange}
      />
      <button onClick={calculateDifference}>Посчитать разницу</button>

      {dateDifference && (
        <div>
          <h2>Оставшееся время:</h2>
          <p>{dateDifference.days} дней, {dateDifference.hours} часов, {dateDifference.minutes} минут, {dateDifference.seconds} секунд</p>
        </div>
      )}
    </div>
  );
}

export default DateDifferenceApp;
