import React from "react";
import "./footer.css";
import getImage from "./getter";
import { move } from "../../utils";


export default function Footer({phone:p,email:e,location:l,socialMedias:sm}){
	function getContacts(){
		let contacts=[];
		let types={'phone':p,'email':e,'location':l};
		for(const c in types){
			if(!types[c])continue;
			let _=[];
			let l=types[c].length;
			for(let x=0;x<l;x++){
				_.push(<p key={"Data"+String(Math.floor(Math.random()*100000%30000))}>{types[c][x]}</p>);
			}
			contacts.push(
				<div key={"Content"+String(Math.floor(Math.random()*100000%30000))}>
					<img src={getImage(c)} alt={c}/>
					<div>
						{_}
					</div>
				</div>
			);
		}
		return contacts;
	}
	function getIcons(){
		const icons=[];
		for(const m in sm){
			icons.push(
				<a href={sm[m]} target="_blank" rel="noreferrer" key={"Icon"+String(Math.floor(Math.random()*100000%30000))}><img src={getImage(m)} alt={m+" icon"} /></a>
			);
		}
		return icons;
	}


	return(
		<div id="footer">
			<h1>Contato</h1>
			<div id="contacts">
				{getContacts()}
			</div>
			<div id="footerLogo">
				<img src={getImage('logo')} alt="Site logo" onClick={()=>move(0)}/>
				<div id="icons">
					{getIcons()}
				</div>
			</div>
			<div id="separator"></div>
			<p id="copyright">© 2023 copyrights by <strong>Home Office</strong>. All Rights Reserved.</p>
		</div>
	);
}
