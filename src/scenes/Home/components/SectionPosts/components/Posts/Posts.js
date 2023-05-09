import classes from './styles.module.css';

<<<<<<< HEAD
const Posts = (({title, body, id})  => (
=======
const Posts = (({ title, body, id }) => (
>>>>>>> e4e966d335f09711728008b4b7d286cd19849834
    <div className={classes.post} key={id}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.text}>{body}</p>
    </div>
))

export { Posts };