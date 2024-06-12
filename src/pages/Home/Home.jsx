import css from './Home.module.css'
import Hero from "../../sections/Home/Hero/Hero.jsx";
import Category from "../../sections/Home/Category/Category.jsx";
import PopularCategories from "../../sections/Home/PopularCategories/PopularCategories.jsx";
import DagensDeals from "../../sections/Home/DagensDeals/DagensDeals.jsx";

const Home = () => {
    return (
        <div className={css.wrapper}>
            <Hero />
            <Category />
            <PopularCategories />
            <DagensDeals />
        </div>
    )
}

export default Home;