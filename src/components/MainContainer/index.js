import styles from './style.module.css';
import MainIcon from '../../assets/main.svg'


const MainContainer = () => {

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.topContainer}>
          <img src={MainIcon}
            alt="Beer Celebration"
            width="600"
            height="600"
            className={styles.mainIcon} />
          <h1 className={styles.neonText}>BEER!</h1>
          <p className={styles.neonText}>All you need is...</p>
          <div className={styles.customSelect}>
            <select name="beers" id="beers" className={styles.beers}>
              <option value="all">All</option>
              <option value="pale">Pale</option>
              <option value="pale ale">Pale Ale</option>
              <option value="lager">Lager</option>
              <option value="porter">Porter</option>
              <option value="wheat">Wheat</option>
              <option value="stout">Stout</option>
              <option value="ipa">IPA</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainContainer;