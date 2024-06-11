import React, { useState } from 'react';
import css from './Category.module.css';

const Category = () => {
    const [showAllItems, setShowAllItems] = useState(false);

    // Dummy data for demonstration
    const categoriesData = [
        { id: 1, name: "First Category" },
        { id: 2, name: "Second Category" },
        { id: 3, name: "Third Category" },
        { id: 4, name: "Fourth Category" },
        { id: 5, name: "Fifth Category" },
        { id: 6, name: "Sixth Category" },
        { id: 7, name: "Seventh Category" },
        { id: 8, name: "Eighth Category" },
        { id: 9, name: "Ninth Category" },
        { id: 10, name: "Tenth Category" },
        { id: 11, name: "Eleventh Category" },
        { id: 12, name: "Twelfth Category" },
        { id: 13, name: "Thirteenth Category" },
        { id: 14, name: "Fourteenth Category" },
        { id: 15, name: "Fifteenth Category" },
        { id: 16, name: "Sixteenth Category" },
        { id: 17, name: "Seventeenth Category" },
        { id: 18, name: "Eighteenth Category" }
    ];

    const itemsToShow = showAllItems ? categoriesData : categoriesData.slice(0, 8);

    return (
        <div className={css.wrapper}>
            <ul className={css.categoriesList}>
                {itemsToShow.map(category => (
                    <li key={category.id} className={css.categoriesItem}>
                        <img src={'https://pricespy-75b8.kxcdn.com/g/campaigns/4/se/banner_logo_big.png'} alt="icon" />
                        <h3>{category.name}</h3>
                    </li>
                ))}
            </ul>
            <button className={css.showMoreButton} onClick={() => setShowAllItems(!showAllItems)}>
                {showAllItems ? <span>Se färre</span> : <span>Se alla kategorier</span>}
            </button>
        </div>
    )
}

export default Category;
