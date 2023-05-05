import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadPosts } from 'store/posts/actions';
import { selectPosts } from 'store/posts/selectors';

import classes from './styles.module.css'

const SectionPosts = () => {

    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    
    useEffect(() => {
        dispatch(loadPosts())
    }, [])

    return (
        <div className={classes.container}>
            {posts.length > 0 ? (
                posts.map(({ title, body, id }) => (
                    <div className={classes.post} key={id}>
                        <h2 className={classes.title}>{title}</h2>
                        <p className={classes.text}>{body}</p>
                    </div>
                ))
            ) : <p>empty</p> }
        </div>
    )
}

export { SectionPosts };