import React, { ReactNode } from 'react';
import StyledLink from './styled/StyledLink';
import { Typography } from '@mui/material';

interface LinkButtonProps {
  to: string,
  children: ReactNode,
}

export default function LinkButton({ to, children }: LinkButtonProps){
  return(
    <StyledLink to={to}>
      <Typography variant="body1">{ children }
      </Typography>
    </StyledLink>
  )
}
