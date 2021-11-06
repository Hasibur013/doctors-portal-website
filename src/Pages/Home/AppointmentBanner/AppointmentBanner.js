import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Container, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: '#34495e',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150,
    marginBottom: 50
}
const AppointmentBanner = () => {
    return (
        <Container>
            <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <img
                            style={{ width: 500, marginTop: -150 }}
                            src={doctor} alt='' />
                    </Grid>
                    <Grid item xs={12} md={7}  sx={{ display: 'flex',justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left',  }}>
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 4, color: '#e67e22' }} component="div">
                                APPOINTMENT
                            </Typography>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 2, mb: 4 }} component="div" style={{color: 'white'}} >
                                Make an Appointment Today
                            </Typography>
                            <Typography sx={{ mt: 2, mb: 4 }} component="div" color="text.secondary" style={{color: 'white'}} >
                                It is a long established fact that a reader will be distractedby the readable content of apage when looking at is.
                            </Typography>
                            <Button variant="contained" sx={{ mt: 4, mb: 3, fontSize: 12, px: 3, py: 1 }}>Learn more</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AppointmentBanner;