import {isIOS} from '../utils/platformUtil.ts';

export const fontFamilies = {
    MONTSERRAT: {
        normal: isIOS() ? 'Montserrat-Regular' : 'MontserratRegular',
    },
    PLAYWRITE: {
        normal: isIOS() ? 'PlaywriteHRLijeva-Regular' : 'PlaywriteHRLijevaRegular',
    },
    BEBAS: {
        normal: isIOS() ? 'BebasNeue-Regular' : 'BebasNeueRegular',
    },

    // Adjust the above code to fit your chosen fonts' names
};