import { Component } from "react";
import { withRouter } from "react-router-dom";
import { getRequest } from "../../../Network/BaseConfig";
import { FormVerifyTime } from "../../../components/Section/FormVerify/formVerify";
import "./introduce.scss";
import { connectComponent } from "../../../store/store";

//接口获取音乐的播放地址
class Introduce extends Component {
  constructor(props) {
    super(props);
    this.state = { playlistData: {}, active: true };
  }
  /* 获取当前歌单数据 */
  componentDidMount() {
    getRequest(
      `/playlist/detail?id=${this.props.history.location.state.id}`
    ).then(async (res) => {
      if (res.data.code === 200) {
        this.setState({ playlistData: res.data.playlist });
      }
    });
  }
  triggerActiveHandel = () => {
    this.setState({ active: !this.state.active });
  };
  getMusicInfo = (id, index) => {
    getRequest(`/song/url?id=${id}`).then((res) => {
      let newvalue = res.data.data[0].url;
      this.props.updatePlayerLocation({
        type: "updatePlayerLocation",
        newvalue,
        playlist: this.state.playlistData.tracks,
        index,
      });
    });
  };
  render() {
    const temp = this.state.playlistData;
    /* 歌曲 */
    const detail = temp.tracks
      ? temp.tracks.map((item, index) => (
          <tr key={index}>
            <td>
              <span>{index + 1}.</span>
            </td>
            <td>
              <span onClick={() => this.getMusicInfo(item.id, index)}>
                {item.name}
              </span>
            </td>
            <td>
              <span>{FormVerifyTime(item.dt)}</span>
            </td>
            <td>
              <span>{item.ar[0].name}</span>
            </td>
            <td>
              <span>{item.al.name}</span>
            </td>
          </tr>
        ))
      : null;
    /* 标签 */
    const tags = temp.tags
      ? temp.tags.map((item, index) => <span key={index}>{item}</span>)
      : null;
    /* 用户头像和用户名 */
    const face = temp.creator ? temp.creator.avatarUrl : null;
    const name = temp.creator ? temp.creator.nickname : null;
    /* 歌单创建时间 */
    const publishTime = temp.createTime
      ? new Date(temp.createTime).toLocaleDateString().split("/").join("-")
      : "";
    return (
      <div className="paylist-detail">
        <div className="description">
          <img src={temp.coverImgUrl} alt={temp.name} />
          <div className="introduce">
            <p>{temp.name}</p>
            <p className="account">
              <img src={face} alt={name} />
              <span>{name}</span>
              <span>{publishTime}</span>
            </p>
            <p>
              <button onClick={() => this.getMusicInfo(temp.tracks[0].id, 0)}>播放</button>
              <button>收藏({temp.subscribedCount})</button>
              <button>分享({temp.shareCount})</button>
              <button>下载</button>
              <button>评论({temp.commentCount})</button>
            </p>
            <p>{tags}</p>
            <p className={this.state.active ? "active" : ""}>
              {temp.description}
            </p>
            <span onClick={() => this.triggerActiveHandel()}>
              {this.state.active ? "展开" : "收起"}
            </span>
          </div>
        </div>
        <div className="ListTitle">
          <p>
            歌曲列表<span>{temp.trackCount}首歌</span>
          </p>
          <p>
            播放:<span>{temp.playCount}</span>次
          </p>
        </div>
        <table border="0">
          <tbody>
            <tr>
              <td>序号</td>
              <td>歌曲标题</td>
              <td>时长</td>
              <td>歌手</td>
              <td>专辑</td>
            </tr>
            {detail}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connectComponent(withRouter(Introduce));
