import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    margin: {
      marginRight: theme.spacing(3),
    },
  }));

export default function EditUser({ id, firstName, lastName, email }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles()
  const [data, setData] = useState({
      firstName: '',
      lastName: '',
      email: '',
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseAccept = () => {
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
            setOpen(false);
            // window.open('/users', '_self')
        }
        else {
            alert('Ocurrio un error')
        }
    })
  };

  const handleCloseCancel = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setData({...data, [event.target.id]: event.target.value})
  }

  const handleDelete = () => {
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
            setOpen(false)
        }
    })
  }

  return (
    <div>
        <Tooltip title='Editar usuario'>
            <button onClick={handleClickOpen}>
                <EditIcon fontSize='small'/>
            </button>
        </Tooltip>
      <Dialog open={open} onClose={handleCloseCancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edicion de usuario</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edición del usuario: {firstName} {lastName}
          </DialogContentText>
          <TextField
            autoFocus
            className={classes.margin}
            margin="dense"
            id="firstName"
            label="Nombre"
            type="text"
            defaultValue={firstName}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="lastName"
            label="Apellido"
            type="text"
            defaultValue={lastName}
            onChange={handleChange}
          />
          <TextField
            disabled
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            defaultValue={email}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete} color="primary">
            Eliminar usuario
          </Button>
          <Button onClick={handleCloseCancel} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleCloseAccept} color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
