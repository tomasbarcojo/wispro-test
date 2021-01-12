import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../../utils/Copyrigth'
import { useParams } from 'react-router-dom';

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
}));

export default function EditButton() {
  const classes = useStyles();
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:3001/users/${id}`)
      .then(res => res.json())
      .then(user => {
        setData({
          ...data,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
        })
      })
  }, [])

  const handleChange = (event) => {
    setData({...data, [event.target.name]: event.target.value})
  }

  const handleSave = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3001/users/editUser/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
    })
    .then(data => data.json())
    .then(res => {
        if (res.status === 200) {
            alert('Usuario editado con exito')
            window.open('/users', '_self')
        }
        else {
            alert('Ocurrio un error')
        }
    })
  };

  const handleDelete = (e) => {
    e.preventDefault()
    if (window.confirm('Estas seguro que deseas eliminar este usuario?')) {
      fetch(`http://localhost:3001/users/deleteUser/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
    })
    .then(data => data.json())
    .then(res => {
        if (res.status === 200) {
            alert('Usuario eliminado')
            window.open('/users', '_self')
        }
        else {
          alert('Ocurrio un error')
        }
    })
    }
  }

  return (
    <div>
      <NavBar />

      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Editar usuario
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                variant="outlined"
                // required
                fullWidth
                id="firstName"
                label="Nombre"
                autoFocus
                value={data.firstName}
                onChange={handleChange}
                // value={data.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                // required
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastName"
                autoComplete="lname"
                value={data.lastName}
                onChange={handleChange}
              />
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
                disabled
                value={data.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                disabled
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value='●●●●●●●●●●●●●'
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handleDelete}
          >
            ELIMINAR USUARIO
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSave}
          >
            GUARDAR
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </div>
  )
}
