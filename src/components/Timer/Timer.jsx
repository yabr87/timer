import { convertMs } from 'utils/convertMs';
import { useState } from 'react';
import TimerWrapper from 'components/TimerWrapper';

let intervalId = null;

const initialState = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
};

export const Timer = () => {
  const [time, setTime] = useState(initialState);
  const [timerOn, setTimerOn] = useState(false);

  const startTime = () => {
    setTimerOn(true);
    const startTime = Date.now();

    intervalId = setInterval(() => {
      const currentTime = Date.now();
      setTime(convertMs(currentTime - startTime));
    }, 1000);
  };

  const stopTime = () => {
    clearInterval(intervalId);
    setTime(initialState);
    setTimerOn(false);
  };

  const { hours, minutes, seconds } = time;

  return (
    <TimerWrapper>
      <p>
        {hours}:{minutes}:{seconds}
      </p>
      {!timerOn ? (
        <button onClick={startTime}>Start</button>
      ) : (
        <button onClick={stopTime}>Stop</button>
      )}
    </TimerWrapper>
  );
};

export default Timer;
