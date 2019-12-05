export interface natureType {
    forest: boolean,
    mountains: boolean,
    water: boolean,
    desert: boolean,
}

export interface restType {
    romantic: boolean,
    nightLife: boolean,
    extreme: boolean,
    historic: boolean,
    exotic: boolean,
    resort: boolean,
}

export interface citiesToChooseFrom {
    name: string,
    temperature: number,
    img: string,
}

export default interface IApp {
    isLoading: boolean,
    question: number,
    answers: {
        temperature: number,
        nature: natureType,
        persons: string,
        restTypes: restType,
        budget: number,
        departureTime: string,
    },
    citiesToChooseFrom: [citiesToChooseFrom] | [],
}
