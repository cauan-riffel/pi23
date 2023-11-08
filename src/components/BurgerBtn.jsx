import React from "react";
import './BurgerBtn.css';
export default function BurgerBtn({selected:s,action:a}){
	function click(){
		let [b1,b2,b3]=[document.getElementById('b1'),document.getElementById('b2'),document.getElementById('b3')];
		if(!s){
			b1.classList=['rotateT'];
			b2.classList=['removeBar'];
			b3.classList=['rotateB'];
			a&&a();
		}else{
			b1.classList=['rotateTB'];
			b2.classList=['showBar'];
			b3.classList=['rotateBB'];
			a&&a();
		}
	}
	s!==null||console.log("selected need be passed");
	a||console.log("actions need be passed");

	return(
		<div onClick={()=>click()} id="outDiv">
			<div id="b1"></div>
			<div id="b2"></div>
			<div id="b3"></div>
		</div>
	);
}
