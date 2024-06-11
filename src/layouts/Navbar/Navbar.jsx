import css from './Navbar.module.css';
import { CgMenuGridR } from "react-icons/cg";
import {useState} from "react";
import {IoIosSearch} from "react-icons/io";
import {IoSearch} from "react-icons/io5";

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
    };
  return (
      <div className={css.wrapper}>
          <div className={css.menuSection}>
                <CgMenuGridR color={'#fff'} />
          </div>
          <div className={css.mainSectionWrapper}>
              <div className={css.mainSection}>
                  <img src="https://pricespy-75b8.kxcdn.com/g/rfe/logos/logo_se_v2_light.svg" alt="icon"/>
              </div>
              <div className={css.searchInput}>
                  <form onSubmit={handleSearchSubmit} className={css.searchContainer}>
                      <input
                          type="text"
                          placeholder="Hej, vad söker du idag?"
                          value={searchTerm}
                          onChange={handleSearchChange}
                      />
                      <button type="submit">
                          <IoSearch  style={{
                              display: "flex",
                              justifyContent: 'center',
                              width: '20px',
                              height: '20px',
                              color: '#182C39'
                          }} />
                      </button>
                  </form>
              </div>
              <div className={css.loginSection}>
                  <button className={css.loginBtn}>
                      <span className={css.loginBtnText}>Logga in</span>
                  </button>
              </div>
          </div>
      </div>
  )
}

export default Navbar;