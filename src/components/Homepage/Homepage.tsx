import React from 'react';
import { Grid } from '@mui/material';
import GymPreview from '../GymPreview/GymPreview';
import PhysiotherapyPreview from '../PhysiotherapyPreview/PhysiotherapyPreview';

export default function Homepage(){
  return(
    <>
      <Grid container justifyContent="center" style={{
        background: 'linear-gradient(45deg, rgba(39,38,67,1) 0%, rgba(39,38,67,1) 50%, rgba(217,228,236,1) 50%, rgba(217,228,236,1) 100%)',
      }}
      >
        <Grid item xs={12} md={12} lg={12} xl={12} height="83vh" display="flex">
          <Grid container>
            <Grid item xs={6} display="flex" justifyContent="center" alignItems="center">
              <GymPreview />
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="center" alignItems="center">
              <PhysiotherapyPreview />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
