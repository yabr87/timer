import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { socket } from '../../services/socket';

const OBSControl = () => {
  const [isDisplay, setIsDisplay] = useState('true');

  const handleChange = (event, newIsDisplay) => {
    setIsDisplay(newIsDisplay);
    socket.emit('control', newIsDisplay);
  };

  useEffect(() => {
    socket.emit('control', 'true');
  }, []);

  return (
    <>
      <Typography>OBS Control</Typography>

      <ToggleButtonGroup
        color='primary'
        value={isDisplay}
        exclusive
        onChange={handleChange}
        aria-label='Platform'
      >
        <p></p>
        <ToggleButton value='true'>Enable</ToggleButton>
        <ToggleButton value='false'>Disable</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};
export default OBSControl;
