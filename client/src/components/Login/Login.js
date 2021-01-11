import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../../utils/Copyrigth'
import WisproLogo from '../../images/wisprologohoriz.png'
import { useHistory } from "react-router-dom";
import { useState } from 'react'
import '../../App.css'

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',  
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    setData({...data, [event.target.name]: event.target.value})
  }

  const handleSubmit = function (e) {
    e.preventDefault()

    if (data.email.length > 0 && data.password.length > 0) {
      fetch('http://localhost:3001/users/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(data => data.json())
      .then(res => {
        if (res.status === 200) {
          history.push('/users')
        }
        else {
          alert('Datos invalidos')
        }
      })
    }
  }

  return (
    <div className='OuterContainerLogin'>
      <div className='InnerContainerLogin'>
          <CssBaseline />
          <div className='loginPaper'>
            <img className='WisproLogo' src={WisproLogo} alt='Wispro Logo'/>
            <Typography component="h1" variant="h5">
              Inicio de sesion
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
              {/* <Link to='/users'> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Ingresar
                </Button>
              {/* </Link> */}

              <div className='optionsLogin'>
                <Link to="/recover">
                  ¿Olvidó su contraseña?
                </Link>

                <Link to="/register">
                  {"¿No tiene una cuenta? Regístrese"}
                </Link>
              </div>
                
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
      </div>
    </div>
  );
}
