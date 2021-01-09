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
import EditIcon from '@material-ui/icons/Edit';

const columns = [
  { id: 'name', label: 'Nombre', minWidth: 170 },
  { id: 'code', label: 'Email', minWidth: 100 },
  {
    id: 'density',
    label: 'Opciones',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

const users = [
    {
        firstName: 'Tomas',
        lastName: 'Barcojo',
        email: 'tomasbarcojo@gmail.com'
    },
]

function createData(name, email) {
  return { name, email };
}

const rows = [
  createData('India', 'email@email.com'),
  createData('China', 'email@email.com'),
  createData('Italy', 'email@email.com'),
  createData('United States', 'email@email.com'),
  createData('Canada', 'email@email.com'),
  createData('Australia', 'email@email.com'),
  createData('Germany', 'email@email.com'),
  createData('Ireland', 'email@email.com'),
  createData('Mexico', 'email@email.com'),
  createData('Japan', 'email@email.com'),
  createData('France', 'email@email.com'),
  createData('United Kingdom', 'email@email.com'),
  createData('Russia', 'email@email.com'),
  createData('Nigeria', 'email@email.com'),
  createData('Brazil', 'email@email.com'),
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

  console.log(rows)

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table size="small" stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}   
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id}>
                        {/* {column.format && typeof value === 'number' ? column.format(value) : value} */}
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}