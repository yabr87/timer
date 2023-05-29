import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getAllAgenda = async () => {
  try {
    const { data } = await instance.get('/api/agenda');
    return data;
  } catch (error) {
    throw error;
  }
};

export const createAgendaItem = async (data) => {
  try {
    const { data: result } = await instance.post('/api/agenda', data);
    return result;
  } catch (error) {
    throw error;
  }
};

export const updateAgendaItem = async (data) => {
  const { id, todo, isDone } = data;
  try {
    const { data: result } = await instance.patch(`/api/agenda/${id}`, {
      todo,
      isDone,
    });
    return result;
  } catch (error) {
    throw error;
  }
};

export const deleteAgendaItem = async (id) => {
  try {
    const { data: result } = await instance.delete(`/api/agenda/${id}`);
    return result;
  } catch (error) {
    throw error;
  }
};
