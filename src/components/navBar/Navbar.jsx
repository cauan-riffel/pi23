import React,{useState} from "react";
import "./Navbar.css";
import mobileLogo from"./img/mobile_logo.svg"
import desktopLogo from"./img/desktop_logo.svg"
import { g, getTop, move, resize } from "../../utils";
import BurgerBtn from "./BurgerBtn";
import SeeLateralLinks from "./SeeLateralLinks";



export default function Navbar({links:l,locate:lo}){
	let el=g("logo");
	function _changeShow(){
		el=el?el:g("logo");
		if(el.classList[0]==="hide"){
			el.classList=[show];
		}
		if(!show&&availW<=740){
			el.classList=["hide"];
		}else if(show&&availW<=740){
			el.classList=["show"];
		}
		changeShow(!show);
	}

	l||console.log("Links must be passed");
	lo||console.log("Locate must be passed");

	let fl=[];

	let [availW,changeW]=useState(window.innerWidth),
		[show,changeShow]=useState(false);
	{
		let le=l.length;
		for(let x=0;x<le;x++){
			fl.push(<p key={`nb${x}`} onClick={()=>move(getTop(lo[x])-availW*0.06)} className="link">{l[x]}</p>);
		}
	}

	window.addEventListener("resize",()=>resize(availW,740,changeW));
	return(
		<>
			<div className="navbar">
				<img alt="logo" id="logo" src={(availW>740)?desktopLogo:mobileLogo} onClick={()=>move(0)}/>
				{availW>740?null:<div id="burger"><BurgerBtn selected={show} action={()=>_changeShow()}/></div>}
				{availW<=740?null:<nav className="links">{fl}</nav>}
			</div>
			<div id="spacer"></div>
			{availW<=740?<SeeLateralLinks links={fl}show={show}change={()=>_changeShow()}/>:null}
		</>
	);
}
