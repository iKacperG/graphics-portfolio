import React from 'react';
import { Grid } from '@mui/material';
import PreviewGallery from '../PreviewGallery/PreviewGallery';
import LinkButton from '../commons/Buttons/LinkButton/LinkButton';

export default function Homepage(){
  return(
    <>
      <Grid container justifyContent="center" bgcolor="background.paper">
        <Grid item xs={12} md={10} lg={9} xl={7} height="83vh" display="flex">
          <Grid container>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
              <PreviewGallery />
            </Grid>
            <Grid item xs={12} mt={5} display="flex" gap={3} justifyContent="center">
              <LinkButton to="/about">Check bio</LinkButton>
              <LinkButton to="/gallery">Check my other projects</LinkButton>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </>
  )
}
