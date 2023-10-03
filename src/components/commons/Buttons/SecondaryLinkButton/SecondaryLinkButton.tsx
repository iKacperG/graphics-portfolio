import React, { ReactNode } from 'react';
import { Typography } from '@mui/material';
import { SecondaryLink } from './styled/StyledLink';

interface LinkButtonProps {
  to: string,
  children: ReactNode,
}

export default function SecondaryLinkButton({ to, children }: LinkButtonProps){
  return(
    <SecondaryLink to={to}>
      <Typography variant="body1">{ children }</Typography>
    </SecondaryLink>
  )
}
