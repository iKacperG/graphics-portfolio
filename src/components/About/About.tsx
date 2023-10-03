import React from 'react';
import { Grid } from '@mui/material';
import GymPreview from '../GymPreview/GymPreview';

export default function About(){
  return(
    <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
      <GymPreview />
    </Grid>
  )
}
