import styles from './style.module.css'


const BeerDetail = ({ name, tagline, abv, description}) => {


  return ( 
    <>
      {/* <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.removeItemDetail}onClick={removeItemDetail}>
            <FontAwesomeIcon icon={faTimesCircle} className={styles.closeIcon} />
          </div>
          <div className={styles.productCardContainer}>
            <img src={image} alt={name} />
            <div className={styles.tagline}> {tagline} </div>
            <div className={styles.abv}> ABV{abv} </div>
          </div>
          <div className={styles.description}> {description} </div>
          </div>
      </div> */}
    </>
  );
}

export default BeerDetail;