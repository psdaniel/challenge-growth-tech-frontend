import { useStyles } from './input.styles';

interface InputProps {
    type: string;
}

export const Input = ({ type }: InputProps) => {
    const classes = useStyles();

    return <input className={classes.inputStyle} type={type}></input>
}