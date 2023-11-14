import React from "react";
import './BurgerBtn.css';
import { g } from "../../utils";

export default function BurgerBtn({selected:s,action:a}){
	s!==null||console.log("selected need be passed");
	a||console.log("action need be passed");

	const click=()=>a&&a();
	let _=g('b1');
	if(_&&( !( _.classList[0]&&!s )||_.classList[0] )){
		let [b1,b2,b3]=[_,g('b2'),g('b3')];
		if(s){
			b1.classList=['rotateT'];
			b2.classList=['removeBar'];
			b3.classList=['rotateB'];
		}else{
			b1.classList=['rotateTB'];
			b2.classList=['showBar'];
			b3.classList=['rotateBB'];
		}
	}


	return(
		<div onClick={()=>click()} id="outDiv">
			<div id="b1"></div>
			<div id="b2"></div>
			<div id="b3"></div>
		</div>
	);
}
