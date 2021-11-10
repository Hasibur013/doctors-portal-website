import { Alert, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
    const { user, userSignIn, authError, isLoading, signInWithGoogle } = useAuth()
    const [loginData, setLoginData] = useState({})
    const location = useLocation()
    const history = useHistory()

    const handleLoginSubmit = e => {
        // alert('Login Completed')
        userSignIn(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
        console.log(newLoginData);
    }

    const handleGoogleSignIn=()=>{
        signInWithGoogle(location,history)
    }

    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ my: 6 }} variant="h3" gutterBottom>
                            Login
                        </Typography>
                        <Paper elevation={3}>
                            {!isLoading &&
                                <form onSubmit={handleLoginSubmit}>
                                    <TextField
                                        sx={{ width: '75%' }}
                                        type="email"
                                        id="standard-basic"
                                        label="Your Email"
                                        name="email"
                                        onChange={handleOnChange}
                                        variant="standard" />
                                    <TextField
                                        sx={{ width: '75%', my: 2 }}
                                        id="standard-password-input"
                                        label="Password"
                                        type="password"
                                        name="password"
                                        onChange={handleOnChange}
                                        autoComplete="current-password"
                                        variant="standard"
                                    />
                                    <Button type="submit" sx={{ width: '75%' }} variant="contained">Login</Button>
                                    <br />
                                    <br />
                                    <NavLink to="/registration" style={{ textDecoration: 'none' }}>
                                        <Button variant="text">New User ? please register</Button>
                                    </NavLink>
                                </form>}
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login Successfully — check it out!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}

                            <p>----------------- OR --------------------</p>                               
                                <Button onClick={handleGoogleSignIn} variant="contained">Login with google</Button>
                                <br/>
                                <br/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt='' />
                    </Grid>
                </Grid>
            </Box>
        </Container >
    );
};

export default Login;