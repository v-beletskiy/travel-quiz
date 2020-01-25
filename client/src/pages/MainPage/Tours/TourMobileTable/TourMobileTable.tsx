import React from 'react';
import './style.scss';

interface IProps {
    className?: string,
    columns: any,
    data: any,
}

const TourMobileTable = (props: IProps) => {
    const { columns, data, className } = props;

    return (
        <div className={`tour-mobile-table ${className}`}>
            {data.map((tour: any) => {
                return (
                    <div className="tour-mobile-table__element">
                        {tour.hotelImg}
                        <div className="tour-mobile-table__element__container">
                            {columns.slice(1).map((rowData: { Header: React.ReactNode; accessor: React.ReactText; }) => {
                                return (
                                    <div className="tour-mobile-table__element__container__row">
                                        <p className="tour-mobile-table__element__container__header">{rowData.Header}</p>
                                        <p className="tour-mobile-table__element__container__value">{tour[rowData.accessor]}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TourMobileTable;
