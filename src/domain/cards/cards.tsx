import { Post, User } from '../api/api.types';
import { useStyles } from './cards.styles';

interface CardsProps {
    data: {
        posts: Post[],
        user: User[]
    }
}

export const Cards = ({ data }: CardsProps) => {
    const classes = useStyles();

    return (
        <div className={classes.row}>
        {data && data.posts.map(post => (
            <div className={classes.card}>
                <div className={classes.cardHeader}>
                    <span>{post.title}</span>
                </div>
                <div className={classes.cardBody}>
                    <span>{post.body}</span>
                </div>
        </div>
        ))}
    </div>
    )
}