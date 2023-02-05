import layoutStyles from "../../styles/mainLayout.module.css";
import styles from "./HomePage.module.css";
import girlImg from "../../assets/images/landing-page-girl.png";

function HomePage() {
  return (
    <>
      <div className={layoutStyles.main}>
        <div className={layoutStyles.mainContainer}>
          <div className={styles.imageContainer}>
            <img src={girlImg} alt="Girl" />
          </div>
          <div className={styles.rightSideContainer} >
            <h1>Feel The Music</h1>
            <p>Stream over 20 thousand songs with one click</p>
            <button>Join Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage