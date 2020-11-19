import { createStore } from "redux";
import { connect } from "react-redux";

const reducer = (
  state = {
    audioPlayerLocation: "", // 当前音乐的播放地址
    playlist: [], // 当前音乐歌单的音乐
    index: 0, // 当前播放音乐的下标值
  },
  action
) => {
  switch (action.type) {
    case "updatePlayerLocation":
      state.audioPlayerLocation = action.newvalue;
      /* 根据情况赋值 */
      if (action.playlist) {
        state.playlist = action.playlist;
      }
      if (action.index != null) {
        state.index = action.index;
      }
      break;
    case "IncrementMusicIndex":
        state.index + 1 >= state.playlist.length
        ? (state.index = 0)
        : (state.index += 1)
      break;
      case "AttenuationMusicIndex":
        state.index - 1 < 0
        ? (state.index = state.playlist.length - 1)
        : (state.index -= 1)
      break;
    default:
  }
  return { ...state };
};
const store = createStore(reducer);

/* 将数据映射到组件的props */
const mapStateToProps = (state) => {
  return {
    audioPlayerLocation: state.audioPlayerLocation,
    playlist: state.playlist,
    index: state.index,
  };
};

/* 将修改数据的方法映射到组件的props */
const mapDispatchToProps = (dispatch) => {
  return {
    updatePlayerLocation: (props) => dispatch(props),
    IncrementMusicIndex: () => dispatch({ type: "IncrementMusicIndex" }),
    AttenuationMusicIndex: () => dispatch({ type: "AttenuationMusicIndex" }),
  };
};

const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export { store, connectComponent };
