import { Component } from 'react'
import { getRequest } from "../../../../Network/BaseConfig"
import "./songer.scss";

class Songer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songerInfoList: []
        }
    }
    componentDidMount() {
        getRequest("/artist/list?type=-1&area=7&limit=5").then(async res => {
            const statusCode = await res.data.code;
            statusCode === 200 ? this.setState({songerInfoList:res.data.artists}) :
            console.log();
        });
    }
    /* 歌手详情页 */
    getSongerDetail = (info) => {
        console.log(info);
    }
    render() {
        /* 歌手信息 */
        const songerInfo = this.state.songerInfoList.map((item, index) => (
            <li key={index} onClick={() => this.getSongerDetail(item.accountId)}>
            <img src={item.img1v1Url} alt={item.name}/>
            <div>
            <h4>{item.name}</h4>
            </div>
            </li>
        ));
     return(
         <div className="songer">
            <div className="songers_title">
                <p>入驻歌手<span>查看全部</span></p>
            </div>
           <ul>
           {songerInfo}
           </ul>
           <button>申请成为网易云音乐人</button>
         </div>
     );   
    }
}

export default Songer;