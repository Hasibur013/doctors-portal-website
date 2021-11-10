import { Alert, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import login from '../../../../images/login.png';
import useAuth from '../../../../hooks/useAuth';

const Registration = () => {

    const [loginData, setLoginData] = useState({})
    const {user, userRegister, isLoading,authError}= useAuth()
    const history=useHistory()

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Password does not match, Please try again')
            return
        }
        userRegister(loginData.email,loginData.password,loginData.name,history)
        e.preventDefault()
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
        // console.log(newLoginData);
    }
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ my: 6 }} variant="h3" gutterBottom>
                            Register New User
                        </Typography>

                        <Paper elevation={3}>
                        {!isLoading && 
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', my: 2 }}
                                id="standard-basic"
                                label="Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <br />
                            <TextField
                                sx={{ width: '75%' }}
                                type="number"
                                id="standard-basic"
                                label="Your Number"
                                name="number"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%' }}
                                type="email"
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', my: 2 }}
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', mb: 2 }}
                                id="standard-password-input"
                                label="Confirm Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <Button type="submit" sx={{ width: '75%' }} variant="contained">Register</Button>
                            <br />
                            <br />
                            <NavLink to="/login" style={{ textDecoration: 'none' }}>
                                <Button variant="text">Already User ? please Login</Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Register Successfully — check it out!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                        </Paper>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt='' />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Registration;