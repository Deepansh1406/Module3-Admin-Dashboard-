import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const paperStyle = { padding: "20px", width: "500px", margin: "20px auto " };
  const avatarStyle = { backgroundColor: "skyblue" };
  const btnStyle = { margin: "8px 0" };

  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Please Enter Valid Email")
      .required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values, actions) => {
    console.log("values", values);
    setLoading(true);
    // Simulating loading for 1 second
    setTimeout(() => {
      setLoading(false);
      const storedUser = JSON.parse(localStorage.getItem("userData"));
      console.log("Stored user", storedUser);
      if (storedUser && values.username === storedUser.email && values.password === storedUser.password) {
        navigate("/dashboard");
      } else {
        alert("Invalid username or password");
      }
    }, 1000);
  };
  

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign in</h2>
        </Grid>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                name="username"
                style={{ marginBottom: "8px" }}
                label="Username"
                placeholder="Enter Username"
                fullWidth
                required
                helperText={<ErrorMessage name="username" />}
              />
              <Field
                as={TextField}
                name="password"
                style={{ marginBottom: "8px" }}
                type="password"
                label="Password"
                placeholder="Enter password"
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
              />

            

              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={props.isSubmitting || loading}
                style={btnStyle}
                fullWidth
              >
                {props.isSubmitting || loading ? "Loading" : "Login"}
              </Button>
            </Form>
          )}
        </Formik>
        <Typography gutterBottom>
          <Link href="#">Forgot password</Link>
        </Typography>
        <Typography gutterBottom>
          Do you have an account
          <Link href="#" style={{ marginLeft: "8px" }}>
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
