import Typography from '@mui/material/Typography';
import { TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { socket } from '../../services/socket';

const EventPageBlock = () => {
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [status, setStatus] = useState(true);
  const [message, setMessage] = useState({});

  useEffect(() => {
    const sendMessage = () => {
      socket.emit('message', message);
    };
    sendMessage();
  }, [message]);

  const start = () => {
    setStatus((prevStatus) => !prevStatus);
    setMessage({ hours, minutes, status });
  };

  const stop = () => {
    setHours('0');
    setMinutes('0');
    setStatus((prevStatus) => !prevStatus);
    setMessage({ hours, minutes, status });
  };

  return (
    <>
      <Typography>Event page block</Typography>
      <br />
      <div>
        {status && (
          <>
            <TextField
              label='Hours'
              variant='outlined'
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              type='number'
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                min: 0,
                max: 23,
              }}
              required
            />
            <TextField
              label='Minutes'
              variant='outlined'
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              type='number'
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                min: 0,
                max: 59,
              }}
              required
            />
            <Button variant='contained' type='button' onClick={start}>
              Start
            </Button>
          </>
        )}
        {!status && (
          <Button variant='contained' type='button' onClick={stop}>
            Stop
          </Button>
        )}
      </div>
    </>
  );
};
export default EventPageBlock;
