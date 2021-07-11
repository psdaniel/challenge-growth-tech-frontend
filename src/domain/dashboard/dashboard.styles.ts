import { makeStyles } from '@material-ui/core';
import { MainColors, MainFonts } from '../shared/themes/main';

export const useStyles = makeStyles({
    container: {
        width: '100%',
        height: '100vh',
        backgroundColor: MainColors.blue,
        backgroundImage: 'linear-gradient(7deg, rgba(2,0,36,1) 18%, rgba(9,9,121,1) 56%, rgba(125,0,132,1) 95%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    inputComponent: {
        display: 'flex',
        alignSelf: 'center'
    },
    textStyles: {
        color: MainColors.gray,
        fontWeight: 'bold',
        fontFamily: MainFonts.fontFamily
    },
    postsComponent: {
        width: '100%',
        height: 'auto'
    },
    userComponent: {
        display: 'flex',
        alignSelf: 'center'
    },
})