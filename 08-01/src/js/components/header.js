import React from 'react';
import {Link} from 'react-router'
export default class ComponentHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            miniHeader:false,
        }
    }
    switchHeader(){
        this.setState({
            miniHeader: !this.state.miniHeader
        })
    }
    render(){
        const styleComponentHeader = {
            header:{
                backgroundColor:"#333",
                color:"#fff",
                "paddingTop":(this.state.miniHeader) ? "2px" : "10px",
                paddingBottom:(this.state.miniHeader) ? "2px" : "10px"
            }
        }
        return(
            // <header style={styleComponentHeader.header} className="smallFontSize" onClick={this.switchHeader.bind(this)}>
            //     <h1>这里是头部</h1>
            // </header>
            <header style={styleComponentHeader.header} className="smallFontSize">
                <h1>这里是头部</h1>
                <ul>
                    {/* `/list`和'/details'都可以啊*/}
                    <li><Link to={`/`}>首页</Link></li>
                    <li><Link to={`/list/1234`}>列表页面</Link></li>
                    <li><Link to={'/details'}>嵌套的详情页面</Link></li>
                </ul>
            </header>
        )
    }
}