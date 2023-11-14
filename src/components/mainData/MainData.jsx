import React, { useState } from "react";
import "./MainData.css";
import { resize } from "../../utils";
import getImage from "./getter";

export default function MainData(
	{
		id,
		image:img,
		title:t,
		subTitle:st,
		mainContent:mc,
		showContent:sc,
		button:btn=false,
		carousel:ca=false,
		alt="none",
		reversed:r=false,
		backGroundColor:bg,
		centered:ce=false,
		imageInTop:it=false,
		forms:f=false
	}
){
	if(!ca){
		id||console.log("Need pass id");
		t||console.log("Need pass title");
		st||console.log("Need pass subTitle");
		mc||console.log("Need pass mainContent");
		!btn||(btn&&sc)||console.log("Need pass show content");
		img||console.log("Need pass img");
	}else{

	}

	let [availW,changeW]=useState(window.innerWidth);

	const lVal=<div className="lateralValues">
		<h1>{t}</h1>
		<p className="p">{st}</p>
		{btn?<input type="button" value="leia mais" onClick={()=>sc(id)} className="btn"/>:null}
	</div>,
		_img=<img src={getImage(img)} alt={alt} />;

	window.addEventListener('resize',()=>resize(availW,660,changeW));
	if(bg){
		console.log("backgroundConolor: "+bg||"white")
	}
	if(!ce&&availW>660){
		return(
			<div style={{backgroundColor:bg||"white"}} id={id} className={(r?"reversed":"normal")+" mainContent"}>
				{(r&&availW>660)||ce?_img:lVal}
				{(r&&availW>660)||ce?lVal:_img}
			</div>
		);
	}

	return(
		<div style={{backgroundColor:bg||"white"}} id={id} className="centered mainContent">
			{it?_img:lVal}
			{it?lVal:_img}
		</div>
	);


}
