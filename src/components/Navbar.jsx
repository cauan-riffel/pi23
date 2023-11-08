import React,{useState} from "react";
import "./Navbar.css";
import { imgPath } from "../utils";
import BurgerBtn from "./BurgerBtn";
import SeeLateralLinks from "./SeeLateralLinks";

export default function Navbar({links,locate}){
	function move(l){
		window.scroll(0,l,{behavior:"smooth"});
	}
	function _resize(){
		let w=window.innerWidth;
		if(availW>660&&w<=660){
			changeW(w);
		}else if(availW<=660&&w>660){
			changeW(w);
		}
	}
	function _changeShow(){
		console.log(show);
		if(!show&&availW<=660){
			document.getElementById("logo").classList=["hide"];
		}else if(show&&availW<=660){
			document.getElementById("logo").classList=["show"];
		}
		changeShow(!show);
	}

	window.addEventListener("resize",_resize);
	let [availW,changeW]=useState(window.innerWidth),
		[show,changeShow]=useState(false)

	let li=links||console.log("Links must be passed")||['undefined links'],
		lo=locate||console.log("Locates must be passed")||[null],
		fl=[];//finalLinks
	for(let x=0;x<li.length;x++){
		fl.push(<p key={`nb${x}`} onClick={move(lo[x])} className="link">{li[x]}</p>);
	}

	return(
		<>
			<div className="navbar">
				<img alt="logo" id="logo" src={(availW>660)?imgPath+'logo.svg':imgPath+'mobile.svg'} onClick={()=>move(0)}/>
				{availW>660?null:<BurgerBtn selected={show} action={()=>_changeShow()}/>}
				{availW<=660?null:<nav className="links">{fl}</nav>}
			</div>
			{availW<=660?<SeeLateralLinks links={fl}show={show}change={()=>_changeShow()}/>:null}
		</>
	);
}
