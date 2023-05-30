import { Typography, Stack, IconButton, Grid } from '@mui/material';

const TimerDialDisplay = ({ time, text }) => {
  return (
    <Stack>
      <Typography fontSize={14} fontWeight={500} lineHeight={2} color='primary'>
        {text}
      </Typography>
      <Typography fontSize={24} fontWeight={600} lineHeight={1} color='#fff'>
        {time}
      </Typography>
    </Stack>
  );
};
export default TimerDialDisplay;
