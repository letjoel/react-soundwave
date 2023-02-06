import { Grid, Typography } from "@mui/material";
import Form from "../../components/Form/Form";
import layoutStyles from "../../styles/mainLayout.module.css";
import "./JoinPage.module.css";

function JoinPage() {
  return (
    <>
      <div className={layoutStyles.main}>
        <div className={layoutStyles.mainContainer}>
          <Grid container alignItems="center">
            <Grid
              textAlign="center"
              sx={{
                minHeight: "100%",
                width: "100%",
              }}
              xs={12}
              md={6}
            >
              <Typography variant="h1">
                Join the <em>fun.</em>
              </Typography>
            </Grid>
            <Grid xs={12} md={6}>
              <Form />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default JoinPage;
