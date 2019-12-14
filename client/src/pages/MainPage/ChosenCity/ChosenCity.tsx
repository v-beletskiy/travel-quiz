import React, { useState } from 'react';
import { connect } from 'react-redux';
import './style.scss';
import Gallery from '../../../components/shared/Gallery/Gallery';

interface IProps {
    cityImages: string[] | [],
    chosenCity: string,
}

const mapStateToProps = (state: any) => {
    return {
        cityImages: state.app.cityImages,
        chosenCity: state.app.chosenCity,
    }
}

const ChosenCity = (props: IProps) => {
    const { cityImages, chosenCity } = props;

    return (
        <div className="chosen-city-container">
            <p className="chosen-city-container__title">{chosenCity}</p>
            <Gallery photos={cityImages} />
        </div>
    )
}

export default connect(mapStateToProps, null)(ChosenCity);
