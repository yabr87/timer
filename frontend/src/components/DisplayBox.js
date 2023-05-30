import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { socket } from '../services/socket';

const DisplayBox = () => {
  const [isDisplay, setIsDisplay] = useState(true);

  const handleChange = (event) => {
    if (event.target.value === 'false') {
      setIsDisplay(false);
    }
    if (event.target.value === 'true') {
      setIsDisplay(true);
    }
  };

  useEffect(() => {
    const resultOptions = { isDisplay };
    socket.emit('control', resultOptions);
  }, [isDisplay]);

  return (
    <Box mb={2}>
      <Typography mb={1}>OBS Control</Typography>
      <Box mb={2}>
        <ToggleButtonGroup
          fullWidth
          color='primary'
          value={isDisplay}
          exclusive
          onChange={handleChange}
          aria-label='Platform'
        >
          <ToggleButton disabled={isDisplay} value={true}>
            Enable
          </ToggleButton>
          <ToggleButton disabled={!isDisplay} value={false}>
            Disable
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};
export default DisplayBox;
