import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Bookings = ({ booking,date,setBookingSuccess }) => {
    const { name, time, space,price } = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4} >
                <Paper elevation={3} sx={{ p: 5 }}>
                    <Typography variant="h5" gutterBottom component="div" sx={{ color: 'info.main' }}>
                        {name}
                    </Typography>
                    <Typography gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography sx={{ typography: 'body2' }} gutterBottom component="div">
                        {space} space availabe
                    </Typography>
                    <Typography sx={{ typography: 'h6' }} gutterBottom component="div">
                       Price: ${price}
                    </Typography>
                    <Button onClick={handleOpen} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
            date={date}
            booking={booking}
            open={open}
            handleClose={handleClose}
            setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Bookings;