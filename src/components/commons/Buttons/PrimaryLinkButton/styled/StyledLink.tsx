import { darken, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const PrimaryLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '4rem',
  backgroundColor: theme.palette.text.primary,
  borderRadius: '1.2rem',
  textDecoration: 'none',
  padding: '5rem 4rem',
  transition: '0.3s',
  columnGap: '1rem',
  zIndex: 100,
  color: theme.palette.text.primary,
  '&:hover': {
    boxShadow: '0 0.15rem 0.3rem 0 rgb(0 0 0 / 20%)',
    backgroundColor: darken(theme.palette.text.secondary, 0.1),
  },
  '& *': {
    zIndex: 100,
  }
}));
