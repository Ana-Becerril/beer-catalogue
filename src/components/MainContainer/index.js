import styles from './style.module.css';
import React, { useState} from 'react';
import MainIcon from '../../assets/main.svg'
import { connect } from 'react-redux';
import BeersContainer from '../BeersContainer';
import { filterBeers} from '../../redux/beer/beerActions';

const MainContainer = ({filterData, filterBeers}) => {
  const [value, setValue] = useState('All');

  const handleSelect = (e) => {
    setValue(e.target.value)
  }

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
              <select
                name="beers"
                id="beers"
                className={styles.beers}
                onChange={e => { handleSelect(e); filterBeers(e.target.value)}}
                value={value}
              >
                <option value="All">All</option>
                <option value="Pale">Pale</option>
                <option value="Pale Ale">Pale Ale</option>
                <option value="Lager">Lager</option>
                <option value="Porter">Porter</option>
                <option value="Wheat">Wheat</option>
                <option value="Stout">Stout</option>
                <option value="IPA">IPA</option>
              </select>
            </div>
          </div>
        </div>
        <svg className={styles.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9a826" fillOpacity="1" d="M0,64L48,64C96,64,192,64,288,80C384,96,480,128,576,160C672,192,768,224,864,224C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <BeersContainer
        value={value}
        filterData={filterData}
      />
    </>
  );
}

const mapStateToProps = state => {
  return {
      filterData: state.beer
  }
}

const mapDispatchToProps = dispatch => {
  return {
      filterBeers: (category) => dispatch(filterBeers(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
