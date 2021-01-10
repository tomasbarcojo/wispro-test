import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useState } from 'react'
import EditIcon from './EditButton'
import DeleteIcon from './DeleteButton'

const users = [
    {
        firstName: 'Tomas',
        lastName: 'Barcojo',
        email: 'tomasbarcojo@gmail.com'
    },
    {
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },
    {
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },
    {
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },
    {
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },
    {
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },
    {
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },
    {
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },
    {
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },{
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },{
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },{
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },{
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },{
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },{
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },{
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },{
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },{
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },{
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },{
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },{
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },{
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },{
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },{
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },{
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },{
      firstName: 'Juan',
      lastName: 'Galoppo',
      email: 'juangaloppo@gmail.com'
    },
//     {
//       firstName: 'Tomas',
//       lastName: 'Barcojo',
//       email: 'tomasbarcojo@gmail.com'
//   },
//   {
//     firstName: 'Tomas',
//     lastName: 'Barcojo',
//     email: 'tomasbarcojo@gmail.com'
// },
// {
//   firstName: 'Tomas',
//   lastName: 'Barcojo',
//   email: 'tomasbarcojo@gmail.com'
// },
]

function createData(name, email) {
  return { name, email };
}

const rows = [
  createData('India', 'email@email.com'),
  {
    name: 'Indiaaa',
    email: 'a@a.com'
  },
  createData('China', 'email@email.com'),
  createData('Italy', 'email@email.com'),
  createData('United States', 'email@email.com'),
  // createData('Canada', 'email@email.com'),
  // createData('Australia', 'email@email.com'),
  // createData('Germany', 'email@email.com'),
  // createData('Ireland', 'email@email.com'),
  // createData('Mexico', 'email@email.com'),
  // createData('Japan', 'email@email.com'),
  // createData('France', 'email@email.com'),
  // createData('United Kingdom', 'email@email.com'),
  // createData('Russia', 'email@email.com'),
  // createData('Nigeria', 'email@email.com'),
  // createData('Brazil', 'email@email.com'),
];

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
                  <TableCell padding='none'><EditIcon /></TableCell>
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
        labelDisplayedRows={ (from=page) => (`${from.from}-${from.to === -1 ? from.count : from.to} de ${from.count}`)}
      />
    </Paper>
  );
}