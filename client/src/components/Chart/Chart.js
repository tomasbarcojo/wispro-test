import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Typography from '@material-ui/core/Typography';

const data = [
  {
    day: '01/01', Logueos: 2400, Registros: 2400,
  },
  {
    day: '02/01', Logueos: 1398, Registros: 2210,
  },
  {
    day: '03/01', Logueos: 9800, Registros: 2290,
  },
  {
    day: '04/01', Logueos: 3908, Registros: 2000,
  },
  {
    day: '05/01', Logueos: 4800, Registros: 2181,
  },
  {
    day: '06/01', Logueos: 3800, Registros: 2500,
  },
  {
    day: '07/01', Logueos: 4300, Registros: 2100,
  },
  {
    day: '08/01', Logueos: 4300, Registros: 2100,
  },
  {
    day: '09/01', Logueos: 4300, Registros: 2100,
  },
  {
    day: '10/01', Logueos: 4300, Registros: 2100,
  },
  {
    day: '11/01', Logueos: 4300, Registros: 2100,
  },
];


const getIntroOfPage = (label) => {
  for (var i = 1; i < 32; i++) {
    // if (i < 10) {
      if (i < 10 && label === `0${i}/01`) {
        return `Dia 0${i}/01`
      }
      if (i >= 10 && label === `${i}/01`) {
        return `Dia ${i}/01`
      }
    }
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="label">{`Logueos registrados: ${payload[1].value}`}</p>
        <p>{`Nuevos registros: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default class Example extends PureComponent {

  render() {
    return (
      <>
      <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
          Logueos y registros diarios del ultimo mes
      </Typography>
      <BarChart
        width={900}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="Registros" fill="#82ca9d" />
        <Bar dataKey="Logueos" barSize={50} fill="#8884d8" />
      </BarChart>
      </>
    );
  }
}