import css from './DagenDealsCard.module.css';
import {Link} from "react-router-dom";
import {FaArrowTrendDown} from "react-icons/fa6";
import {IoMdInformationCircleOutline} from "react-icons/io";
import {GoKebabHorizontal} from "react-icons/go";
import {Rating} from "@mui/material";
import {useState} from "react";

const DagenDealsCard = ({priceInfo, img, category, title, rating, ratingCount, realPrice, discount, storeName}) => {
    const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
        return originalPrice - (originalPrice * (discountPercentage / 100));
    };
    const discountedPrice = calculateDiscountedPrice(realPrice, discount);
    return (
        <div className={css.wrapper}>
            <Link to={'/'}>
                <div className={css.imageSection}>
                    <div className={css.top}>
                        <div className={css.priceWrapper}>
                            <FaArrowTrendDown style={{
                                color: '#007CB2',
                                width: '16px',
                                height: '16px'
                            }} />
                            <p className={css.priceInfo}>{priceInfo}%</p>
                            <IoMdInformationCircleOutline style={{
                                color: '#007CB2',
                                width: '20px',
                                height: '20px'
                            }} />
                        </div>
                        <div className={css.threeDots}>
                            <GoKebabHorizontal fill={'#182C39'} style={{
                                transform: `rotate(90deg)`,
                                width: `20px`,
                                height: `20px`
                            }} />
                        </div>
                    </div>
                    <img src={img} alt={`${title}'s image`} className={css.image}/>
                </div>
                <div className={css.bottomSection}>
                    <span className={css.category}>{category}</span>
                    <span className={css.title}>{title}</span>
                    <div className={css.rating}>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            readOnly={true}
                        />
                        <span className={css.ratingCount}>({ratingCount})</span>
                    </div>
                </div>
                <div className={css.botSection}>
                    <span className={css.discount}>-{discount}%</span>
                    <div className={css.priceSec}>
                        <div className={css.priceSecZr}>
                            fr.
                        </div>
                        <div className={css.priceSecFst}>
                            <span>{Math.round(Number(discountedPrice))} kr</span>
                        </div>
                        <div className={css.priceSecScnd}>
                            <span className={css.realPrice}>{realPrice} kr</span>
                        </div>
                    </div>
                    <div className={css.shopName}>
                        <span className={css.shopNameSpan}>{storeName}</span>
                        <span className={css.shopNamesSpan}>+52 butiker</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default DagenDealsCard;