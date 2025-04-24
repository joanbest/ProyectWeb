import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid } from '@mui/material';
import './DatosPersonales.css';
import avatar1 from '../../img/Sebastian.png'; 
import avatar2 from '../../img/Juan.png';

const DatosPersonales = () => {
  return (
    <div className="container">
      
      <Card
        sx={{
          maxWidth: { xs: 400, sm: 400 }, 
          maxHeight: { xs: 400, sm: 700 },
          padding: '20px',
          margin: 'auto auto',
          boxShadow: 3,
          background: 'linear-gradient(90deg, #eedc3c,rgb(204, 47, 19))',
          color: '#fff',
        }}
      >
        <Grid container spacing={2} alignItems="center" justifyContent="center" >
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center', 
              
            }}
          >
            <Avatar
              alt="Sebastian Pastrana"
              src={avatar1}
              sx={{
                width: { xs: 150, sm: 200, md: 250 }, 
                height: { xs: 150, sm: 200, md: 250 },
                border:'1px solid #fff', 
              }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                <b>Joan Sebastian Pastrana Mora</b>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <b>Edad:</b> 25 años
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <b>Email:</b> js.pastrana001@gmail.com
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <b>Teléfono:</b> 3214941898
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      
      <Card
        sx={{
          maxWidth: { xs: 400, sm: 400 }, 
          maxHeight: { xs: 400, sm: 700 },
          padding: '20px',
          margin: 'auto auto',
          boxShadow: 3,
          background: 'linear-gradient(90deg, #eedc3c,rgb(204, 47, 19))',
          color: '#fff',
        }}
      >
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar
              alt="Juan Carlos Quesada Ome"
              src={avatar2}
              sx={{
                width: { xs: 150, sm: 200, md: 250 },
                height: { xs: 150, sm: 200, md: 250 },
                border:'1px solid #fff', 
              }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                <b>Juan Carlos Quesada Ome</b>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <b>Edad:</b> 21
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <b>Email:</b> ju.quesada@udla.edu.co
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <b>Teléfono:</b> 311 8260008
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default DatosPersonales;