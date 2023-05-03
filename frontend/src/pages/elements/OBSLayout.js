import { useEffect, useState } from 'react';
import { socket } from '../../services/socket';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import ReverseTimer from '../../components/ReverseTimer';

const OBSLayout = () => {
  const [isDisplay, setIsDisplay] = useState(true);

  useEffect(() => {
    socket.on('control', (control) => {
      setIsDisplay(control);
      console.log('это что =>', control);
    });

    //
    // return () => {
    //     socket.off('message');
    // };
  }, []);

  return (
    <>
      <Typography>OBS Layout</Typography>
      <Box display={isDisplay}>
        <ReverseTimer />
      </Box>
    </>
  );
};
export default OBSLayout;
