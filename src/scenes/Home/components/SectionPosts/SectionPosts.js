import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadPosts } from 'store/posts/actions';
import { selectPosts } from 'store/posts/selectors';

import { Posts } from './components/Posts/Posts';

import classes from './styles.module.css'

const SectionPosts = () => {

    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    
    useEffect(() => {
        dispatch(loadPosts())
    }, [])
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
    )
}

export { SectionPosts };