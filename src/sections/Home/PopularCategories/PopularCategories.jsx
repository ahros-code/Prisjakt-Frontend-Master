import css from './PopularCategories.module.css';
import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "react-router-dom";
import 'swiper/css';

const PopularCategories = () => {
    const categories = [
        {
            id: 1,
            name: "Mobiltelefoner",
            imageUrl: "https://pricespy-75b8.kxcdn.com/g/cat/192/mobil.png",
            link: "/"
        },{
            id: 2,
            name: "Mobiltelefoner",
            imageUrl: "https://pricespy-75b8.kxcdn.com/g/cat/192/mobil.png",
            link: "/"
        },{
            id: 3,
            name: "Mobiltelefoner",
            imageUrl: "https://pricespy-75b8.kxcdn.com/g/cat/192/mobil.png",
            link: "/"
        },{
            id: 4,
            name: "Mobiltelefoner",
            imageUrl: "https://pricespy-75b8.kxcdn.com/g/cat/192/mobil.png",
            link: "/"
        },{
            id: 5,
            name: "Mobiltelefoner",
            imageUrl: "https://pricespy-75b8.kxcdn.com/g/cat/192/mobil.png",
            link: "/"
        },{
            id: 6,
            name: "Mobiltelefoner",
            imageUrl: "https://pricespy-75b8.kxcdn.com/g/cat/192/mobil.png",
            link: "/"
        },{
            id: 7,
            name: "Mobiltelefoner",
            imageUrl: "https://pricespy-75b8.kxcdn.com/g/cat/192/mobil.png",
            link: "/"
        },{
            id: 8,
            name: "Mobiltelefoner",
            imageUrl: "https://pricespy-75b8.kxcdn.com/g/cat/192/mobil.png",
            link: "/"
        },{
            id: 9,
            name: "Mobiltelefoner",
            imageUrl: "https://pricespy-75b8.kxcdn.com/g/cat/192/mobil.png",
            link: "/"
        }
    ];
  return (
      <div className={css.wrapper}>
          <h2 className={css.title}>
              Populära kategorier
          </h2>
             <Swiper
                 slidesPerView={3}
                 spaceBetween={12}
                 className="mySwiper">
                 {categories.map(category => (
                     <SwiperSlide key={category.id}>
                         <Link to={category.link}>
                             <div className={css.card}>
                                 <img src={category.imageUrl} alt={`Icon for ${category.name}`} />
                                 <p>{category.name}</p>
                             </div>
                         </Link>
                     </SwiperSlide>
                 ))}
             </Swiper>
          <div className={css.discounts}>
            <h2 className={css.discountTitle}>Vårkampanjerna är här!</h2>
              <p className={css.discountText}>Aktuella kampanjerbjudanden från butiker och varumärken</p>
              <button className={css.btn}><span className={css.btnText}>Se alla kampanjer</span></button>
          </div>
      </div>
  )
}

export default PopularCategories;