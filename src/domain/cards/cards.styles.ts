import { makeStyles } from '@material-ui/core';
import { MainColors, MainFonts } from '../shared/themes/main';

export const useStyles = makeStyles({
    row: {
        display: 'flex',
        justifyContent: 'space-around',
        flexFlow: 'wrap'
    },
    card: {
        width: '20%',
        background: '#fff',
        border: '1px solid #ccc',
        marginBottom: '50px',
        transition: '0.3s',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 0 40px -10px rgba(0, 0, 0, 0.25)',
        }
    },
    cardHeader: {
        textAlign: 'center',
        padding: '50px 10px',
        background: `linear-gradient(to right, rgba(9,9,121,1), rgba(125,0,132,1))`,
        color: '#fff',
        height: '50px',
        fontFamily: MainFonts.fontFamily
    },
    cardBody: {
        padding: '30px 20px',
        textAlign: 'center',
        fontSize: '18px',
        backgroundColor: MainColors.gray,
        height: '100%',
        fontFamily: MainFonts.fontFamily
    }
})