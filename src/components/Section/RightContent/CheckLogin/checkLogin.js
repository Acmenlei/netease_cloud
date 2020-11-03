import {Component} from 'react'
import "./checkLogin.scss";

class CheckLogin extends Component {
    render() {
        return(
        <div className="right-content">
            <div className="isCheckLogin">
                <div className="noLogin">
                    <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                    <button>用户登录</button>
                </div>
                <div className="Logined">
                </div>
            </div>

        </div>
        );
    };
}

export default CheckLogin;