import React from "react";
import './SeeLateralLinks.css';
import { imgPath } from "../utils";

export default function SeeLateralLinks({links:l,show:s,change:c}){
	l||console.log("need pass links!");
	s!==null||console.log("need pass show!");
	c||console.log("need pass change!");


	if(document.getElementById("bg")&&(document.getElementById("bg").classList[0]!=="defaultBg"||s)){
		let em=document.getElementById("bg"),el=document.getElementById("lLinks");
		if(s){
			em.classList=["showBg"];
			setTimeout(()=>el.classList=["showLateral"],250)
		}else{
			el.classList=['hideLateral'];
			setTimeout(()=>em.classList=['hideBg'],250)
		}

	}

	return(
		<div id="bg" className="defaultBg">
			<div id="lLinks" className="defaultLateral">
				<img src={imgPath+'logo.svg'} alt="logo"/>
				{l}
			</div>
		</div>

	);
}
