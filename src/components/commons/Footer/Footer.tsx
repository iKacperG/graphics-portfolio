import React from 'react';
import { Grid, Link, Typography } from '@mui/material';

export default function Footer(){
  return(
    <Grid container justifyContent="center" bgcolor="primary.light" p={2} height="9vh">
      <Grid item xs={10} display="flex" flexDirection="column">
        <Link href="/about" variant="body1">About</Link>
        <Link href="/gallery" variant="body1">Gallery</Link>
      </Grid>
      <Grid item xs={2} display="flex"  justifyContent="flex-end" alignItems="flex-end">
        <Typography variant="body1">Imagenary©2022</Typography>
      </Grid>
    </Grid>
  )
}
