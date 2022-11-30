import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { CardMedia } from '@mui/material';

export default function PixelInset() {
  let items = [
    {
      img: 'https://picsum.photos/200',
    },
    {
      img: 'https://picsum.photos/200',
    }
  ]

  return(
    <Carousel
      sx={{ width: '100%' }}
      height={40}
      navButtonsAlwaysInvisible
      autoPlay
      animation="slide"
      indicators={false}
    >
      {
        items.map( (item, i) => <CardMedia sx={{width: '100%', height: '100%'}} image={item.img} /> )
      }
    </Carousel>
  )
}
