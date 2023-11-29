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
		alt="none",
		reversed:r=false,
		backGroundColor:bg,
		centered:ce=false,
		imageInTop:it=false,
		forms:f=false
	}
){
	id||console.log(id+" Need pass id");
	t||id==='quiz'||console.log(id+" Need pass title");
	st||console.log(id+" Need pass subTitle");
	!mc||(mc&&sc)||console.log(id+" Need pass show content");
	img||console.log(id+" Need pass img");

	let [availW,changeW]=useState(window.innerWidth);

	const lVal=<div className="lateralValues">
		<h1 dangerouslySetInnerHTML={{ __html: t }}></h1>
		<p className="p">{st}</p>
		{mc!=null?<input type="button" value={id==='quiz'?"Acesse":"Leia mais"} onClick={()=>sc({child:mc,show:true,name:id==='quiz'?'quiz':null})} id={id+"btn"} className="btn"/>:null}
	</div>,
		_img=<img src={getImage(img)} alt={alt} />;

	window.addEventListener('resize',()=>resize(availW,660,changeW));

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
