var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header'
import ComponentFooter from './components/footer'
import BodyIndex from './components/bodyindex'

import 'antd/dist/antd.css';

export default class Index extends React.Component{
  render(){
    //可以定义一个参数，用参数传递
    var component = <ComponentHeader />
    /*做一些判断，如根据不同的状态，显示不同的组件
		var component;
		if (用户已登录) {
			component = <ComponentLoginedHeader/>
		}
		else{
			component = <ComponentHeader/>
		}
    */
    return(
      <div>
        {component}{/*用参数显示 */}
        <BodyIndex userid={1}/>
        <div>{this.props.children}</div>
        <ComponentFooter />
      </div>
      
    )
  }
}

