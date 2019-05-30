import React, { Component } from 'react';
import './index.css';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      currentVal: '',
      dataList: []
    }


  }

  handleInput=(ev)=>{

    this.setState({
      currentVal: ev.target.value
    });
  }

  submitData=()=>{
    let {currentVal, dataList} = this.state;

    if(currentVal.trim() !== ''){
      this.setState({
        dataList: [
          {
            id: Math.random(),
            content: currentVal.trim()
          },
          ...dataList
        ],
        currentVal: ''
      })
    }

  }

  deleteOneData=(id)=>{
    let {dataList} = this.state;

    this.setState({
      dataList: dataList.filter(elt=>{
        return elt.id !== id ;
      })
    })

  }


  render() {

    let {currentVal, dataList} = this.state;



    return (
      <div className="dataHandle">
        <textarea
          rows="7"
          className="inputArea"
          value={currentVal}
          onChange={this.handleInput}
        ></textarea>
        <button
          className="submitButton"
          onClick={this.submitData}
        >
          提交
        </button>
        <ul className="listWrap">
          {dataList.map((elt, i)=>{
            return (
              <li key={elt.id}>
                <span>
                  {i+1} &nbsp;
                  {elt.content}
                </span>
                <button
                  onClick={()=>this.deleteOneData(elt.id)}
                >删除</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
