import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import './style.scss';
import { tours } from '../../../reducers/types/app';
import Table from '../../../components/shared/Table/Table';
import TourMobileTable from './TourMobileTable/TourMobileTable';

interface IProps {
    tours: [tours] | [],
}

const mapStateToProps = (state: any) => {
    return {
        tours: state.app.tours,
    }
}

const Tours = (props: IProps) => {
    const { tours } = props;
    const columns = useMemo(() => {
        return (
            [
                {
                    Header: '',
                    accessor: 'hotelImg',
                },
                {
                    Header: 'Hotel',
                    accessor: 'hotelName',
                },
                {
                    Header: 'Price',
                    accessor: 'price',
                },
                {
                    Header: 'Date range',
                    accessor: 'dateRange',
                }
            ]
        )
    }, []);
    const data = useMemo(() => {
        const tourData: any = [];
        tours.forEach((tour: any) => {
            tourData.push({
                hotelImg: <img src={tour.hotelImg} />,
                hotelName: tour.hotelName,
                price: `$${tour.price}`,
                dateRange: `${tour.dateIn} - ${tour.dateOut} (${tour.days} days)`,
            })
        });
        return tourData;
    }, [tours]);

    return (
        <div className="tours-container">
            <p className="tours-container__table-title">Available tours</p>
            <div className="tours-container__table-desktop"><Table columns={columns} data={data} initialSortId='price' /></div>
            <div className="tours-container__table-mobile"><TourMobileTable columns={columns} data={data} /></div>
        </div>
    )
}

export default connect(mapStateToProps, null)(Tours);
