export enum departureDateTypes {
    tomorrow = 'tomorrow',
    week = 'week',
    month = 'month',
}

export const departureData = [
    {
        type: departureDateTypes.tomorrow,
        value: departureDateTypes.tomorrow,
        text: 'Even tomorrow',
    },
    {
        type: departureDateTypes.week,
        value: departureDateTypes.week,
        text: 'In a week',
    },
    {
        type: departureDateTypes.month,
        value: departureDateTypes.month,
        text: 'In a month',
    },
];
