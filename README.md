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
## 3.注释
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

## 4.组件 & Props
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
## 5.状态state
- 构造函数是唯一能够初始化 this.state 的地方；
- 直接更新状态不会重新渲染组件，如：
```
this.state.comment = 'Hello';
```
应当使用 setState()设置状态，如：
```
this.setState({comment: 'Hello'});
```
#### Props和State

- Props是组件实例的标签属性的集合；它可以接收组件外传进来的值，在组件内部是不可修改Props的属性的，在组件外部可以通过标签属性给它赋值，所以可以用来从组件外部给组件内部传值；
- State是组件实例的内部数据的集合；在组件内部是可以更改State的属性的值，且每次更改后，都会触发render方法渲染组件；
- 组件的标签属性在使用前不用先定义；而组件的内部数据State的属性在使用前需要先通过getInitialState方法定义；
