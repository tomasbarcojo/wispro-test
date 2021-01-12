import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useState, useEffect } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import { Tooltip } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
// import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function TableUsers() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/users/`)
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      })
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table size="small" stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Opciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) =>
              <>
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  <TableCell>{row.firstName} {row.lastName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell padding='none'>
                    <Link to={`/edituser/${row.id}`}>
                      <IconButton>
                        <Tooltip title='Editar producto'>
                          <EditIcon fontSize='small' />
                        </Tooltip>
                      </IconButton>
                    </Link>
                  </TableCell>
                </TableRow>
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage='Filas por pagina:'
        nextIconButtonText='Pagina siguiente'
        backIconButtonText='Pagina previa'
        labelDisplayedRows={(from = page) => (`${from.from}-${from.to === -1 ? from.count : from.to} de ${from.count}`)}
      />
    </Paper>
  );
}