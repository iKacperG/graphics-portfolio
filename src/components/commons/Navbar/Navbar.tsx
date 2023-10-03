import React from 'react';
import { Grid, Link, Typography } from '@mui/material';

export default function Navbar(){
  return(
    <Grid container justifyContent="center" bgcolor="background.paper" height="8vh">
      <Grid item xs={12}>
        <Grid container justifyContent="space-between" p={2}>
          <Grid item>
            <Typography variant="h1" color="primary.main">Lift up</Typography>
          </Grid>
          <Grid item display="flex" alignItems="center" gap={2}>
            <Link href="/about" variant="h2">O mnie</Link>
            <Link href="/education" variant="h2">Wykształcenie</Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
