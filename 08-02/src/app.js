// import 'goodsSort';
// import 'inputField';

import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import './common/style/goodsSort.css';

import goodsSortData from './common/data/goodsSortData';


class App extends Component{

	constructor(props){
		super(props);
		this.state = {
			selected: []
		}
	}

	onSelected = (elt, order)=>{

		let {selected} = this.state;

		let inThere = selected.some( (elt)=>elt.order===order );

		if(inThere){
			selected = selected.map(item=>{
				if(item.order===order){
					item.item = elt;
				}
				return item;
			})
		}else {
			selected.push({item: elt, order});
		};

		selected.sort( (a,b)=>a.order-b.order );

		this.setState({
			selected
		});

	}

	onDelete = (order)=>{
		console.log(order);
		let {selected} = this.state;

		selected = selected.filter( (elt)=>{
			return elt.order!==order;
		});

		this.setState({
			selected
		});

	}

    render(){

		let {selected} = this.state;

		let selectedComp = selected.map( (elt)=>{
			return (
				<mark
					key={elt.item.id}
				>
					{elt.item.desc}
					<a
						onClick={(ev)=>{
							ev.preventDefault();
							ev.stopPropagation();
							this.onDelete(elt.order);
						}}
					href="">x</a>
				</mark>
			)
		} );

		let comp = goodsSortData.map( (elt)=>{
			return (
				<li
					key={elt.id}
				>
					{elt.sort}
					{
						elt.data.map( (item)=>{
							return (
								<a
									key={item.id}
									className={ selected.some(elt=>elt.item.id === item.id) ? 'active':''}
									onClick={()=>this.onSelected(item, elt.order)}
									href="javascript:;"
								>{item.desc}</a>
							)
						} )
					}
				</li>
			);
		} );

        return (
			<div id="wrap">
				<section id="section">
					<nav id="choose">
		                你的选择:
						{selectedComp}
					</nav>
					<ul id="type">
						{comp}
					</ul>
				</section>
			</div>
        )
    }
}


ReactDOM.render(
	<App></App>
    ,
    document.getElementById('root')
);
