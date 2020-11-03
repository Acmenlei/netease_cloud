import {Component} from 'react'
import {getRequest} from "../../../../Network/BaseConfig";
import Title from "../SongGroupTitle/Title"
import "./TopList.scss";

class TopList extends Component {
    constructor(props) {
        super(props);
        this.state = {TopList:[]}
    }
    componentDidMount() {
        getRequest("/toplist").then(async res => {
           const statusCode = res.data.code; 
           if(statusCode === 200) {
            console.log(res.data);
           }
        });
    }
    render() {
     return(
         <div className="TopList">
            <Title titleName="榜单"/>
         </div>
     );   
    }
} 

export default TopList;