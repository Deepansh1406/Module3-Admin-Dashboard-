import { Card } from '@mui/material';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CardHeader } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Divider from '@mui/material/Divider';

const data = [
  {
    name: 'Mon',
    uv: 2400,
    pv: 7000,
    // amt: 2400,
  },
  {
    name: 'Tues',
    uv: 3000,
    pv: 6000,
    // amt: 2210,
  },
  {
    name: 'wed',
    uv: 3500,
    pv: 6500,
    // amt: 3500,
  },
  {
    name: 'Thur',
    uv: 3600,
    pv: 6900,
    // amt: 3600,
  },
  {
    name: 'Fri',
    uv: 1890,
    pv: 4800,
    // amt: 2181,
  },
  {
    name: 'Sat',
    uv: 2390,
    pv: 3800,
    // amt: 2500,
  },
  {
    name: 'Sun',
    uv: 3490,
    pv: 4300,
    // amt: 2100,
  },
];


const CustomBarChart = () => {
    
    return (


        
        
        <>
        <Card className="mt-2"  >
        <CardHeader title="COUNTRY STATS" sx={{bgcolor:"#f2f2f2"}} className='' />
        <Divider dark />
        
        <ResponsiveContainer width="100%" height={400} >
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#3399ff" activeBar={<Rectangle  />} />
            <Bar dataKey="uv" fill=" #ffff00" activeBar={<Rectangle />} />
          </BarChart>
        </ResponsiveContainer>


        <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><b>Country</b></TableCell>
                <TableCell align="left"><b>Sessions</b></TableCell>
                <TableCell align="left"><b>Goals</b></TableCell>
                <TableCell align="left"><b>Goals Rate</b></TableCell>
                <TableCell align="left"><b> Bounce Data</b></TableCell>
            
              </TableRow>
            </TableHead>
            <TableBody>
  <TableRow>
    <TableCell>Canada</TableCell>
    <TableCell align="left">55,555</TableCell>
    <TableCell align="left">210</TableCell>
    <TableCell align="left">2.4%</TableCell>
    <TableCell align="left">0.2%</TableCell>
  </TableRow>
  <TableRow>
    <TableCell>India</TableCell>
    <TableCell align="left">24,152</TableCell>
    <TableCell align="left">135</TableCell>
    <TableCell align="left">0.58%</TableCell>
    <TableCell align="left">0.43%</TableCell>
  </TableRow>
  <TableRow>
    <TableCell>UK</TableCell>
    <TableCell align="left">15,840</TableCell>
    <TableCell align="left">324</TableCell>
    <TableCell align="left">5.15%</TableCell>
    <TableCell align="left">2.47%</TableCell>
  </TableRow>
</TableBody>

            </Table>
        </TableContainer>
        </div>
        </Card>
        </>
      );
}

export default CustomBarChart