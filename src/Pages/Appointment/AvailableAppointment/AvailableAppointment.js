import { Alert, Container, Grid, Typography } from '@mui/material';
import React,{useState} from 'react';
import Bookings from '../Bookings/Bookings';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8:00 am to 10:00 am',
        price:100,
        space: 5
    },
    {
        id: 2,
        name: 'Cosmetic Dentestry',
        time: '10:00 am to 12:00 pm',
        price:50,
        space: 5
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '1:00 pm to 3:00 pm',
        price:150,
        space: 5
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '3:00 pm to 5:00 pm',
        price:500,
        space: 5
    },
    {
        id: 5,
        name: 'Teeth Orthodontics',
        time: '6:00 pm to 8:00 pm',
        price:300,
        space: 5
    },
    {
        id: 6,
        name: 'Teeth Orthodontics',
        time: '8:00 pm to 10:00 pm',
        price:200,
        space: 5
    },
]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess,setBookingSuccess]=useState(false)
    return (
        <Container>
            <Typography variant="h4" gutterBottom component="div" sx={{ color: 'info.main', py:5 }}>
            Availabe appointment on {date.toDateString()}
            {bookingSuccess && <Alert severity="success">Appointment Successfully done — check it out!</Alert>}
            </Typography>
            <Grid container spacing={2} sx={{mb:5}}>
                {
                    bookings.map(booking => <Bookings
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    >

                    </Bookings>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;