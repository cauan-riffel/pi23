import React,{useState} from "react";
import "./Navbar.css";
import mobileLogo from"./img/mobile_logo.svg"
import desktopLogo from"./img/desktop_logo.svg"
import { move, resize } from "../../utils";
import BurgerBtn from "./BurgerBtn";
import SeeLateralLinks from "./SeeLateralLinks";



export default function Navbar({links:l,locate:lo}){
	let el=document.getElementById("logo");
	function _changeShow(){
		el=el?el:document.getElementById("logo");
		if(el.classList[0]==="hide"){
			el.classList=[show];
		}
		if(!show&&availW<=660){
			el.classList=["hide"];
		}else if(show&&availW<=660){
			el.classList=["show"];
		}
		changeShow(!show);
	}

	l||console.log("Links must be passed");
	lo||console.log("Locate must be passed");

	let fl=[];//finalLinks

	let [availW,changeW]=useState(window.innerWidth),
		[show,changeShow]=useState(false);
	{
		let le=l.length;
		for(let x=0;x<le;x++){
			fl.push(<p key={`nb${x}`} onClick={move(lo[x])} className="link">{l[x]}</p>);
		}
	}

	window.addEventListener("resize",()=>resize(availW,660,changeW));
	return(
		<>
			<div className="navbar">
				{/*{availW>660?require(d):require(m)}*/}
				<img alt="logo" id="logo" src={(availW>660)?desktopLogo:mobileLogo} onClick={()=>move(0)}/>
				{availW>660?null:<div id="burger"><BurgerBtn selected={show} action={()=>_changeShow()}/></div>}
				{availW<=660?null:<nav className="links">{fl}</nav>}
			</div>
			<div id="spacer"></div>
			{availW<=660?<SeeLateralLinks links={fl}show={show}change={()=>_changeShow()}/>:null}
		</>
	);
}
