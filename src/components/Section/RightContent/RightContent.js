import  { Component } from 'react'
import CheckLogin from "./CheckLogin/checkLogin"
import Songer from "./Songer/Songer"

class LeftContent extends Component {
    render() {
        return(
            <div className="LeftContent"> 
            <CheckLogin/>
            <Songer/>
            </div>
        );
    }
}

export default LeftContent