import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Copyright from '../../utils/Copyright'
import TableUsers from './TableUsers'
import Chart from '../Chart/Chart'
import Divider from '@material-ui/core/Divider';
import NavBar from '../NavBar/NavBar'
import GenerateUsers from '../GenerateUsers/GenerateUsers'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const footers = [
  {
    title: 'Compania',
    description: ['Equipo', 'Historia', 'Contactanos', 'Ubicaciones'],
  },
  {
    title: 'Caracteristicas',
    description: ['Cosas interesantes', 'Caracteristica 2', 'Caracteristicas del equipo', 'Desarrolladores', 'Otros'],
  },
  {
    title: 'Recursos',
    description: ['Recurso', 'Recurso 2', 'Otro recurso', 'Recurso final'],
  },
  {
    title: 'Legal',
    description: ['Politica de privacidad', 'Terminos de uso'],
  },
];

export default function UsersManagment() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      
      <NavBar />

      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
          Gestion de usuarios
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <TableUsers />
      </Container>

      <div className='Divider'>
        <Divider variant="middle" />
      </div>

      <div className='Chart'>
        <Chart />
      </div>

      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright /> <GenerateUsers />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
