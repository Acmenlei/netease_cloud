import  { Component } from 'react'
import CheckLogin from "./CheckLogin/checkLogin"
import Songer from "./Songer/Songer"
import Anchor from "./Anchor/Anchor"

class LeftContent extends Component {
    render() {
        return(
            <div className="RightContent"> 
            <CheckLogin/>
            <Songer/>
            <Anchor/>
            </div>
        );
    }
}

export default LeftContent