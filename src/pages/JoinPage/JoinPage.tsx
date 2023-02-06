import { Grid } from '@mui/material';
import Form from '../../components/Form/Form'
import layoutStyles from "../../styles/mainLayout.module.css";


function JoinPage() {
  return (
      <>
      <div className={layoutStyles.main}>
        <div className={layoutStyles.mainContainer}>
          
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={12} md={6}>
              Hola
            </Grid>
            <Grid xs={12} md={6}>
              <Form />
            </Grid>
          </Grid>          

          
        </div>
      </div>
    </>
  )
}

export default JoinPage