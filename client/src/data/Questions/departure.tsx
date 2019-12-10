export enum departureDateTypes {
    month = 'month',
    later = 'later',
}

export const departureData = [
    {
        type: departureDateTypes.month,
        value: departureDateTypes.month,
        text: 'In a month',
    },
    {
        type: departureDateTypes.later,
        value: departureDateTypes.later,
        text: 'Later, not right now',
    },
];
