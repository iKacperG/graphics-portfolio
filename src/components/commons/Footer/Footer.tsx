import React from 'react';
import { Grid, Link, Typography } from '@mui/material';

export default function Footer(){
  return(
    <Grid container justifyContent="center" bgcolor="primary.main" p={2} height="9vh">
      <Grid item xs={10} display="flex" flexDirection="column">
        <Link href="/about" variant="body1">O mnie</Link>
        <Link href="/education" variant="body1">Wykształcenie</Link>
      </Grid>
      <Grid item xs={2} display="flex"  justifyContent="flex-end" alignItems="flex-end">
        <Typography variant="body1">LiftUp©2023</Typography>
      </Grid>
    </Grid>
  )
}
