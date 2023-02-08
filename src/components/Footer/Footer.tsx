import Box from "@mui/material/Box";
import facebookIcon from "../../assets/images/facebook.svg";
import twitterIcon from "../../assets/images/twitter.svg";
import { Grid, Link } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          height: "70px",
          backgroundColor: "secondary.main",
        }}
      >
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid>
            <Link
              fontSize={"1.1rem"}
              p={3}
              color="white"
              underline="none"
              href="#"
            >
              About Us
            </Link>
            <Link fontSize={"1.1rem"} color="white" underline="none" href="#">
              Contact
            </Link>
          </Grid>
          <Grid>
            <Link
              p={3}
              fontSize={"1.1rem"}
              color="white"
              underline="none"
              href="#"
            >
              <img height="17px" src={twitterIcon} alt="twitter" />
              &nbsp;Twitter
            </Link>
            <Link fontSize={"1.1rem"} color="white" underline="none" href="#">
              <img height="17px" src={facebookIcon} alt="twitter" />
              &nbsp;Facebook
            </Link>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}

export default Footer;
