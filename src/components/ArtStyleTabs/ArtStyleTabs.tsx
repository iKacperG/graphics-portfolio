import React from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab, Typography } from '@mui/material';
import PixelSet from '../Pixel/PixelSet/PixelSet';
import VectorSet from '../Vector/VectorSet/VectorSet';
import DimensionalSet from '../Dimensional/DimensionalSet/DimensionalSet';

export default function ArtStyleTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return(
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label={<Typography variant="body1">Pixel Art</Typography>} value="1" />
          <Tab label={<Typography variant="body1">Vector Art</Typography>} value="2" />
          <Tab label={<Typography variant="body1">3D Art</Typography>} value="3" />
        </TabList>
      </Box>
      <TabPanel sx={{ padding: 0 }} value="1"><PixelSet /></TabPanel>
      <TabPanel sx={{ padding: 0 }} value="2"><VectorSet /></TabPanel>
      <TabPanel sx={{ padding: 0 }} value="3"><DimensionalSet /></TabPanel>
    </TabContext>
  )
}
