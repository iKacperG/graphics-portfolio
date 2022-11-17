import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/config/styles/index.css';
import App from './App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './config/material-ui/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
