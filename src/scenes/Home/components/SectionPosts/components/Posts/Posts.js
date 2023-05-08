import classes from './styles.module.css';

const Posts = (({ title, body, id }) => (
    <div className={classes.post} key={id}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.text}>{body}</p>
    </div>
))

export { Posts };