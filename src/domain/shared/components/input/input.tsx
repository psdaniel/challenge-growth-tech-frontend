import { ChangeEvent } from 'react';
import { useStyles } from './input.styles';

interface InputProps {
    type: string;
    onChange:  React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ type, onChange }: InputProps) => {
    const classes = useStyles();

    return <input onChange={onChange} className={classes.inputStyle} type={type}></input>
}