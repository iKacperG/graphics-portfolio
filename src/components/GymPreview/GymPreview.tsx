import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import bgimage from '../../assets/images/whitebg.jpg';
import PrimaryLinkButton from '../commons/Buttons/PrimaryLinkButton/PrimaryLinkButton';
import { colors } from '../../config/material-ui/colors';
import { ReactComponent as TickIcon } from '../../assets/images/icons/icons8-tick.svg';

export default function GymPreview(){
  return(
    <Grid item position="relative" width="100%" height="100%" display="flex" alignItems="flex-end" justifyContent="center" paddingBottom={3}>
      <Box style={{
        width: '100%',
        height: 600,
        backgroundSize: 'cover',
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        right: '-25%'
      }} display="flex" flexDirection="column" gap={3} justifyContent="center">
        <Box width="100%" height={60} paddingX={6} bgcolor="text.primary" display="flex" alignItems="center">
          <TickIcon />
          <Typography marginLeft={3} color="primary.main"  variant="h4">Coś o siłowni Coś o siłowni Coś o siłowni Coś o siłowni</Typography>
        </Box>
        <Box width="100%" height={60} paddingX={6} bgcolor="text.primary" display="flex" alignItems="center">
          <TickIcon />
          <Typography marginLeft={3} color="primary.main"   variant="h4">Coś o siłowni Coś o siłowni Coś o siłowni Coś o siłowni</Typography>
        </Box>
        <Box width="100%" height={60} paddingX={6} bgcolor="text.primary" display="flex" alignItems="center">
          <TickIcon />
          <Typography marginLeft={3} color="primary.main"  variant="h4">Coś o siłowni Coś o siłowni Coś o siłowni Coś o siłowni</Typography>
        </Box>
        <Box width="100%" height={60} paddingX={6} bgcolor="text.primary" display="flex" alignItems="center">
          <TickIcon />
          <Typography marginLeft={3} color="primary.main"   variant="h4">Coś o siłowni Coś o siłowni Coś o siłowni Coś o siłowni</Typography>
        </Box>
        <Box display="flex" alignItems="center" pt={5}>
          <PrimaryLinkButton to="/gym">
            <Typography textTransform="uppercase" fontSize="24px" color="primary.dark" variant="h2">Treningi na siłowni</Typography>
          </PrimaryLinkButton>
        </Box>

      </Box>
    </Grid>
  )
}
