## 1. Hello world
ReactDom.render接受两个参数，第一个是要被插入的内容，第二个是插入到DOM或者说index.html的位置
## 2.在 JSX 中使用表达式

- JSX 结构中使用花括号{}插入表达式（注意只能是表达式，for循环之类的代码段就无法插入）
- 但可以使用 conditional (三元运算) 表达式来替代,jsx 中的 三元表达式 其实就是一句完整的表达式，所以可以被 识别。if语句以及for循环不是js表达式，不能直接作为表达式    写在{}中， 但可以先将其赋值给一个变量（变量是一个js表达式）
- 可以在JSX中嵌入任意js表达式内容( 包括 函数，jsx 结构，变量，对象，表达计算式 ) 
- 从底层上讲，JSX编译后会变成js函数调用或js对象。因此，允许在if语句、loop语句、赋值语句中使用JSX，甚至可以将它们作为参数、函数返回值使用。
- 如果 JSX 中的XML带有换行，则推荐，有XML的外面加上一个小括号，这样可以防止 分号自动插入 的bug；
- 在JSX中的XML，通过引号定义以字符串为值的标签属性，通过大括号来定义以 js 表达式为值的标签属性；切注意：如果使用了大括号包裹的 js 表达式时就不要再到外面套引号了。JSX 会将引号当中的内容识别为字符串而不是表达式；
- JSX不允许没有闭合的标签；
- 因为 JSX 的特性更接近 js 而不是 HTML , 所以 XML 使用 camelCase 小驼峰命名 来定义属性的名称，而不是使用 HTML 的属性名称;例如：class 用 className 代替，而 tabindex 用 tabIndex 代替；

## 3.react样式、类使用
##### className 引入多个类

```
// 三目运算，结果包含多个类
<div className={index === this.state.active ? "active title" : 'title'}>
标题
</div>

// 使用数组的join方法组合class
<div className={["container tab", index===this.state.currentIndex?"active":null].join(' ')}>此标签是否选中</div>

// 使用`${}`字符串运算
<div className={`container tab ${index===this.state.currentIndex?"active":null}`}>此标签是否选中</div>

```
##### 引入css样式，设置className
css文件的内容

```
.sty1{//和普通CSS一样定义class选择器
    background-color: red;
    color: white;
    font-size: 40px;
}
```
引入css文件的用法

```
import './style.css';
<div className="sty1">看背景颜色和文字颜色</div>
```
##### JSX中的style属性应该使用“驼峰”命名

```
<div style={{"marginLeft": "100px"}}>
	<div style={{"fontSize":"16px","lineHeight":"1.8"}}>可比克黄瓜薯片</div>
	<div style={{"lineHeight":"1.8"}}>售价：8 元</div>
	<div style={{"clear": "both"}}></div>
</div>
```
{{"lineHeight":"1.8"}} 最外面的{}表示jsx的运算符，里面的{}表示是接收一个JSON对象值
##### style属性接收一个JSON对象

```
let backAndTextColor = {
    backgroundColor:'red',
    color:'white',
    fontSize:40
};
<div style={backAndTextColor}>看背景颜色和文字颜色</div>
```
## 4.注释
```
ReactDOM.render(
    <div>
    {/*注释...*/}
     </div>,
    document.getElementById('example')
);
```
由于JSX的本质是JavaScript，所以在JSX中的注释还是JavaScript的注释；为了JSX的XML中使用注释，所以需要用先用花括号{}产生JavaScript环境，然后在{}内使用JavaScript注释；

所以

- 在标签内部的注释需要花括号{}括住；
- 在标签外的注释不使用花括号{}；

## 5.组件 & Props
- 定义一个组件最简单的方式是使用js函数，之所以称这种类型的组件为函数定义组件
- 从概念上看组件就像是函数，它可以接收任意的输入值（称之为“props”），并返回一个需要在页面上展示的React元素；
- 也可以使用 ES6 class 来定义一个组件
- 当React遇到的元素是用户自定义的组件，它会将JSX属性作为单个对象传递给该组件，这个对象称之为“props”
- 组件的返回值只能有一个根元素
- 无论是使用函数或是类来声明一个组件，它决不能修改它自己的props
    #### 组件渲染
    ###### React元素是DOM标签
    
    ```
    const element = <div />;
    ```
    
    React元素也可以是用户自定义的组件
    
    ```
    const element = <Welcome name="Sara" />;
    ```
    ###### 组件
注意：

1、所有组件类都必须有自己的 render 方法，用于输出组件；

2、组件类的第一个字母必须大写；
	  
3、组件类只能包含一个顶层标签；
	  
4、组件的属性可以在组件类的 this.props 对象上获取，比如 name 属性就可以通过 this.props.name 读取；
	  
5、添加组件属性，有一个地方需要注意，就是 class 属性需要写成 className ，for 属性需要写成 htmlFor
## 6.状态state
- 构造函数是唯一能够初始化 this.state 的地方；
##### 1、不要直接更新状态
例如，此代码不会重新渲染组件：
```
// Wrong
this.state.comment = 'Hello';
```
应当使用 setState()设置状态，如：
```
// Correct
this.setState({comment: 'Hello'});
```
##### 2、状态更新可能是异步的
React 可以将多个 setState() 调用合并成一个调用来提高性能。

因为 this.props 和 this.state 可能是异步更新的，你不应该依靠它们的值来计算下一个状态。

例如，此代码可能无法更新计数器：

```
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```
要修复它，请使用第二种形式的 setState() 来接受一个函数而不是一个对象。

该函数将接收先前的状态作为第一个参数，将此次更新被应用时的props做为第二个参数：

```
// Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
```
上方代码使用了箭头函数，但它也适用于常规函数：

```
// Correct
this.setState(function(prevState, props) {
  return {
    counter: prevState.counter + props.increment
  };
});
```
##### 3、状态更新合并
当你调用 setState() 时，React 将你提供的对象合并到当前状态。

例如，你的状态可能包含一些独立的变量：

```
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
```
你可以调用 setState() 独立地更新它们：

```
componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
```
这里的合并是浅合并，也就是说 this.setState({comments}) 完整保留了 this.state.posts，但完全替换了 this.state.comments
#### Props和State

- Props是组件实例的标签属性的集合；它可以接收组件外传进来的值，在组件内部是不可修改Props的属性的，在组件外部可以通过标签属性给它赋值，所以可以用来从组件外部给组件内部传值；
- State是组件实例的内部数据的集合；在组件内部是可以更改State的属性的值，且每次更改后，都会触发render方法渲染组件；
- 组件的标签属性在使用前不用先定义；而组件的内部数据State的属性在使用前需要先通过getInitialState方法定义；
## 7.事件处理
- React事件绑定属性的命名采用驼峰式写法，而不是小写。
- 如果采用 JSX 的语法，则需要传入一个函数作为事件处理函数，而不是一个字符串(DOM元素的写法)；
- 不能使用返回 false 的方式阻止默认行为，必须明确的使用 preventDefault 来阻止默认行为；
- 当你使用 ES6 class 语法来定义一个组件的时候，事件处理器会成为类的一个方法,类的方法默认是不会绑定 this 的,例如 
 
```
onClick={this.handleClick}
```

你应该为这个方法绑定 this,

**使用 bind() 函数改变 this 的上下文**

可以在class声明中的constructor()函数中，使用

```
this.handleClick = this.handleClick.bind(this);
```
也可以在具体使用该函数的地方绑定this的上下文

```
<div onClick={this.handleClick.bind(this)}>
  You {text} this. Click to toggle.
</div>
```


**使用es6的箭头函数**

```
<div onClick={() => this.handleClick()}>
  You {text} this. Click to toggle.
</div>
```
#### React 点击事件的 bind(this) 传参

事件：**this.handleclick.bind(this，要传的参数)**

函数：**handleclick(传过来的参数，event)**

## 8.条件渲染
###### 通过条件渲染页面：

首先建一个函数，来根据不同的情况返回不同的值，然后建一个类组建，先进行变量的初始化，对变量进行操作，在组件内进行小的渲染，最后通过 ReactDOM.render() 渲染到页面上。

###### 为什么要进行变量的初始化？

一个软件所分配到的空间中极可能存在着以前其他软件使用过后的残留数据，这些数据被称之为垃圾数据。所以通常情况下我们为一个变量，为一个数组，分配好存储空间之后都要对该内存空间初始化。

简单来说就是清理残留数据。


##### prevState 如何传递？
```
handleToggleClick(){    
  this.setState(prevState=>({ // 这里 prevState 
      showWarning:!prevState.showWarning 
    })
  );
}
```
setState() 可以接收一个函数，这个函数接受两个参数，第一个参数表示上一个状态值，第二参数表示当前的 props：

```
this.setState((prevState, props) => ({
    //do something here
}));
```
##  9.key
###### key的使用需要注意一下几点：
- 数组中的每一项都要有固定的key，以便React区分哪些元素变化(增加/修改/移除),它只是作为React自己识别，并不会传递到组件上
- 一个array创建的elements列表中，item的key应该是独一无二的。
- 注意：react根据keys判断列表的items（项）是否改增删改
- 只能在数组内指定key：元素位于map()方法内时需要设置键属性,准确地说，只能在map()的回调函数中使用key
- key需要在列表范围内保证唯一性：同一个数组中的key需要保证唯一性，但不同数组中的key无所谓
- key不会作为props传入组件：可以认为key是React在JSX中的保留字，你不能用它来向组件传递数据而应该改用其他词

## 10.表单
##### 状态属性
表单元素有这么几种属于状态的属性：
- value，对应 <input> 和 <textarea> 所有
- checked，对应类型为 checkbox 和 radio 的 <input> 所有
- selected，对应 <option> 所有

针对这些状态属性不同的处理策略，表单元素在 React 里面有两种表现形式。

在 HTML 中 <textarea> 的值可以由子节点（文本）赋值，但是在 React 中，是通过 标签属性value来设置它的文本内容的。

表单元素包含以上任意一种状态属性都支持 onChange 事件监听状态值的更改。
##### 受控组件
对于设置了上面提到的对应“状态属性“值的表单元素就是受控表单组件，比如：

```
render: function() {
    return <input type="text" value="hello"/>;
}
```
一个受控的表单组件，它所有状态属性更改涉及 UI 的变更都由 React 来控制（状态属性绑定 UI）。比如上面代码里的 <input> 输入框，用户输入内容，用户输入的内容不会显示（输入框总是显示状态属性 value 的值 hello），这有点颠覆我们的认知了，所以说这是受控组件，不是原来默认的表单元素了。

如果你希望输入的内容反馈到输入框，就要用 onChange 事件改变状态属性 value 的值：

```
getInitialState: function() {
    return {value: 'hello'};
},
handleChange: function(event) {
    this.setState({value: event.target.value});
},
render: function() {
    var value = this.state.value;
    return <input type="text" value={value} onChange={this.handleChange} />;
}
```
使用这种模式非常容易实现类似对用户输入的验证，或者对用户交互做额外的处理，比如截断最多输入140个字符：

```
handleChange: function(event) {
    this.setState({value: event.target.value.substr(0, 140)});
}
```
##### 非受控组件

- 和受控组件相对，如果表单元素没有设置自己的“状态属性”，或者属性值设置为 null，这时候就是非受控组件。
- 它的表现就符合普通的表单元素，正常响应用户的操作。
- 同样，你也可以绑定 onChange 事件处理交互。
- 如果你想要给“状态属性”设置默认值，就要用 React 提供的特殊属性 defaultValue，对于 checked 会有 defaultChecked，<option> 也是使用 defaultValue。

###### select 标签
对于 select 标签，在HTML中，是通过在设置它的选项option元素的标签属性selected来设置被选中的选项的；而在React中，是通过设置 select 元素的标签属性 value 来设置被选中的值的；

所以没有一个 selected 的状态属性

```
<select value="B">
    <option value="A">Apple</option>
    <option value="B">Banana</option>
    <option value="C">Cranberry</option>
</select>
```
你可以通过传递一个数组指定多个选中项：<select multiple={true} value={['B', 'C']}>

## 11.状态提升
React中的状态提升概括来说,就是将多个组件需要共享的状态提升到它们最近的父组件上.在父组件上改变这个状态然后通过props分发给子组件.
