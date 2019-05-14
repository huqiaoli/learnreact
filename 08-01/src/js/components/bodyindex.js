import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodychild';
import ReactMixin from 'react-mixin';
import MixinLog from './mixins';
import { Input } from 'antd'
const defaultProps = {
    nickname:'这是一个默认的用户名'
};
export default class BodyIndex extends React.Component{
    constructor(){
        super();//调用基类的所有的初始化方法
        this.state = {
            name :'parry',
            age:20
        };//初始化赋值
    }
    changeUserInfoAge(){
        this.setState({age:50});
        MixinLog.log();
    }
    changeUserInfo(age){
        this.setState({age:age});
        //第一种方式
        // var mySubmitBotton = document.getElementById('submitButton');
        // console.log(mySubmitBotton);
        // ReactDOM.findDOMNode(mySubmitBotton).style.color = 'red';

        //第二种方式
        console.log(this.refs.submitButton);
        this.refs.submitButton.style.color = 'red';
    }
    handleChildValueChange(event){
        this.setState({age:event.target.value})
    }
    componentDidMount(){
     this.timer = setTimeout(() => {
            //更改 state 
            this.setState({
                name:'arry',
                age:28
            });
        },36000);
    }
    componentWillUnmount(){
        clearTimeout(this.timer)
    }
    //state 对于模块属于自身的属性，初始化可以放置在构造函数 constructor 里this.state = {username: “Parry”};修改 state：this.setState({username:”IMOOC”});
    /*props 对于模块属于外来属性,传递参数： 在被引入模块中添加{this.props.userid} 这里面的userid就是你引用的一个参数，
    然后你就可以在引入该模块的文件中给这个userid进行赋值了：<’被引入的模块’ userid={1}/>，这样就可以传递参数了,模块中接受参数：this.props.userid*/
    render(){
        var userName = 'hello';
        var boolInput = false;
        
        return(
            <div>
                <h2>页面的主体内容</h2>
                {/*三元表达式*/}
                <p>{userName === '' ? '用户还没有登录':'用户名：' + userName}</p>
                <input type='button' value={userName} disabled={boolInput} />
                <p>{this.state.name} {this.state.age} {this.props.userid} {this.props.nickname}</p>
                <BodyChild {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)} />
                <Input placeholder="Basic usage" />
                <input type='button' value='提交' onClick={this.changeUserInfoAge.bind(this)} />
                <input id="submitButton" ref="submitButton" type='button' value='提交' onClick={this.changeUserInfo.bind(this,99)} />
            </div>
        )
    }
}
BodyIndex.propTypes = {
    userid:React.PropTypes.number.isRequired
};
BodyIndex.defaultProps = defaultProps;//当页面（BodyIndex）没有传递参数（nickname）的时候，会显示默认的值
ReactMixin(BodyIndex.prototype,MixinLog);