import { createTheme } from '@mui/material';
import SairaCondensed from './fonts/SairaCondensed/SairaCondensed-ExtraLight.woff2';
import GloriaHallelujah from './fonts/GloriaHallelujah/GloriaHallelujah-Regular.woff2';
import SyneMono from './fonts/SyneMono/SyneMono-Regular.woff2';
import { colors } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      light: colors.MISTY_BLUE,
      main: colors.MISTY_DARK,
    },
    text: {
      primary: colors.MISTY_FONT,
    },
    background: {
      paper: colors.BLUE_GRAY,
    },
  },
  typography: {
    h1: {
      fontFamily: 'GloriaHallelujah',
      fontSize: '2.2rem',
      lineHeight: '3.2rem',
    },
    h2: {
      fontFamily: 'SyneMono',
      fontSize: '1.6rem',
      lineHeight: '2rem',
    },
    h5: {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '2rem',
      lineHeight: '3.2rem',
    },
    h6: {
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
    },
    subtitle1: {
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '1.6rem',
      lineHeight: '2.2rem',
    },
    body1: {
      fontFamily: 'SairaCondensed',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '1.4rem',
      lineHeight: '2rem',
    },
    body2: {
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
    },
    button: {
      fontFamily: 'SairaCondensed',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '1.4rem',
      lineHeight: '2rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'SairaCondensedExtraLight';
          font-style: normal;
          font-display: swap;
          font-weight: normal;
          src: local('SairaCondensedExtraLight'), local('SairaCondensedExtraLight'), url(${SairaCondensed}) format('woff2');
        }   
        @font-face {
          font-family: 'GloriaHallelujah';
          font-style: normal;
          font-display: swap;
          font-weight: normal;
          src: local('GloriaHallelujah'), local('GloriaHallelujah'), url(${GloriaHallelujah}) format('woff2');
        }    
        @font-face {
          font-family: 'SyneMono';
          font-style: normal;
          font-display: swap;
          font-weight: normal;
          src: local('SyneMono'), local('SyneMono'), url(${SyneMono}) format('woff2');
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: '4rem',
          borderRadius: '1.2rem',
          textTransform: 'none',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: '4.8rem',
          borderRadius: '1.2rem',
        },
        notchedOutline: {
          borderColor: colors.MISTY_BLUE,
        },
        input: {
          height: '1.44rem',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '1.6rem',
          lineHeight: '2.4rem',
          color: colors.MISTY_FONT,
          top: '-0.4rem',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '1.6rem',
          lineHeight: '2.4rem',
          color: colors.MISTY_FONT,
          '&:hover': {
            backgroundColor: colors.BLUE_GRAY,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          minHeight: '8rem',
          justifyContent: 'center',
          backgroundColor: colors.WHITE,
          boxShadow: 'none',
          borderBottom: `0.1rem solid ${colors.MISTY_DARK}`,
          color: 'inherit',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          justifyContent: 'space-between',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'separate',
          borderSpacing: '0 0.4rem',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        body: {
          borderBottom: `0.1rem solid ${colors.MISTY_DARK}`,
          borderTop: `0.1rem solid ${colors.MISTY_DARK}`,
          background: colors.WHITE,
          '&:first-of-type': {
            borderLeft: `0.1rem solid ${colors.MISTY_DARK}`,
            borderTopLeftRadius: '1.2rem',
            borderBottomLeftRadius: '1.2rem',
          },
          '&:last-of-type': {
            borderRight: `0.1rem solid ${colors.MISTY_DARK}`,
            borderTopRightRadius: '1.2rem',
            borderBottomRightRadius: '1.2rem',
          },
        },
        head: {
          borderBottom: 'none',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '1.2rem',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        rounded: {
          borderRadius: '0.8rem',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          height: '0.8rem',
          '& span': {
            maxWidth: '1.6rem',
            width: '100%',
            backgroundColor: colors.BLUE_GRAY,
            borderTopLeftRadius: '0.8rem',
            borderTopRightRadius: '0.8rem',
          },
        },
      },
    },
  },
});

export default theme;
