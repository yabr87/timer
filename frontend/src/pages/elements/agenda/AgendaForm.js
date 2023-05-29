import { useState, useEffect } from 'react';

import { TextField, Button, Typography, Stack } from '@mui/material';

const AgendaForm = ({ addTodo }) => {
  const [newTodo, setTodo] = useState('');

  const onSubmit = (e) => {
    if (!newTodo) return;
    e.preventDefault();
    addTodo(newTodo.trim());
    setTodo('');
  };

  return (
    <>
      <Typography variant='h6' mb={1}>
        Порядок денний
      </Typography>
      <form onSubmit={onSubmit}>
        <Stack spacing={1} direction='row'>
          <TextField
            size='small'
            label='Введіть тему'
            value={newTodo || ''}
            onChange={(e) => setTodo(e.target.value)}
            fullWidth
          />
          <Button type='submit' variant='contained' color='primary'>
            Додати
          </Button>
        </Stack>
      </form>
    </>
  );
};
export default AgendaForm;
