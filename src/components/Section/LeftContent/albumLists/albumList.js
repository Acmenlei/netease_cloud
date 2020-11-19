import { Component } from "react";
import Title from "../SongGroupTitle/Title";
import { getRequest } from "../../../../Network/BaseConfig";
import "./albumList.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = { albumItemList: [] };
  }
  componentDidMount() {
    getRequest("/top/album?offset=0&limit=10&type=hot").then(async (res) => {
      const statusCode = await res.data.code;
      statusCode === 200
        ? this.setState({ albumItemList: res.data.weekData.slice(0, 10) })
        : console.log();
    });
  }
  render() {
    const swiperSongGroup = this.state.albumItemList.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="warp" id={item.id}>
          <img src={item.blurPicUrl} alt={item.index} />
          <p className="song">{item.name}</p>
          <p className="songers">{item.artists[0].name}</p>
        </div>
      </SwiperSlide>
    ));
    return (
      <div className="AlbumList">
        <Title titleName="新碟上架" />
        <div className="swiperSongGroup">
          <Swiper slidesPerView={5} initialSlide={1} navigation loop>
            {swiperSongGroup}
          </Swiper>
        </div>
      </div>
    );
  }
}

export default AlbumList;
