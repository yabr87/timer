import * as React from 'react';
import { Grid, styled } from '@mui/material';
import Link from '@mui/material/Link';

const Item = styled('div')(({ theme }) => ({
  textAlign: 'center',
  border: 'solid 1px black',
  padding: '3px',
}));

export default function DebugPage() {
  // const [config, setConfig] = useState([]);

  // useEffect(() => {
  //     fetch("/config.json")
  //         .then(response => response.json())
  //         .then(json => {
  //             setConfig(json)
  //             console.log(json)
  //         });
  // }, []);

  return (
    <>
      {/*<Typography>*/}
      {/*  /!* This loaded from public/config.json - {JSON.stringify(config)} *!/*/}
      {/*</Typography>*/}
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Item>
            <iframe
              width='100%'
              height='500px'
              src={process.env.PUBLIC_URL + '/#/widget/obs-layout'}
              frameBorder='0'
            ></iframe>
          </Item>
          <Link
            target='_blank'
            href={process.env.PUBLIC_URL + '/#/widget/obs-layout'}
          >
            Open OBS layout in new tab
          </Link>
        </Grid>
        <Grid item xs={7}>
          <Item>
            <iframe
              width='100%'
              height='500px'
              src={process.env.PUBLIC_URL + '/#/widget/obs-control'}
              frameBorder='0'
            ></iframe>
          </Item>
          <Link
            target='_blank'
            href={process.env.PUBLIC_URL + '/#/widget/obs-control'}
          >
            Open OBS control in new tab
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <iframe
              width='100%'
              src={process.env.PUBLIC_URL + '/#/widget/event-page-block'}
              frameBorder='0'
            ></iframe>
          </Item>
          <Link
            target='_blank'
            href={process.env.PUBLIC_URL + '/#/widget/event-page-block'}
          >
            Open Event page block in new tab
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
