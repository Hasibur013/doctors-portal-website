import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const bannerBg={
    background: `url(${bg})`,
}
const verticalCenter={
    display: 'flex',
    height: 450,
    alignItems: 'center'
}


const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={bannerBg}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ ...verticalCenter, textAlign: 'left' }}>
                        <Box>
                            <Typography variant="h3" component="div">
                                Your New Smile <br /> Start Here
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ my: 3 }}>
                                It is a long established fact that a reader will be distractedby the readable content of apage when looking at is. It is a long established fact that a reader will be distractedby the readable content of apage when looking at is.
                            </Typography>
                            <Button variant="contained" sx={{ fontSize: 12, px: 3, py: 1 }}>Get APPOINTMENT</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <img style={{width: 500}} src={chair} alt='' />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;