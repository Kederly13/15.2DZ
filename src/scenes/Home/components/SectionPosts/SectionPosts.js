import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadPosts } from 'store/posts/actions';
import { selectPosts } from 'store/posts/selectors';
<<<<<<< HEAD
import classes from './styles.module.css'

import { Posts } from './components/Posts/Posts';

=======

import { Posts } from './components/Posts/Posts';

import classes from './styles.module.css'

>>>>>>> e4e966d335f09711728008b4b7d286cd19849834
const SectionPosts = () => {

    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    
    useEffect(() => {
        dispatch(loadPosts())
    }, [])
<<<<<<< HEAD

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
=======
    const slicedPosts = posts.slice(0,6)
    return (
        <section className='section'>
            <div className='container'>
                <div className={classes.container}>   
                    {posts.length > 0 ? (
                        slicedPosts.map(({ title, body, id }) => (
                            <Posts
                                title={title}
                                body={body}
                                id={id}
                            />
                        ))
                    ) : <p>empty</p> }
                </div>
            </div>
        </section>    
>>>>>>> e4e966d335f09711728008b4b7d286cd19849834
    )
}

export { SectionPosts };