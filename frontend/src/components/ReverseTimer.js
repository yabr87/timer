import { useState, useEffect } from 'react';
import { convertMs } from '../utils/convertMs';
import { convertToMs } from '../utils/convertToMs';
import { socket } from '../services/socket';

const initialState = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
  status: false,
};

export const ReverseTimer = () => {
  const [time, setTime] = useState(initialState);
  const [status, setStatus] = useState(initialState.status);
  console.log('+++>', time);
  const { hours, minutes, seconds } = time;
  useEffect(() => {
    socket.on('message', (msg) => {
      setTime((prevState) => ({ ...prevState, ...msg }));
      setStatus(msg.status);
    });

    //
    // return () => {
    //     socket.off('message');
    // };
  }, [time]);

  useEffect(() => {
    let intervalId = null;
    const startTime = () => {
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
      setTime(initialState);
    };

    if (status) {
      startTime();
    }

    if (!status) {
      stopTime();
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [status]);

  return (
    <div>
      <p>
        {hours.padStart(2, '0')}:{minutes.padStart(2, '0')}:
        {seconds.padStart(2, '0')}
      </p>
    </div>
  );
};

export default ReverseTimer;
