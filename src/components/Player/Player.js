import { Component } from "react";
import { connectComponent } from "../../store/store";
import "./player.scss";
import { getRequest } from "../../Network/BaseConfig";
import { FormVerifyTime } from "../Section/FormVerify/formVerify";
// import { debounce } from "../../components/Utils/debounce"

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: null, currentTime: 0, audio: null };
  }
  componentDidMount() {
    this.setState({ audio: this.refs.audio });
  }
  ControllerMusic = async (type) => {
    (await type) === "IncrementMusicIndex"
      ? this.props.IncrementMusicIndex()
      : this.props.AttenuationMusicIndex(); // 先控制Index
    let nextMusicId = this.props.playlist[this.props.index].id; // 再获取
    getRequest(`/song/url?id=${nextMusicId}`).then(async (res) => {
      let newvalue = await res.data.data[0].url;
      this.props.updatePlayerLocation({
        type: "updatePlayerLocation",
        newvalue,
      });
    });
  };
  componentWillReceiveProps() {
    const audio = this.state.audio;
    const MusicIsEnd = () => {
      this.setState({ currentTime: audio.currentTime });
      if (audio.ended) {
        this.ControllerMusic("IncrementMusicIndex");
      }
    };
    // clearInterval(this.state.timer);
    this.setState({
      timer: setInterval(MusicIsEnd, 1000),
    });
  }
  /* 下一首歌 */
  tiggerToNext = () => {
    if (this.props.playlist.length) {
      this.ControllerMusic("IncrementMusicIndex");
    }
  };
  /* 上一首歌 */
  tiggerToPre = () => {
    if (this.props.playlist.length) {
      this.ControllerMusic("AttenuationMusicIndex");
    }
  };

  start = () => {
    if (this.props.playlist.length) {
      this.state.audio.play();
    }
  };
  paused = () => {
    if (this.props.playlist.length) {
      this.state.audio.pause();
    }
  };
  render() {
    const flag = this.state.audio ? this.state.audio.paused : "";
    const currentTime = this.state.currentTime ? this.state.currentTime : "";
    const playlist = this.props.playlist;
    const duration = playlist.length > 0 ? playlist[this.props.index].dt : "";
    const imgUrl = playlist.length ? playlist[this.props.index].al.picUrl : "";
    const song =
      playlist.length > 0 ? playlist[this.props.index].name : "暂无播放歌曲";
    const songer = playlist.length ? playlist[this.props.index].ar[0].name : "";
    const progressValue =
      ((currentTime * 1000) / duration) * 100 >= 100
        ? 100
        : ((currentTime * 1000) / duration) * 100;
    return (
      <div className="player">
        <audio
          ref="audio"
          autoPlay
          src={this.props.audioPlayerLocation}
          type="mp3"
        />
        <div className="player-app">
          <div className="event-controller">
            <span onClick={() => this.tiggerToPre()}>{"<"}</span>
            <span className={flag ? "" : "flag"} onClick={this.start}></span>
            <span className={flag ? "flag" : ""} onClick={this.paused}></span>
            <span onClick={() => this.tiggerToNext()}>{">"}</span>
          </div>
          <div className="gui-contorller">
            {imgUrl ? <img src={imgUrl} alt="face" /> : null}
            <div className="progress">
              <p style={{ width: progressValue + "%" }}></p>
              <span
                className="circle-progress"
                style={{ left: progressValue + "%" }}
              ></span>
              <span className="duration">
                {currentTime ? FormVerifyTime(currentTime * 1000) : "00:00"} /
                {duration ? FormVerifyTime(duration) : "00:00"}
              </span>
              <span className="songName">
                {song}&nbsp;&nbsp;-&nbsp;&nbsp;{songer}
              </span>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default connectComponent(Player);
