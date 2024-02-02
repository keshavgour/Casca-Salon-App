import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Grid, Typography } from '@mui/material';

interface CarouselItem {
  name: string;
  description: string;
  discount:string
  validity:string
}



interface CarouselProps {
  items: CarouselItem[];
}

const Carousels: React.FC<CarouselProps> = ({ items }) => {
    
  return (
    <Carousel sx={{backgroundColor:'#ff9800', borderRadius:'30px', width:'850px', height:'200px' }}>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Carousel>
  );
};

interface ItemProps {
  item: CarouselItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const { name, description, discount, validity } = item;

  return (
    <Grid container direction='column' borderRadius={8} width={800} >
        <Grid item>
            <Grid container margin='1rem 0 0 1rem' justifyContent='space-between'>
                <Grid item>
                 <Typography variant="body1" color='white'>{discount} OFF</Typography>
                <Typography variant="h5" color='white'>{name}</Typography>
                </Grid>
                <Grid item>
                <Typography variant='h2' color='white'>{discount}</Typography>
                </Grid>
              </Grid>
        </Grid>
        <Grid item margin='0.5rem 0 1rem 1rem'>
            <Typography variant="body1" color='white'>{description}</Typography>
            <Typography variant="body1" color='white'>{validity}</Typography>
        </Grid>
    </Grid>
  );
};

export default Carousels;


