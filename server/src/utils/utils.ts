export default class Utils {
    static getCurrentDateString() {
        const currentDate = new Date();
        const currentDay = currentDate.getDate();
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear();
        const date = `${currentDay}.${currentMonth}.${currentYear}`;
        return date;
    }

    static getPlusDaysDateString(increaseByDays: number, initialDate?: string) {
        let startDate = 0;
        if (initialDate) {
            const formattedInitialDate = initialDate.split('.').reverse().join('.');
            startDate = new Date(formattedInitialDate).getTime();
        } else {
            startDate = Date.now();
        }
        const date = new Date(startDate + increaseByDays * 24 * 60 * 60 * 1000);
        const currentDay = date.getDate();
        const currentMonth = date.getMonth() + 1;
        const currentYear = date.getFullYear();
        const formattedDate = `${currentDay}.${currentMonth}.${currentYear}`;
        return formattedDate;
    }

    static getStringWithoutLineBreaks(string: string) {
        const replacementString = string.replace(/(\r\n|\n|\r)/gm, "");
        return replacementString;
    }
}
