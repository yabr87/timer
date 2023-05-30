// import { useEffect, useState } from 'react';
// import { socket } from '../../services/socket';

import Timer from '../../components/timer/Timer';
import AgendaDisplay from './agenda/AgendaDisplay';

const OBSLayout = () => {
  // const [message, setMessage] = useState('');
  // const [IsDisplay, setIsDisplay] = useState(true);

  // useEffect(() => {
  //   socket.on('message', (msg) => {
  //     setMessage(msg);
  //   });

  //   socket.on('control', (data) => {
  //     setIsDisplay(data);
  //   });
  // }, []);

  return (
    <>
      <Timer />
      <AgendaDisplay />
    </>
  );
};
export default OBSLayout;
