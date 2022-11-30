import React from 'react';
import { Grid } from '@mui/material';
import PixelGallery from '../PixelGallery/PixelGallery';
import PixelCarousel from '../PixelCarousel/PixelCarousel';
import PixelInset from '../PixelInset/PixelInset';

export default function PixelSet(){
  return(
    <Grid container justifyContent="center" rowGap={12}>
      <Grid item xs={12} md={7} mt={10} display="flex" justifyContent="center" alignItems="center" sx={{
        border: '15px solid',
        borderImage: 'url(https://picsum.photos/200) 30 / 15px / 0px stretch',
      }}>
        <PixelGallery />
      </Grid>
      <Grid item xs={12} md={7} display="flex" justifyContent="center" alignItems="center">
        <PixelCarousel />
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" sx={{
        border: '15px solid',
        borderImage: 'url(https://picsum.photos/200) 30 / 15px / 0px stretch',
      }}>
        <PixelInset />
      </Grid>
    </Grid>
  )
}
