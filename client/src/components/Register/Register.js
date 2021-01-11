import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../../utils/Copyrigth'
import WisproLogo from '../../images/wisprologohoriz.png'
import { useState } from 'react'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    color: 'red',
  }
}));

export default function Register() {
  const classes = useStyles();
  const history = useHistory()
  const [errors, setErrors] = useState({})
  const [showErrors, setShowErrors] = useState(false)
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const [confirmPassword, setconfirmPassword] = useState('')

  function validate(data) {
    let errors = {};
    if (!data.firstName  || data.firstName.length === 0) {
      errors.firstName = 'El nombre es requerido';
    }

    if (!data.lastName || data.lastName.length === 0) {
      errors.lastName = 'El apellido es requerido';
    }

    if (!data.email  || data.email.length === 0) {
      errors.email = 'Email requerido';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email invalido';
    }
    
    if (!data.password  || data.password.length === 0) {
      errors.password = 'Contraseña requerida';
    } else if (!/(?=.*[0-9])/.test(data.password)) {
      errors.password = 'Contraseña invalida';
    } else if(data.password.length < 8){
      errors.password = 'La contraseña debe tener 8 o más caracteres'
    }
    return errors
  }

  const handleChange = (event) => {
    setData({...data, [event.target.name]: event.target.value})
    setErrors(validate({ ...data, [event.target.name]: event.target.value }))
  }

  const handleSubmit = function (e) {
    e.preventDefault()
    setShowErrors(true)
    if (Object.keys(errors).length === 0) {
      fetch('http://localhost:3001/users/createUser', {
        method: 'POST',
        // credentials: 'include',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
		})
      history.push('/')
    }
  }

  return (
    <div className='OuterContainerRegister'>
      <div className='InnerContainerRegister'>
        <CssBaseline />
        <div className='loginPaper'>
          <img className='WisproLogo' src={WisproLogo} alt='Wispro Logo'/>
          <Typography component="h1" variant="h5">
            Registro
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                  onChange={handleChange}
                  value={data.firstName}
                  />
                  {showErrors && errors.firstName && (<p className={classes.error}>{errors.firstName}</p>)}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="lname"
                  onChange={handleChange}
                  value={data.lastName}
                />
              {showErrors && errors.lastName && (<p className={classes.error}>{errors.lastName}</p>)}
              </Grid>
              <Grid item xs={12}> 
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                  value={data.email}
                />
              {showErrors && errors.email && (<p className={classes.error}>{errors.email}</p>)}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  value={data.password}
                />
              {showErrors && errors.password && (<p className={classes.error}>{errors.password}</p>)}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="passwordconfirm"
                  label="Confirmacion de contraseña"
                  type="password"
                  id="passwordconfirm"
                  autoComplete="current-password"
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  value={confirmPassword}
                />

              {confirmPassword !== data.password ? (<p className={classes.error}>No coinciden las contraseñas</p>) : null}
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Registrarse
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/">
                  ¿Ya tienes una cuenta?
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </div>
    </div>
  );
}