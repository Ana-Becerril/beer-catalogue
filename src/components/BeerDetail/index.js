import styles from './style.module.css'


const BeerDetail = ({ name, tagline, abv, description, removeItemDetail}) => {


  return ( 
    <>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.removeItemDetail}onClick={removeItemDetail}>
          </div>
          <div className={styles.productCardContainer}>
          <div className={styles.name}> {name} </div>
            <div className={styles.tagline}> {tagline} </div>
            <div className={styles.abv}> ABV{abv} </div>
          </div>
          <div className={styles.description}> {description} </div>
          </div>
      </div> 
    </>
  );
}

export default BeerDetail;