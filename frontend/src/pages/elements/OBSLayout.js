import { useEffect, useState } from "react";
import { socket } from "../../services/socket";
import { CircularProgress, Box } from "@mui/material";
import css from "./agenda/agendaList.module.css"
import Timer from "../../components/timer/Timer";
import TimerDuration from "../../components/timer/TimerDuration";
import SchoolIcon from '@mui/icons-material/School';

const OBSLayout = () => {
  const [message, setMessage] = useState("");
  const [isDisplay, setIsDisplay] = useState(true);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);



  const [timer, setTimer] = useState({
    secondsLeft: 0,
    isPaused: true,
  });
  const [timerDuration, setTimerDuration] = useState({
    secondsPassed: 0,
    isPaused: true,
  });

  const fetchData = () => {
    fetch("http://localhost:1337/api/lessons")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    // setIsLoading(true);

    socket.on("message", (msg) => {
      setMessage(msg);
    });

    socket.on("control", (control) => {
      setIsDisplay(control);
    });

    socket.on("timer", (timer) => {
      setTimer(timer);
    });
    socket.on("timerDuration", (timerDuration) => {
      setTimerDuration(timerDuration);
    });

    const interval = setInterval(() => {
      fetchData();
    }, 10000); 
  
    return () => {
      clearInterval(interval);
    };
    

    //
    // return () => {
    //     socket.off('message');
    // };
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:1337/api/lessons")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //       setIsDataLoaded(true);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <>
      {/*<Typography>
                OBS Layout
            </Typography>
            <Box display={isDisplay}>
                <div>{message}</div>
            </Box>*/}

      {/* {isLoading || !isDataLoaded ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : ( */}
        <>
          <Timer timer={timer} />
          <TimerDuration timer={timerDuration} />

          {/* <ul className={css.agenda__layout_list}>
            {data.data.map((item) => (
              <li className={css.agenda__layout_item} key={item.id}>
                <SchoolIcon color="disabled"/>
                {item.attributes.theme}</li>
            ))}
          </ul> */}
        </>
      {/* )} */}
    </>
  );
};
export default OBSLayout;
