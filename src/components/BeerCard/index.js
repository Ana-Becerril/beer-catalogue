import styles from './style.module.css';

function BeerCard({ name, tagline, abv }) {
    return (
        <div className={styles.beerCardContainer}>
            <div className={styles.name}> {name} </div>
            <div className={styles.tagline}> {tagline} </div>
            <div className={styles.abv}>{abv} ABV</div>
        </div>
    );
}

export default BeerCard;
