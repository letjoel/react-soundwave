import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Grid,
  Box,
} from "@mui/material";
import React from "react";

function Form() {
  return (
    <Box
      component="form"
      sx={{
        width: 400,
        height: 300,
        backgroundColor: "secondary.main",
        borderRadius: 2,
        padding: 5,
      }}
    >
      <Grid container>
        <Grid xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="name">Name:</InputLabel>
            <Input id="name" type="text" />
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="email">Email:</InputLabel>
            <Input id="email" type="email" />
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="pwd">Password:</InputLabel>
            <Input id="pwd" type="password" />
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <Button variant="contained" color="primary">
            Join now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Form;
