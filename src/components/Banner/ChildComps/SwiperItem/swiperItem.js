import React from "react";
import "./swiperItem.scss";
import SwiperCore, {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Navigation, Autoplay, Pagination, Scrollbar]);

/* 轮播组件 */
class SwiperItem extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="maske" ></div>
        <div className="swiperItem">
          <Swiper
            slidesPerView={1}
            initialSlide={1}
            navigation
            autoplay
            pagination={{ clickable: true, color: "red" }}
            loop
            scrollbar={{ draggable: true }}
          >
            {this.props.banners.map((item, index) => (
              <SwiperSlide key={index} >
                <div className="warp">
                  <img src={item.imageUrl} alt={item.index}/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  }
}

export default SwiperItem;
