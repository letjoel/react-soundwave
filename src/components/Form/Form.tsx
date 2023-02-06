import { InputLabel, Button, Grid, Box, Container } from "@mui/material";
import { FormTextInput } from "../FormTextInput/FormTextInput";

function Form() {
  return (
    <Box
      component="form"
      sx={{
        width: 450,
        height: 400,
        backgroundColor: "secondary.main",
        borderRadius: 4,
        padding: 4,
      }}
    >
      <Container>
        <Grid container>
          <Grid xs={12}>
            <InputLabel shrink htmlFor="name-input">
              Name:
            </InputLabel>
            <FormTextInput type="text" id="name-input" />
          </Grid>
          <Grid xs={12}>
            <InputLabel shrink htmlFor="email-input">
              Email:
            </InputLabel>
            <FormTextInput type="email" id="email-input" />
          </Grid>
          <Grid xs={12}>
            <InputLabel sx={{ mb: 0 }} shrink htmlFor="pass-input">
              Password:
            </InputLabel>
            <FormTextInput type="password" id="pass-input" />
          </Grid>
          <Grid xs={12}>
            <Button fullWidth type="submit" variant="contained" color="primary">
              Join now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Form;
