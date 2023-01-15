import React from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import userService from "../Services/userService";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = (props) => {
  let navigate = useNavigate();
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h4>Registration</h4>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <TextField
            label="First Name"
            margin="normal"
            fullWidth
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
          <TextField
            label="Last Name"
            margin="normal"
            fullWidth
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
          <TextField
            label="Address"
            margin="normal"
            fullWidth
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <TextField
            label="Email"
            margin="normal"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            label="Password"
            type="password"
            margin="normal"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              userService
                .register(firstname, lastname, address, email, password)
                .then((data) => {
                  console.log(data);
                  navigate("/ailurophile-gallery/login", { replace: true });
                  window.location.reload();
                })
                .catch((err) => {
                  toast.error(err.response.data, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                  });
                });
            }}
          >
            Register
          </Button>
          <Typography sx={{ m: 1.0 }} align="center">
            Already Registered?
            <Link to="/ailurophile-gallery/login"> Login</Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
