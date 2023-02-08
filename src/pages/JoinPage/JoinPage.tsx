import { Grid, Typography } from "@mui/material";
import FloatingCircle from "../../components/FloatingCircle/FloatingCircle";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import layoutStyles from "../../styles/mainLayout.module.css";
import "./JoinPage.module.css";

function JoinPage() {
  return (
    <>
      <FloatingCircle />
      <FloatingCircle />
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
      <Footer />
    </>
  );
}

export default JoinPage;
