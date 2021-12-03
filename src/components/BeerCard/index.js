import styles from './style.module.css';
import BeerIcon from '../../assets/beer.svg'

function BeerCard({ name, tagline, abv}) {
    return (
        <div className={styles.beerCardContainer}>
            <div  className={styles.title}>
            <img src={BeerIcon}
            alt="Beer"
            width="70"
            height="70"
            className={styles.mainIcon} />
            <div className={styles.name}> {name} </div>
            </div>
            <div className={styles.tagline}> {tagline} </div>
            <div className={styles.abv}>{abv} ABV</div>
        </div>
    );
}

export default BeerCard;
