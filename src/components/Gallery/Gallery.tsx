import React from 'react';
import { Grid } from '@mui/material';
import PixelGallery from '../PixelGallery/PixelGallery';

export default function Gallery(){
  return(
    <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
      <PixelGallery />
    </Grid>
  )
}
