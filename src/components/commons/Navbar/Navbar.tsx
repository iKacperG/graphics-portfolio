import React from 'react';
import { Grid, Link, Typography } from '@mui/material';

export default function Navbar(){
  return(
    <Grid container justifyContent="center" bgcolor="primary.light" height="8vh">
      <Grid item xs={12}>
        <Grid container justifyContent="space-between" p={2}>
          <Grid item>
            <Typography variant="h1">Imagenary</Typography>
          </Grid>
          <Grid item display="flex" alignItems="center" gap={2}>
            <Link href="/about" variant="h2">About</Link>
            <Link href="/gallery" variant="h2">Gallery</Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
