import { makeStyles } from '@material-ui/core';
import { MainColors, MainFonts } from '../../themes/main';

export const useStyles = makeStyles({
    inputStyle: {
        height: '35px',
        marginRight: '4px',
        borderColor: MainColors.blue2,
        backgroundColor: 'transparent',
        color: MainColors.gray,
        fontWeight: 'bold',
        fontFamily: MainFonts.fontFamily,
        paddingLeft: '2px'
    }
})