import { Grid, Typography } from "@mui/material";

import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import styles from "./IconCard.module.css";

type Props = {
  textName: string;
  imageSrc: string;
};

const IconCard = (props: Props) => {
  return (
    <Card
      className={styles.iconCard}
      sx={{ backgroundColor: "secondary.main" }}
    >
      <CardActionArea>
        <img src={props.imageSrc} alt={props.textName} />
        <CardContent sx={{ marginTop: "-10px" }}>
          <Typography gutterBottom variant="h5" color="white" component="p">
            {props.textName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default IconCard;
