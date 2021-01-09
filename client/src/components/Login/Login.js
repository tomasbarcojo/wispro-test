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

  return (
    <div className='OuterContainerLogin'>
      <div className='InnerContainerLogin'>
          <CssBaseline />
          <div className='loginPaper'>
            <img className='WisproLogo' src={WisproLogo} alt='Wispro Logo'/>
            <Typography component="h1" variant="h5">
              Inicio de sesion
            </Typography>
            <form className={classes.form} noValidate>
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
              />
              <Link to='/users'>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Ingresar
                </Button>
              </Link>

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
