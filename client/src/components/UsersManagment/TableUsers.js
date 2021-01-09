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

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'email@email.com', 1324171354, 3287263),
  createData('China', 'email@email.com', 1403500365, 9596961),
  createData('Italy', 'email@email.com', 60483973, 301340),
  createData('United States', 'email@email.com', 327167434, 9833520),
  createData('Canada', 'email@email.com', 37602103, 9984670),
  createData('Australia', 'email@email.com', 25475400, 7692024),
  createData('Germany', 'email@email.com', 83019200, 357578),
  createData('Ireland', 'email@email.com', 4857000, 70273),
  createData('Mexico', 'email@email.com', 126577691, 1972550),
  createData('Japan', 'email@email.com', 126317000, 377973),
  createData('France', 'email@email.com', 67022000, 640679),
  createData('United Kingdom', 'email@email.com', 67545757, 242495),
  createData('Russia', 'email@email.com', 146793744, 17098246),
  createData('Nigeria', 'email@email.com', 200962417, 923768),
  createData('Brazil', 'email@email.com', 210147125, 8515767),
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
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
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