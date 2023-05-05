import classes from './styles.module.css';
import { SectionPosts } from './SectionPosts';

const MainPage = () => {
    return (
        <section className={classes.MainPage}>
            <SectionPosts />
        </section>
    )
}

export { MainPage };