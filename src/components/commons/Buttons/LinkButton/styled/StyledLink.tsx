import { darken, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '4rem',
  backgroundColor: theme.palette.primary.light,
  borderRadius: '1.2rem',
  textDecoration: 'none',
  padding: '0 2rem',
  transition: '0.3s',
  columnGap: '1rem',
  color: theme.palette.text.primary,
  '&:hover': {
    boxShadow: '0 0.15rem 0.3rem 0 rgb(0 0 0 / 20%)',
    backgroundColor: darken(theme.palette.primary.main, 0.3),
  },
}));

export default StyledLink;
