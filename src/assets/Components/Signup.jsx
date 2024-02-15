import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { TextField, Typography } from "@mui/material";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import { Country, State, City } from "country-state-city";
import { useState } from "react";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import { useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState(null);

  const paperStyle = { padding: "20px", width: "500px", margin: "20px auto" };
  const hStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "skyblue" };

  const [value, setValue] = useState(0);
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",

    ConfirmPassword: "",
    Gender: "",

    dob: "",
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(3, "It is too short!!")
      .max(15, "Maximum 15 characters allowed!!")
      .matches(/^(?!.*(\S)\1{2})(?!.*\s)[A-Za-z\s]{1,}$/, "Invalid format")
      .required("Required"),

    lastname: Yup.string()
      .min(3, "It is too short!!")
      .max(15, "Maximum 15 characters allowed!!")
      .matches(/^(?!.*(\S)\1{2})(?!.*\s)[A-Za-z\s]{1,}$/, "Invalid format")
      .required("Required"),

    email: Yup.string().email("Enter Valid Email").required("Required"),

    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Required"),
    ConfirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Required"),
    Gender: Yup.string()
      .oneOf(["male", "female", "other"], "Required")
      .required("Required"),
    address: Yup.string().required("Address is required"),
    dob: Yup.date()
      .max(new Date(), "Date of Birth cannot be in the future")
      .required("Date of Birth is required"),
  });
  const onSubmit = (values, { resetForm, setSubmitting }) => {
    console.log(values);
  // Store user data in local storage
  const userData = { ...values, password: values.password };
  localStorage.setItem("userData", JSON.stringify(userData));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Signup Successfully",
      showConfirmButton: false,
      timer: 1500,
    });

    setTimeout(() => {
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  // ------country-state-city-------------

  const countrydata = Country.getAllCountries();
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);

  const [country, setCountry] = useState(countrydata[0]);
  const [selectedState, setSelectedState] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    setStateData(State.getStatesOfCountry(country?.isoCode) || []);
  }, [country]);

  useEffect(() => {
    setCityData(
      City.getCitiesOfState(country?.isoCode, selectedState?.isoCode) || []
    );
  }, [selectedState]);

  useEffect(() => {
    stateData.length && setSelectedState(stateData[0]);
  }, [stateData]);

  useEffect(() => {
    cityData.length && setCity(cityData[0]);
  }, [cityData]);

  return (
    <Grid container>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center" xs={12}>
          <Avatar style={avatarStyle}>
            <AddCircleOutlinedIcon />
          </Avatar>
          <h2 style={hStyle}>SignUp</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account{" "}
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Grid spacing={2} container item xs={12}>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    style={{ marginBottom: "8px", marginTop: "5px" }}
                    fullWidth
                    name="firstname"
                    label="First name"
                    placeholder="Enter your firstname"
                    helperText={<ErrorMessage name="firstname" />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    style={{ marginBottom: "8px", marginTop: "5px" }}
                    fullWidth
                    name="lastname"
                    label="Last name"
                    placeholder="Enter your lastname"
                    helperText={<ErrorMessage name="lastname" />}
                  />
                </Grid>
              </Grid>
              <Grid spacing={2} container item xs={12}>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    style={{ marginBottom: "8px" }}
                    name="email"
                    fullWidth
                    label="Email"
                    placeholder="Enter your email"
                    helperText={<ErrorMessage name="email" />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <PhoneInput
                    required
                    name="phone"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                    style={{
                      width: "100%",
                      padding: "8px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      boxSizing: "border-box",
                      height: "55px", // Adjust the height to match other input fields
                      // Add anyother styles you want to apply
                    }}
                  />
                </Grid>
              </Grid>
              <Grid spacing={2} container item xs={12}>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    style={{ marginBottom: "8px", marginTop: "5px" }}
                    fullWidth
                    name="dob"
                    label="Date of Birth"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    helperText={<ErrorMessage name="dob" />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    style={{ marginBottom: "8px", marginTop: "5px" }}
                    fullWidth
                    name="address"
                    label="Address Line1"
                    placeholder="Enter address"
                    helperText={<ErrorMessage name="address" />}
                  />
                </Grid>
              </Grid>

              <Grid spacing={2} container item xs={12}>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    style={{ marginBottom: "8px" }}
                    name="password"
                    type="password"
                    fullWidth
                    label="Password"
                    placeholder="Enter password"
                    helperText={<ErrorMessage name="password" />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    style={{ marginBottom: "8px" }}
                    name="ConfirmPassword"
                    type="password"
                    fullWidth
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    helperText={<ErrorMessage name="ConfirmPassword" />}
                  />
                </Grid>
              </Grid>

              <FormControl style={{ margin: 5 }}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <Field
                  as={RadioGroup}
                  style={{ display: "initial" }}
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="Gender"
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </Field>
              </FormControl>
              <FormHelperText>
                <ErrorMessage name="Gender" />
              </FormHelperText>

              <Grid spacing={2} container item xs={12}>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Field as={Checkbox} name="termsnConditions" required />
                    }
                    label="I Accept the term & Conditions"
                  />

                  <FormHelperText>
                    <ErrorMessage name="termsnConditions" />
                  </FormHelperText>
                </Grid>
              </Grid>

              <Button
                type="submit"
                variant="contained"
                disabled={props.isSubmitting}
                color="primary"
                style={{ display: "block", margin: "auto" }}
                fullWidth
              >
                {props.isSubmitting ? "Loading" : "Signup"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default SignUp;
