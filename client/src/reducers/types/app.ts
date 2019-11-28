interface natureType {
    forest: boolean,
    mountains: boolean,
    water: boolean,
    desert: boolean,
}

interface restType {
    romantic: boolean,
    nightLife: boolean,
    extreme: boolean,
    historic: boolean,
    exotic: boolean,
    resort: boolean,
}

export default interface IApp {
    question: number,
    answers: {
        temperature: number,
        nature: natureType,
        persons: string,
        restTypes: restType,
        budget: number,
        departureTime: string,
    }
}
