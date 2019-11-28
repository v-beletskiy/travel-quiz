import globalStyleVars from '../styles/variables.scss';
import { layoutWidths } from '../data/layoutWidths';

export const getScreenSize = () => {
    const { mobileMax, tabletMin, tabletMax, desktop } = globalStyleVars;
    // get numbers without px
    const mobileMaxNumber = Number(mobileMax.slice(0, mobileMax.length - 2));
    const tabletMinNumber = Number(tabletMin.slice(0, tabletMin.length - 2));
    const tabletMaxNumber = Number(tabletMax.slice(0, tabletMax.length - 2));
    const desktopNumber = Number(desktop.slice(0, desktop.length - 2));

    const windowWidth = window.innerWidth;
    let screenSize = '';
    if (windowWidth <= mobileMaxNumber) {
        screenSize = layoutWidths.mobile;
    } else if (windowWidth >= tabletMinNumber && windowWidth <= tabletMaxNumber) {
        screenSize = layoutWidths.tablet;
    } else if (windowWidth >= desktopNumber) {
        screenSize = layoutWidths.desktop;
    }
    return screenSize;
}
