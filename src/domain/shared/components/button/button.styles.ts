import { makeStyles } from '@material-ui/core';
import { MainColors, MainFonts } from '../../themes/main';

export const useStyles = makeStyles({
    buttonStyles: {
        width: '150px',
        height: '36px',
        borderRadius: '8px',
        backgroundColor: MainColors.blue2,
        color: MainColors.gray,
        fontWeight: 'bold',
        fontFamily: MainFonts.fontFamily,
        '&:hover': {
            backgroundColor: MainColors.hover.purple,
        }
    }
})