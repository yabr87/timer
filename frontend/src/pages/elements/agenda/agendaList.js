import { useState, useEffect, useCallback } from 'react';

import AgendaForm from './AgendaForm';
import AgendaItem from './AgendaItem';
import Loader from '../../../components/Loader';

import { socket } from '../../../services/socket';
import {
  getAllAgenda,
  createAgendaItem,
  updateAgendaItem,
  deleteAgendaItem,
} from '../../../services/agendaApi';

const AgendaList = () => {
  const [data, setData] = useState([]);
  const [isLoaderOpen, setIsLoaderOpen] = useState(true);

  const fetchData = async () => {
    try {
      const result = await getAllAgenda();
      console.log('++++++++++', result);
      setData(result);
    } catch (error) {
      alert(`Щось пішло не так. Спробуй ще раз!`);
    } finally {
      if (isLoaderOpen) {
        setIsLoaderOpen(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    socket.emit('agenda', data);
  }, [data]);

  const addTodo = async (todo) => {
    try {
      setIsLoaderOpen(true);
      const newItem = await createAgendaItem({ todo });
      await fetchData();
      alert(`${newItem.todo} додано`);
    } catch (error) {
      alert(`Щось пішло не так. Спробуй ще раз!`);
    } finally {
      setIsLoaderOpen(false);
    }
  };
  const updateTodo = async (todo) => {
    console.log(todo);
    try {
      setIsLoaderOpen(true);
      await updateAgendaItem(todo);
      await fetchData();
    } catch (error) {
      alert(`Щось пішло не так. Спробуй ще раз!`);
    } finally {
      setIsLoaderOpen(false);
    }
  };

  const deleTodo = async (id) => {
    try {
      setIsLoaderOpen(true);
      await deleteAgendaItem(id);
      await fetchData();
      alert(`видалено`);
    } catch (error) {
      alert(`Щось пішло не так. Спробуй ще раз!`);
    } finally {
      setIsLoaderOpen(false);
    }
  };

  return (
    <>
      {isLoaderOpen && <Loader />}
      <AgendaForm addTodo={addTodo} />
      {data.map((item) => (
        <AgendaItem
          key={item.id}
          data={item}
          deleTodo={deleTodo}
          updateTodo={updateTodo}
        />
      ))}
    </>
  );
};
export default AgendaList;

// const todo = {
//   todo: 'Задача',
//   duration: 0,
//   isDone: false,
// };
