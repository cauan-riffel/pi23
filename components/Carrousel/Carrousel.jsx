import React, { useState } from "react";
import "./Carrousel.css";
import { g } from "../../utils";
import getImage from "./getter";

export default function Carrousel({names:n,backGroundColors:bg,descriptions:d}){
	n.length===d.length||console.log("names or descriptions haven't same length");

	function changeView(t,v){
		ca=ca||g("person");
		btns=btns||g("buttons");
		for(const e of btns.children){
			if(e.classList[0]==="selectedBtn"){
				e.classList=["hideBtn"];
				break;
			}
		}
		t.target.classList=["showBtn"];
		ca.classList=["hidePer"];
		setTimeout(()=>{
			if(de)cd(false);
			change(v);
		},450);
	}
	let ca=g("person"),btns=g("buttons");


	const l=n.length,buttons=[];
	let [view,change]=useState(0);
	let [de,cd]=useState(true);


	for(let x=0;x<l;x++){
		buttons.push(
			<div key={`_btn${x}`} id="button" onClick={view===x?null:(t)=>changeView(t,x)} className={view===x?"selectedBtn":""}></div>
		);
	}
	return(
		<div id="carrousel" style={{backgroundColor:bg[view]||"white"}}>
			<h1 id="gradient" className="about">Sobre Nós</h1>
			<div id="person" className={`${de?"defaultPer":"showPer"}${view%2===1?" reversedPer":""}`}>
				<div id="lateralInfos">
					<h1>{n[view]}</h1>
					<p>{d[view]}</p>
				</div>
				<img src={getImage(view)||getImage('ternero')} alt={`${n[view]}'s`} />
			</div>
			<div id="buttons">{buttons}</div>
		</div>
	);
}
