import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Bookings = ({ booking }) => {
    const { name, time, space } = booking;
    return (
        <Grid item xs={12} sm={6} md={4} >
            <Paper elevation={3} sx={{p:5}}>
                <Typography variant="h5" gutterBottom component="div" sx={{ color: 'info.main' }}>
                    {name}
                </Typography>
                <Typography  gutterBottom component="div">
                    {time}
                </Typography>
                <Typography sx={{ typography: 'body2' }} gutterBottom component="div">
                    {space } space availabe
                </Typography>
                <Button variant="contained">BOOK APPOINTMENT</Button>
            </Paper>
        </Grid>
    );
};

export default Bookings;