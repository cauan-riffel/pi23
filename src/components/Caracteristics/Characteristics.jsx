import React from "react";
import './Characteristics.css';

export default function Characteristics({title:t,lis}){
	const li=[];

	for(let l in lis){
		li.push(<li key={"li"+String(l)+String(Math.floor(Math.random()*1000%300))}>{lis[l]}</li>);
	}

	return(
		<ul id="characteristic">
			<li>{t}</li>
			<ul>
				{li}
			</ul>
		</ul>
	);
}
