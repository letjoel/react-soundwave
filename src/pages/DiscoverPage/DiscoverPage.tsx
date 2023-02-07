import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import albumCovers from "../../assets/images/covers.jpg";
import IconCard from "../../components/IconCard/IconCard";
import layoutStyles from "../../styles/mainLayout.module.css";
import styles from "./DiscoverPage.module.css";
import iconCharts from "../../assets/images/microphone.svg";
import iconAlbums from "../../assets/images/albums.svg";
import iconMore from "../../assets/images/more.svg";

function DiscoverPage() {
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
              <Typography
                variant="h2"
                justifyContent={{ xs: "flex-end", md: "flex-start" }}
                textAlign={{ xs: "left" }}
                marginBottom={7}
                marginTop={4}
                paddingLeft={{ xs: 3, md: "inherit" }}
                fontWeight={{ xs: 400, md: 600 }}
                fontSize={{ xs: "2.8rem", md: "3.1rem" }}
              >
                Discover new music
              </Typography>
              <Grid
                container
                gap={{ xs: 2, md: 1 }}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <Grid xs={2.9} sm={2} md={2}>
                  <IconCard imageSrc={iconCharts} textName="Charts"></IconCard>
                </Grid>
                <Grid xs={2.9} sm={2} md={2}>
                  <IconCard imageSrc={iconAlbums} textName="Albums"></IconCard>
                </Grid>
                <Grid xs={2.9} sm={2} md={2}>
                  <IconCard imageSrc={iconMore} textName="More"></IconCard>
                </Grid>
              </Grid>
              <Grid
                paddingLeft={{ xs: 3, md: "inherit" }}
                marginTop={{ xs: 2, md: 3 }}
                textAlign={"left"}
                fontWeight={300}
                fontSize={"1rem"}
                component={"p"}
              >
                By joining you can benefit by listening to the latest albums
                released.
              </Grid>
            </Grid>
            <Grid xs={12} md={6}>
              <div className={styles.imageContainer}>
                <img src={albumCovers} alt="album covers" />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default DiscoverPage;
