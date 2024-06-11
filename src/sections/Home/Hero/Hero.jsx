import css from './Hero.module.css';
import {IoSearch} from "react-icons/io5";

const Hero = () => {
  return (
      <div className={css.wrapper}>
          <h1 className={css.heroTitle}>Jämför produkter,
              priser och butiker</h1>
          <div className={css.searchInput}>
              <form className={css.searchContainer}>
                  <input
                      type="text"
                      placeholder="Hej, vad söker du idag?"
                  />
                  <button type="submit">
                      <IoSearch style={{
                          display: "flex",
                          justifyContent: 'center',
                          width: '20px',
                          height: '20px',
                          color: '#182C39'
                      }}/>
                  </button>
              </form>
          </div>
      </div>
  )
}

export default Hero;