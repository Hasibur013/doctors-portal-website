import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import flouride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Typography from '@mui/material/Typography';

const services = [
    {
        name: 'Flouride Treatment',
        description: 'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities.',
        img: flouride
    },
    {
        name: 'Cavity Filling',
        description: 'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities.',
        img: whitening
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 2, color: 'info.main' }} component="div">
                    OUR SERVICES
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold', mt:2, mb:4 }} component="div">
                     Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/* {services.map((service, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <Service
                            service={service}
                            ></Service>
                        </Grid>
                    ))} */}

                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }


                </Grid>
            </Container>
        </Box>
    );
};

export default Services;