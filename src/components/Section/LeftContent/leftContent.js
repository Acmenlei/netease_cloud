import  { Component } from 'react'
import PayList from "./payListItem/payListItem"
import AlbumList from "./albumLists/albumList"
import TopList from "./TopList/TopList"

class LeftContent extends Component {
    render() {
        return(
            <div className="LeftContent"> 
            <PayList 
                paylists={this.props.paylists}
                navigatorTags={this.props.navigatorTags}/>
            <AlbumList/>
            <TopList/>
            </div>
        );
    }
}

export default LeftContent