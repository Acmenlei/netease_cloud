import React from 'react';
import './header.css';
import favicon from '../../assets/images/favicon.ico';

 class Header extends React.Component {
    constructor() {
        super();
        this.state = { }
    }
    render() {
        return (
            <div id = "navigation">
                <ul>
                    <li><h2><img src={favicon} alt='首页'/>网易云音乐</h2></li>
                    <li>发现音乐</li>
                    <li>我的音乐</li>
                    <li>朋友</li>
                    <li>商城</li>
                    <li>音乐人</li>
                    <li>下载客户端</li>
                </ul>
                <ul>
                    <li className='search'><input type='text' placeholder='输入搜索内容'/></li>
                    <li className='builder'>创作者中心</li>
                    <li className='login'>登录</li>
                </ul>
                </div>
        );   
    }
}

export default Header;