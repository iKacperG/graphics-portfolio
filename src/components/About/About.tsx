import React from 'react';
import { Grid } from '@mui/material';
import PreviewGallery from '../PreviewGallery/PreviewGallery';

export default function About(){
  return(
    <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
      <PreviewGallery />
    </Grid>
  )
}
