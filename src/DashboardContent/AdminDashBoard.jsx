import React from "react";
import Grid from "@mui/material/Grid";
import Achievements from "./Achievements";

import A2chievements from "./A2chievements";
import A3chievements from "./A3chievements";
import A4chievements from "./A4chievements";
import CustomBarChart from "./CustomBarChart";
import RightPieResChart from "./RightPieResChart";
import RightDownAreaRes from "./RightDownAreaRes";

const AdminDashBoard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={2}>
        <Grid container item xs={12} md={8} spacing={2}>
          <Grid item xs={12} md={6} className="rounded-lg overflow-hidden">
            <Achievements />
          </Grid>

          <Grid item xs={12} md={6} className="rounded-lg overflow-hidden">
            <A2chievements />
          </Grid>

          <Grid item xs={12} md={6} className="rounded-lg overflow-hidden">
            <A3chievements />
          </Grid>
          <Grid item xs={12} md={6} className="rounded-lg overflow-hidden">
            <A4chievements />
          </Grid>
        </Grid>

        <Grid item xs={12} md={4} className="rounded-lg overflow-hidden">
          <RightPieResChart />
        </Grid>

        <Grid item xs={12} md={8} style={{ height: "100%" }}>
          <CustomBarChart />
        </Grid>

        <Grid item xs={12} md={4} className="rounded-lg overflow-hidden">
          <RightDownAreaRes />
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDashBoard;
