import { useStyles } from './button.styles';

interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    buttonText: string;
}

export const Button = ({ onClick, buttonText }: ButtonProps) => {
    const classes = useStyles()

    return <button className={classes.buttonStyles} onClick={onClick}>{buttonText}</button>
}