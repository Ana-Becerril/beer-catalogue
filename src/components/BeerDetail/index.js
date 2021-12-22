import styles from './style.module.css'
import BeerTwo from '../../assets/beerTwo.svg'

const BeerDetail = ({ name, tagline, abv, description, food_pairing, removeItemDetail }) => {


  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.wave}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 320"><path fill="#22212a" fill-opacity="0.6" d="M0,160L24,186.7C48,213,96,267,144,272C192,277,240,235,288,197.3C336,160,384,128,432,122.7C480,117,528,139,576,160C624,181,672,203,720,192C768,181,816,139,864,128C912,117,960,139,1008,144C1056,149,1104,139,1152,117.3C1200,96,1248,64,1296,42.7C1344,21,1392,11,1416,5.3L1440,0L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
          </div>
          <div className={styles.removeItemDetail} onClick={removeItemDetail}> X
          </div>
          <div className={styles.beerCardContainer}>
            <div className={styles.left}>
              <img src={BeerTwo}
                alt="Beer Celebration"
                width="290"
                height="290"
                className={styles.beerTwoIcon} />
              <div className={styles.title}>
                <div className={styles.name}> {name} </div>
                <div className={styles.tagline}> {tagline} </div>
              </div>
            </div>
            <div className={styles.rigth}>
              <div className={styles.description}> <span>DESCRIPTION:</span> {description} </div>
              <div className={styles.foodPairing}> <span>FOOD PAIRING:</span> {food_pairing} </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeerDetail;