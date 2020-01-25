import React from 'react';
import './style.scss';
import { useTable, useSortBy } from "react-table";
import * as CSS from 'csstype';
const SortIcon = require("../../../assets/icons/sort.svg").default;

interface IProps {
    className?: string,
    columns: any,
    data: any,
    initialSortId: string,
}

const getTableColumnWidth = (quantityOfHeaderColumns: number) => {
    const headerColumnWidth = +(1 / quantityOfHeaderColumns * 100).toFixed(2);
    const headerColumnWidthObj: CSS.Properties = {
        ['--tableColumnWidth' as any]: `${headerColumnWidth}%`,
    };
    return headerColumnWidthObj;
}

const Table = (props: IProps) => {
    const { className, columns, data, initialSortId } = props;
    const {
        headers,
        rows,
        prepareRow
    } = useTable(
        {
            columns,
            data,
            initialState: {
                sortBy: [
                    {
                        id: initialSortId,
                        desc: true,
                    }
                ]
            },
            disableSortRemove: true,
        },
        useSortBy
    );

    return (
        <div className={`table ${className}`}>
            <div className="table__header-container">
                {headers.map(header =>
                    <div className="table__header-container__name" {...header.getSortByToggleProps()} style={getTableColumnWidth(headers.length)}>
                        <p>{header.render("Header")}</p>
                        {header.id !== 'hotelImg' ? <p className="table__header-container__name__icon"><SortIcon /></p> : null}
                    </div>
                )}
            </div>
            <div className="table__body">
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <div className="table__body__row-container" style={getTableColumnWidth(headers.length)}>
                            {row.cells.map(cell => {
                                return (
                                    <div className="table__body__row-container__cell">
                                        {cell.render("Cell")}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Table;
