'use client'
import React, { useState } from 'react'
import { Button, Card, CardActions, CardContent, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

export default function Login() {
  const [error, setError] = useState(null);
  const [openTost, setOpenTost] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    ConfirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formOutput = new FormData(e.currentTarget);
    const confirmPassword = formOutput.get('confirm-password')
    const formData = {
      email: formOutput.get('email'),
      password: formOutput.get('password')
    }
    if(formData.password !== confirmPassword) {
      setOpenTost(true);
      setError("Sifra se ne podudara");
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      };

      const { data } = await axios.post('https://math-server.matematickirecnik.rs/users/create', formData, config);
      localStorage.setItem('admin_info', JSON.stringify(data));
      const storageToObj = JSON.parse(localStorage.getItem("admin_info"));
      if(storageToObj._id !== data._id) return;
      setStatus(storageToObj._id === data._id);
      setOpenTost(false)
      setErrors({
        name: '',
        email: '',
        password: '',
        ConfirmPassword: '',
      });

    } catch (error) {
      setError(error ? `${error}` : 'something is wrong');
      setOpenTost(true);
    }
  }; 

  // const handleChange = (prop) => (event) => {
  //   setInputs({ ...inputs, [prop]: event.target.value });
  // };

  const handleClickShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <Card sx={{
      flexGrow: 1,
      width: 'calc(100% - 16px)',
      margin: '8px'
    }}>
      <CardContent>
        <Paper elevation={0} sx={{
          textAlign: 'left',
          color: 'white',
          padding: 2,
          textAlign: 'center',
        }}>
          <Typography variant="h5" color="textSecondary" component="h2" gutterBottom>
            Пријавите се
          </Typography>
          <Typography variant="caption" component="p" color="textSecondary">
            Пријавите се у контролни панел математички речник
          </Typography>
        </Paper>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">         
          <Paper elevation={0} sx={{
            textAlign: 'left',
            color: 'secondary',
            padding: 2,
            textAlign: 'center',
          }}>
            <FormControl htmlFor="email" fullWidth variant="outlined">
              <TextField
                name='email'
                id="email"
                label="Имејл Адреса"
                type="email"
                autoComplete="current-email"
                variant="outlined"
              />     
              <FormHelperText id="my-email-text">никад нећемо делити ваш имејл.</FormHelperText>        
            </FormControl>      
          </Paper>             
          <Paper elevation={0} sx={{
            textAlign: 'left',
            color: 'white',
            padding: 2,
            textAlign: 'center',
          }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="password">Шифра</InputLabel>
                <OutlinedInput
                name='password'
                id="password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
              }
              labelWidth={70}
              />
              <FormHelperText id="my-password-text">никад нећемо делити вашу шифру.</FormHelperText>
            </FormControl>            
          </Paper>
          <Paper elevation={0} sx={{
            textAlign: 'left',
            color: 'white',
            padding: 2,
            textAlign: 'center',
          }}>
            <Button type="submit" color="primary" variant="contained" fullWidth>Креирај</Button>
          </Paper>
        </form>
      </CardContent>
      <CardActions>
        <Link href="/signin" passHref>
          <Button sx={{textTransform: 'lowercase'}} size="small">Креирај нови налог</Button>
        </Link>
      </CardActions>
    </Card>
  )
}