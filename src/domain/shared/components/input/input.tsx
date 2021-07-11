import { ChangeEvent } from 'react';
import { useStyles } from './input.styles';

interface InputProps {
    type: string;
    onChange:  React.ChangeEventHandler<HTMLInputElement>;
    value: string;
}

export const Input = ({ type, value, onChange }: InputProps) => {
    const classes = useStyles();

    return <input value={value} onChange={onChange} className={classes.inputStyle} type={type}></input>
}