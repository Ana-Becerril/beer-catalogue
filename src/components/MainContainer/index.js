import styles from './style.module.css';
import MainIcon from '../../assets/main.svg'
import BeersContainer from '../BeersContainer';

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
            <div className={styles.infoContainer}>
            <p className={styles.neonText}>All you need is...</p>
            <h1 className={styles.neonText}>BEER!</h1>
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
            <svg className={styles.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9a826" fill-opacity="0.8" d="M0,64L48,64C96,64,192,64,288,80C384,96,480,128,576,160C672,192,768,224,864,224C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <BeersContainer/>
    </>
  );
}
export default MainContainer;