import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from '../../Home/Shared/Calendar/Calendar';

const AppointmentHeader = ({date,setDate}) => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 , my:5}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Calendar date={date} setDate={setDate}></Calendar>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <img style={{width: '100%'}} src={chair} alt=''/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AppointmentHeader;