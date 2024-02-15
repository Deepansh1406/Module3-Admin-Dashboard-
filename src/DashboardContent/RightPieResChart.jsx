import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';
import { CardHeader } from "@mui/material";
import { Card } from '@mui/material';
import Divider from '@mui/material/Divider';

const data = [
  { name: 'Active', value: 550 },
  { name: 'Hold', value: 350 },
  { name: 'Closed', value: 300 },

];

const RightPieResChart = () => {
    return (

        <Card className="mt-2 rounded-lg overflow-hidden"  >
        <CardHeader title="ANALYTICS AUDIENCE MATRICS"     sx={{bgcolor:"#f2f2f2" }} />
        
        <Divider light />
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie dataKey="value" data={data} fill="#8884d8" label />
            </PieChart>
          </ResponsiveContainer>
        </div>
        </Card>
      );
}

export default RightPieResChart