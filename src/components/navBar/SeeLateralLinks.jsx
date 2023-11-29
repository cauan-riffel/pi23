import React from "react";
import './SeeLateralLinks.css';
import mobileLogo from"./img/mobile_logo.svg"
import { g, move } from "../../utils";

export default function SeeLateralLinks({links:l,show:s,change:c}){
	function click(t){
		if(t.target===g("bg"))c&&c();
	}

	l||console.log("need pass links!");
	s!==null||console.log("need pass show!");
	c||console.log("need pass change!");

	if(g("bg")&&(g("bg").classList[0]!=="defaultBg"||s)){
		let em=g("bg"),el=g("lLinks");
		if(s){
			em.classList=["showBg"];
			setTimeout(()=>el.classList=["showLateral"],250)
		}else{
			el.classList=['hideLateral'];
			setTimeout(()=>em.classList=['hideBg'],250)
			setTimeout(()=>el.classList=['defaultLateral'],250)
		}
	}
	return(
		<div id="bg" className="defaultBg" onClick={(t)=>click(t)}>
			<div id="lLinks" className="defaultLateral">
				<img src={mobileLogo} alt="logo" onClick={()=>move(0)}/>
				{l}
			</div>
		</div>

	);
}
