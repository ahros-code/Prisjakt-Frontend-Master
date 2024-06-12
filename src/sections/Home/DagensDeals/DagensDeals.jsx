import css from './DagensDeals.module.css'
import {IoMdInformationCircleOutline} from "react-icons/io";
import {Link} from "react-router-dom";
import {useState} from "react";
import {styled} from "@mui/material";
import {Unstable_Popup as BasePopup} from '@mui/base/Unstable_Popup';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import dagensDealsMock from "../../../components/DagensDeals/MOCK_DAGEN_DEALS_DATA.js";
import DagenDealsCard from "../../../components/DagensDeals/DagenDealsCard/DagenDealsCard.jsx";

const DagensDeals = () => {
    const [anchor, setAnchor] = useState(null);

    const handleClick = (event) => {
        setAnchor(anchor ? null : event.currentTarget);
    };

    const open = Boolean(anchor);
    const id = open ? 'simple-popup' : undefined;
    const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
    };

    const blue = {
        200: '#99CCFF',
        300: '#66B2FF',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        700: '#0066CC',
    };

    const PopupBody = styled('div')(
        ({theme}) => `
  width: max-content;
  padding: 12px 16px;
  margin: 8px;
  border-radius: 8px;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  box-shadow: ${
            theme.palette.mode === 'dark'
                ? `0px 4px 8px rgb(0 0 0 / 0.7)`
                : `0px 4px 8px rgb(0 0 0 / 0.1)`
        };
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  z-index: 1;
`,
    );

    const Button = styled('button')(
        ({theme}) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
  box-shadow: 0 2px 4px ${
            theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 127, 255, 0.5)'
        }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &:active {
    background-color: ${blue[700]};
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
    &:hover {
      background-color: ${blue[500]};
    }
  }
`,
    );



    return (
        <div className={css.wrapper}>
            <div className={css.titleSection}>
                <h3 className={css.title}>Dagens Deals</h3>
                <button className={css.btn} onClick={handleClick}>
                    <IoMdInformationCircleOutline style={{
                        color: '#68757E',
                        width: '20px',
                        height: '20px'
                    }}/>
                </button>
                <BasePopup id={id} open={open} anchor={anchor}>
                    <PopupBody className={css.popupBody} >
                        Här samlar vi erbjudanden som vi bedömer är extra bra just nu. Vi följer pristrenden i
                        tre månader och jämför den med produktens pris just nu.
                    <br/><Link to={'/'}>Läs mer</Link></PopupBody>
                </BasePopup>
                <Link to={'/'}><span className={css.link}>Visa alla deals</span></Link>
            </div>
            <div className={css.mainSection}>
                <Swiper slidesPerView={4} spaceBetween={12} navigation={true} modules={[Navigation]} className="mySwiper">
                    {dagensDealsMock.map(item => (
                        <SwiperSlide  key={item.id}>
                            <DagenDealsCard priceInfo={item.priceInfo} category={item.category} img={item.img} title={item.title} discount={item.discount} rating={item.rating} ratingCount={item.ratingCount} realPrice={item.realPrice} storeName={item.storeName} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default DagensDeals;