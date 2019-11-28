export enum personsTypes {
    single = 'single',
    beloved = 'beloved',
    family = 'family',
}

export const personsData = [
    {
        type: personsTypes.single,
        value: personsTypes.single,
        text: 'Single',
    },
    {
        type: personsTypes.beloved,
        value: personsTypes.beloved,
        text: 'With my beloved',
    },
    {
        type: personsTypes.family,
        value: personsTypes.family,
        text: 'Family with children',
    },
];
