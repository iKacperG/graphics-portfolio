import React, { ReactNode } from 'react';
import { Typography } from '@mui/material';
import { PrimaryLink } from './styled/StyledLink';

interface LinkButtonProps {
  to: string,
  children: ReactNode,
}

export default function PrimaryLinkButton({ to, children }: LinkButtonProps){
  return(
    <PrimaryLink to={to}>
      <Typography variant="body1">{ children }
      </Typography>
    </PrimaryLink>
  )
}
