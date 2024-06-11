import css from './Sidebar.module.css';
import {FaAnglesRight} from "react-icons/fa6";
import {FaRegBell, FaRegHeart} from "react-icons/fa";
import {useState} from "react";

const Sidebar = () => {
    const [show, setShow] = useState(false);
    return (
        <div className={css.wrapper}>
            <ul className={css.sidebarIconsList}>
                <li className={css.sidebarIconItem}>
                    <button onClick={() => setShow(!show)} style={{
                        border: "none",
                        backgroundColor: 'transparent'
                    }}><FaAnglesRight color={'#BEC3C6'} style={{
                        width: '15px',
                        height: '15px'
                    }}/></button>
                </li>
                <li>
                    <FaRegHeart color={'#6A7881'} style={{
                        width: '20px',
                        height: '20px'
                    }}/>
                </li>
                <li>
                    <FaRegBell color={'#6A7881'} style={{
                        width: '20px',
                        height: '20px'
                    }}/>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar