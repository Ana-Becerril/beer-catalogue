import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import styles from './style.module.css';
import { fetchBeers } from '../../redux/beer/beerActions';
import BeerCard from '../BeerCard';

const BeersContainer = ({ beerData, fetchBeers }) => {

    useEffect(() => {
        fetchBeers()
    }, [])

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.wave}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9a826" fillOpacity="1" d="M0,64L48,64C96,64,192,64,288,80C384,96,480,128,576,160C672,192,768,224,864,224C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                </div>
                <div className={styles.listContainer}>
                    {beerData.loading ? (
                        <h2>Loading...</h2>
                    ) : beerData.error ? (
                        <h2>{beerData.error}</h2>
                    ) : (
                        <div className={styles.beerListContainer}>
                            <h2>Beer List</h2>
                            <div className={styles.beerList}>
                                {beerData && 
                                beerData.beers && beerData.beers.map(beer => (
                                        <BeerCard
                                            name={beer.name}
                                            tagline={beer.tagline}
                                            abv={beer.abv}
                                        />
                                    ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        beerData: state.beer
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBeers: () => dispatch(fetchBeers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeersContainer);