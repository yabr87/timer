import { useState, useEffect } from 'react';
import { Typography, Stack, IconButton, Grid } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';

import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ClearIcon from '@mui/icons-material/Clear';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const AgendaItem = ({ data, deleTodo, updateTodo }) => {
  const [isDel, setIsDel] = useState(false);

  const { id, todo, isDone } = data;

  const isCheck = () => {
    updateTodo({ id, todo, isDone: !isDone });
  };

  return (
    <Grid
      container
      direction='row'
      sx={{ flexWrap: 'nowrap' }}
      alignItems='center'
    >
      {!isDone ? (
        <IconButton onClick={isCheck}>
          <PanoramaFishEyeIcon size='large' />
        </IconButton>
      ) : (
        <IconButton onClick={isCheck}>
          <TaskAltIcon size='large' color='secondary' />
        </IconButton>
      )}
      <Grid item xs={8} zeroMinWidth>
        <Typography noWrap>{todo}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Stack spacing={1} direction='row-reverse'>
          {!isDel ? (
            <IconButton onClick={() => setIsDel(true)}>
              <DeleteIcon size='large' />
            </IconButton>
          ) : (
            <>
              <IconButton onClick={() => setIsDel(false)}>
                <ClearIcon size='large' />
              </IconButton>
              <IconButton onClick={() => deleTodo(id)}>
                <DeleteForeverIcon size='large' color='error' />
              </IconButton>
            </>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};
export default AgendaItem;
