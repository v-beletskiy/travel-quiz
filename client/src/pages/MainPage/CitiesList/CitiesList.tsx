import React from 'react';
import './style.scss';
import { citiesToChooseFrom } from '../../../reducers/types/app';

interface IProps {
    citiesToChooseFrom: [citiesToChooseFrom] | [],
}

const CitiesList = (props: IProps) => {
    const { citiesToChooseFrom } = props;

    return (
        <div className="cities-list-container">
            {
                (citiesToChooseFrom as Array<[citiesToChooseFrom] | []>).map((city: any) => {
                    return (
                        <div className="cities-list-container__item">
                            <img src={`${process.env.LOCAL_URL}/static/images/cities/${city.img}`} key={city.name} />
                            <div className="cities-list-container__item__shade">
                                <p>{city.name}</p>
                                <p className="cities-list-container__item__shade__temperature">{city.temperature}<sup>o</sup>C</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CitiesList;
