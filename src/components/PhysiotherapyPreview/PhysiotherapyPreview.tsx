import React from 'react';
import { Box, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import SecondaryLinkButton from '../commons/Buttons/SecondaryLinkButton/SecondaryLinkButton';
import bgimage from '../../assets/images/whitebg.jpg';
import { ReactComponent as TickIcon } from '../../assets/images/icons/icons8-tick.svg';
import PrimaryLinkButton from '../commons/Buttons/PrimaryLinkButton/PrimaryLinkButton';

export default function PhysiotherapyPreview(){
  return(
    <Grid item position="relative" width="100%" height="100%" display="flex" alignItems="flex-end" justifyContent="center" paddingBottom={3}>
      <Box style={{
        width: '100%',
        position: 'absolute',
        zIndex: 1,
        top: 0,
        left: '-50%',
      }} display="flex" flexDirection="column" gap={2} justifyContent="center">
        <Box width="100%" height={60} paddingX={6} bgcolor="primary.main" display="flex" alignItems="center" justifyContent="flex-end">
          <TickIcon />
          <Typography marginLeft={3} variant="h4">Coś o fizjoterapii Coś o fizjoterapii Coś o fizjoterapii</Typography>
        </Box>
        <Box width="100%" height={60} paddingX={6} bgcolor="primary.main" display="flex" alignItems="center" justifyContent="flex-end">
          <TickIcon />
          <Typography marginLeft={3}  variant="h4">Coś o fizjoterapii Coś o fizjoterapii Coś o fizjoterapii</Typography>
        </Box>
        <Box width="100%" height={60} paddingX={6} bgcolor="primary.main" display="flex" alignItems="center" justifyContent="flex-end">
          <TickIcon />
          <Typography marginLeft={3}  variant="h4">Coś o fizjoterapii Coś o fizjoterapii Coś o fizjoterapii</Typography>
        </Box>
        <Box width="100%" height={60} paddingX={6} bgcolor="primary.main" display="flex" alignItems="center" justifyContent="flex-end">
          <TickIcon />
          <Typography marginLeft={3}  variant="h4">Coś o fizjoterapii Coś o fizjoterapii Coś o fizjoterapii</Typography>
        </Box>
        <Box display="flex" alignItems="center" pt={5} justifyContent="flex-end">
          <SecondaryLinkButton to="/gym">
            <Typography textTransform="uppercase" fontSize="24px" color="text.primary" variant="h2">Fizjoterapia</Typography>
          </SecondaryLinkButton>
        </Box>
      </Box>
    </Grid>
  )
}
