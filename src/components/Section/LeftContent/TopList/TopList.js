import { Component } from "react";
import { getRequest } from "../../../../Network/BaseConfig";
import Title from "../SongGroupTitle/Title";
import "./TopList.scss";

class TopList extends Component {
  constructor(props) {
    super(props);
    this.state = { TopList: [] };
  }
  /* 获取三种榜单的数据 */
  getTopListData = (result, index) => {
    return getRequest(`/playlist/detail?id=${result[index].id}`).then(
      async (res) => {
        const statusCode = res.data.code;
        if (statusCode === 200) {
          /* 添加数据 */
          return res.data.playlist;
        }
      }
    );
  };
  componentDidMount() {
    /* 获取三种榜单id信息 */
    getRequest("/toplist/detail")
      .then(async (res) => {
        const statusCode = res.data.code;
        return statusCode === 200 ? res.data.list.slice(0, 3) : console.log();
      })
      .then((result) => {
        /* 获取榜单详情信息 */
        Promise.all([
          this.getTopListData(result, 0),
          this.getTopListData(result, 1),
          this.getTopListData(result, 2),
        ]).then(async (response) => {
          await this.setState({ TopList: response });
        });
      });
  }
  render() {
    const TopDataList = this.state.TopList.map((item, index) => (
      <ul key={index}>
        <li>
          <img src={item.coverImgUrl} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>播放</p>
            <p>添加收藏</p>
          </div>
        </li>
        {item.tracks.slice(0, 10).map((childItem, childIndex) => (
          <li key={childIndex}>
            <span className={childIndex < 3 ? "light" : ""}>
              {childIndex + 1}
            </span>
            {childItem.name}
          </li>
        ))}
        <li className="more">查看全部</li>
      </ul>
    ));
    return (
      <div className="TopList">
        <Title titleName="榜单" />
        <div className="topList-container">{TopDataList}</div>
      </div>
    );
  }
}

export default TopList;
