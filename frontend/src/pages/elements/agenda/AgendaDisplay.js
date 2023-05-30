import { useEffect, useState } from 'react';
import { socket } from '../../../services/socket';
import { Typography, Stack } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import DotIcon from '@mui/icons-material/FiberManualRecord';

const AgendaDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on('agenda', (data) => {
      setData(data);
    });
  }, []);

  const firstFalseObj = data.find((item) => item.isDone === false);

  return (
    <Stack
      spacing={1}
      sx={{
        color: '#fff',
        display: 'inline-flex',
        flexDirection: 'column',
        minWidth: '288px',
        maxWidth: '288px',
        padding: '8px',
        backgroundColor: '#252525',
        borderRadius: '0px 0px 8px 8px',
      }}
    >
      <Typography variant='h6' color='primary' noWrap>
        Порядок денний
      </Typography>

      {data.map((item) => {
        const isCurrentItem = item.id === firstFalseObj?.id;

        const itemTextStyle = isCurrentItem
          ? { fontSize: '18px', textTransform: 'uppercase' }
          : {};

        if (item.isDone) {
          itemTextStyle.textDecoration = 'line-through';
        }

        return (
          <Stack key={item.id} spacing={1} direction='row' alignItems='center'>
            {isCurrentItem ? (
              <SchoolIcon fontSize='small' sx={{ marginRight: '8px' }} />
            ) : (
              <DotIcon fontSize='small' sx={{ padding: '4px' }} />
            )}
            <Typography key={item.id} noWrap sx={itemTextStyle}>
              {item.todo}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default AgendaDisplay;
