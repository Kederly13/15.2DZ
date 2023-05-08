import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadPosts } from 'store/posts/actions';
import { selectPosts } from 'store/posts/selectors';
import classes from './styles.module.css'

import { Posts } from './components/Posts/Posts';

const SectionPosts = () => {

    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    
    useEffect(() => {
        dispatch(loadPosts())
    }, [])

    return (
        <section className={classes.section}>
            <div className={classes.container}>
                {posts.length > 0 ? (
                    posts.map(({ title, body, id }) => (
                        <Posts
                            title={title}
                            body={body}
                            id={id}
                        />
                    ))
                ) : <p>empty</p> }
            </div>
        </section>
    )
}

export { SectionPosts };