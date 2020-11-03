import React from 'react';
import './banner.css';
import { getRequest } from '../../Network/BaseConfig';
import Swiper from './ChildComps/SwiperItem/swiperItem';
// import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { banners:[] }
    }
    componentWillMount() {
        getRequest('/banner').then(resData => {
            this.setState({ banners: resData.data.banners })
        })
    }
    render() {
        return(
            <div className="Banner">
            <Swiper banners={this.state.banners} />
            </div>
        );
    }
}

export default Banner;