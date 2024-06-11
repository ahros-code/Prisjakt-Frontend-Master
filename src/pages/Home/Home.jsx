import css from './Home.module.css'
import Hero from "../../sections/Home/Hero/Hero.jsx";
import Category from "../../sections/Home/Category/Category.jsx";

const Home = () => {
    return (
        <div className={css.wrapper}>
            <Hero />
            <Category />
        </div>
    )
}

export default Home;