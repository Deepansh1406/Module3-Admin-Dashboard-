import * as React from "react";
import Grid from "@mui/material/Grid";
import { Link, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import SecurityIcon from "@mui/icons-material/Security";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import TitleOutlinedIcon from "@mui/icons-material/TitleOutlined";
import PhishingOutlinedIcon from "@mui/icons-material/PhishingOutlined";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PieChartIcon from "@mui/icons-material/PieChart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArticleIcon from "@mui/icons-material/Article";
import VisibilityIcon from "@mui/icons-material/Visibility";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
import CustomBarChart from "../../DashboardContent/CustomBarChart";
import RightPieResChart from "../../DashboardContent/RightPieResChart";
import A4chievements from "../../DashboardContent/A4chievements";
import A3chievements from "../../DashboardContent/A3chievements";
import Achievements from "../../DashboardContent/Achievements";
import RightDownAreaRes from "../../DashboardContent/RightDownAreaRes";
import A2chievements from "../../DashboardContent/A2chievements";

const drawerWidth = 240;

function AdminDashboard({ to, icon, text, notifications }) {
  return (
    <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
      <ListItem key={text} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {notifications ? (
              <Badge badgeContent={notifications} color="error">
                {icon}
              </Badge>
            ) : (
              icon
            )}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
}

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    navigate("/");
    handleMenuClose();
  };

  const drawer = (
    <div style={{ width: `${drawerWidth}px` }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
          backgroundColor: "#16383f",
          color: "white",
        }}
      >
        <Avatar onClick={handleMenuOpen}>D</Avatar>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>About</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
        <p>Deepanshu Varshney</p>
      </Box>
      <Divider />

      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
          backgroundColor: "#16383f",
          color: "white",
        }}
      >
        <p>USER INTERFACE</p>
        {[
          {
            text: "Components",
            icon: <BackupTableIcon sx={{ color: "white" }} />,
          },
          {
            text: "Content",
            icon: <TitleOutlinedIcon sx={{ color: "white" }} />,
          },
          {
            text: "Utilities",
            icon: <PhishingOutlinedIcon sx={{ color: "white" }} />,
          },
          {
            text: "Forms",
            icon: <PlaylistAddCheckIcon sx={{ color: "white" }} />,
          },
          {
            text: "Tables",
            icon: <FormatListBulletedIcon sx={{ color: "white" }} />,
          },
          { text: "Charts", icon: <PieChartIcon sx={{ color: "white" }} /> },
          { text: "Maps", icon: <LocationOnIcon sx={{ color: "white" }} /> },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
          backgroundColor: "#16383f",
          color: "white",
        }}
      >
        <p>GETTING STARTED</p>
        {[
          {
            text: "Documentation",
            icon: <ArticleIcon sx={{ color: "white" }} />,
          },
          {
            text: "Changelog",
            icon: <VisibilityIcon sx={{ color: "white" }} />,
          },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Box
              component="nav"
              sx={{
                width: { sm: drawerWidth },
                flexShrink: { sm: 0 },
                backgroundColor: "black",
                color: "white",
                overflow: "hidden",
              }}
              aria-label="mailbox folders"
            >
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
                sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                {drawer}
              </Drawer>
              <Drawer
                variant="permanent"
                sx={{
                  display: { xs: "none", sm: "block" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
                open
              >
                {drawer}
              </Drawer>
            </Box>
            <Box
              component="main"
              sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${drawerWidth}px)` }}
            >
              <Outlet />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <div style={{ marginTop: "50px", marginLeft: "30px" }}>
            <Grid container spacing={2}>
              <Grid container item xs={12} md={8} spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  className="rounded-lg overflow-hidden"
                >
                  <Achievements />
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  className="rounded-lg overflow-hidden"
                >
                  <A2chievements />
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  className="rounded-lg overflow-hidden"
                >
                  <A3chievements />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  className="rounded-lg overflow-hidden"
                >
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
        </Grid>
      </Grid>
    </>
  );
}

export default ResponsiveDrawer;
