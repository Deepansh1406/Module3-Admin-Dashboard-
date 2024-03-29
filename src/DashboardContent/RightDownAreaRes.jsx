import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CardHeader } from "@mui/material";
import { Card } from '@mui/material';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
const data = [
  {
    name: '1',
    uv: 4000,
    pv: 2400,
    // amt: 2400,
  },
  {
    name: '2',
    uv: 3000,
    pv: 1398,
    // amt: 2210,
  },
  {
    name: '3',
    uv: 2000,
    pv: 9800,
    // amt: 2290,
  },
  {
    name: '4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '7',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const RightDownAreaRes = () => {
    return (

        <Card className="mt-2 rounded-lg overflow-hidden"  >
        <CardHeader title="YOUTUBE SUBSCRIBERS"     sx={{bgcolor:"#f2f2f2"}} />
        
        <Divider light />

        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#3399ff" fill="#ffff00" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        </Card>
        
      );
}

export default RightDownAreaRes