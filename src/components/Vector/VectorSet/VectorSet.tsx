import React from 'react';
import { Grid } from '@mui/material';
import VectorGallery from '../VectorGallery/VectorGallery';
import VectorCarousel from '../VectorCarousel/VectorCarousel';
import VectorInset from '../VectorInset/VectorInset';

export default function VectorSet(){
  return(
    <Grid container justifyContent="center" gap={12}>
      <Grid item xs={12} md={7} mt={10} display="flex" justifyContent="center" alignItems="center">
        <VectorGallery />
      </Grid>
      <Grid item xs={12} md={7} display="flex" justifyContent="center" alignItems="center">
        <VectorCarousel />
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
        <VectorInset />
      </Grid>
    </Grid>
  )
}
