import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';

export default function ActionCard({ item, onClick, selected }) {
  return (
    <>
    <Card sx={{ maxWidth: 325, m: 2, border: "1px solid #1976D2", height: 175,  backgroundColor: selected ? '#1976D2' : 'white'}} variant="outlined" onClick={() => onClick(item)}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.primary" fontWeight="bold">
            {item.description}
          </Typography>
          <br></br>
          ${item.qty * item.unit} CAD + HST
        </CardContent>
      </CardActionArea>
    </Card>
  </>
  );
}
