import React from 'react';
import { Grid } from '@mui/material';
import DimensionalGallery from '../DimensionalGallery/DimensionalGallery';
import DimensionalCarousel from '../DimensionalCarousel/DimensionalCarousel';
import DimensionalInset from '../DimensionalInset/DimensionalInset';

export default function DimensionalSet(){
  return(
    <Grid container justifyContent="center" gap={12}>
      <Grid item xs={12} md={7} mt={10} display="flex" justifyContent="center" alignItems="center">
        <DimensionalGallery />
      </Grid>
      <Grid item xs={12} md={7} display="flex" justifyContent="center" alignItems="center">
        <DimensionalCarousel />
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
        <DimensionalInset />
      </Grid>
    </Grid>
  )
}
