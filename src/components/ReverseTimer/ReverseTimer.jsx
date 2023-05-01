import { convertMs } from 'utils/convertMs';
import { convertToMs } from 'utils/convertToMs';
import { useState } from 'react';
import TimerWrapper from 'components/TimerWrapper';

let intervalId = null;

const initialState = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
};

export const ReverseTimer = () => {
  const [time, setTime] = useState(initialState);
  const [timerOn, setTimerOn] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;

    const padValue = String(value).padStart(2, '0');

    setTime(prevState => ({
      ...prevState,
      [name]: padValue,
    }));
  };

  const startTime = () => {
    setTimerOn(true);
    const startTime = Date.now();
    const userTime = startTime + convertToMs(time);

    intervalId = setInterval(() => {
      const currentTime = Date.now();
      setTime(convertMs(userTime - currentTime));
      if (currentTime >= userTime) {
        stopTime();
        alert('time is up');
      }
    }, 1000);
  };

  const stopTime = () => {
    clearInterval(intervalId);
    setTimerOn(false);
    setTime(initialState);
  };

  const { hours, minutes, seconds } = time;

  return (
    <TimerWrapper>
      <p>
        {hours}:{minutes}:{seconds}
      </p>

      {!timerOn ? (
        <div>
          <label>
            Hours:
            <input
              min="0"
              type="number"
              name="hours"
              value={time.hours}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Minutes:
            <input
              min="0"
              type="number"
              name="minutes"
              value={time.minutes}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button onClick={startTime}>Start</button>
        </div>
      ) : (
        <button onClick={stopTime}>Stop</button>
      )}
    </TimerWrapper>
  );
};

export default ReverseTimer;
