import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: '01/01',  log: 4000, pv: 2400, amt: 2400,
  },
  {
    name: '02/01', log: 3000, pv: 1398, amt: 2210,
  },
  {
    name: '03/01', log: 2000, pv: 9800, amt: 2290,
  },
  {
    name: '04/01', log: 2780, pv: 3908, amt: 2000,
  },
  {
    name: '05/01', log: 1890, pv: 4800, amt: 2181,
  },
  {
    name: '06/01', log: 2390, pv: 3800, amt: 2500,
  },
  {
    name: '07/01', log: 3490, pv: 4300, amt: 2100,
  },
];


const getIntroOfPage = (label) => {
  if (label === '01/01') {
    return "Dia 01/01";
  } if (label === '02/01') {
    return "Dia 02/01";
  } if (label === '03/01') {
    return "Dia 03/01";
  } if (label === '04/01') {
    return 'Dia 04/01';
  } if (label === '05/01') {
    return 'Dia 05/01';
  } if (label === '06/01') {
    return 'Dia 06/01';
  } if (label === '07/01') {
    return 'Dia 07/01';
  }
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="label">{`Logueos registrados: ${payload[0].value}`}</p>
        {/* <p className="desc">Anything you want can be displayed here.</p> */}
      </div>
    );
  }

  return null;
};

export default class Example extends PureComponent {

  render() {
    return (
      <BarChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="pv" barSize={50} fill="#8884d8" />
      </BarChart>
    );
  }
}