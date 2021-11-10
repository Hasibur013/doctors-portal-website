import * as React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Calendar from '../../Home/Shared/Calendar/Calendar';
import AppointmentList from '../AppointmentList/AppointmentList';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Calendar
                        date={date}
                        setDate={setDate}
                    ></Calendar>
                </Grid>
                <Grid item xs={12} md={7}>
                    <AppointmentList
                        date={date}
                    ></AppointmentList>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashboardHome;