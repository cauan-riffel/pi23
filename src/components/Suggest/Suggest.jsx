import React, { useState } from "react";
import './Suggest.css';
import image from './img/girl.svg';
import { g } from "../../utils";
import { createSuggestion } from "./getter";

export default function Suggest(){
	async function sendData(){
		if(sending)return;
		change({failse:false,response:null})
		let values=[g('formName').value,g('formEmail').value,g('formSuggest').value];
		if(!values[0]){
			change({failed:true,response:"Campo Nome é obrigatório!"});
			return;
		}
		if(!values[1]){
			change({failed:true,response:"Campo email é obrigatório!"});
			return;
		}
		if(!values[2]){
			change({failed:true,response:"Campo sugestão é obrigatório!"});
			return;
		}
		cs(true);
		let res=await createSuggestion({name:values[0],email:values[1],text:values[2]},);
		if(res.status===201){
			change({failed:false,response:"Sugestão enviada com sucesso!"});
		}else if(res.status===404){
			change({failed:true,response:"Não foi possível conectar-se com o servidor!"});
		}else{
			change({failed:true,response:res.body.error.message});
		}
		cs(false);
	}

	let [response,change]=useState({failed:false,response:null});
	let [sending,cs]=useState(false);

	return(
		<div id="suggest">
			<h1>Sugestões</h1>
			<div id="forms">
				<input type="text" placeholder="Nome" id="formName"/>
				<input type="text" placeholder="Email" id="formEmail"/>
				<input type="text" placeholder="Suggest" id="formSuggest"/>
				<p id="response" className={response.failed?"failed":"successful"}>{response.response}</p>
				{sending?null:<button onClick={()=>sendData()} className="btn">Enviar</button>}
			</div>
			<img src={image} alt="girl showing the forms" />
		</div>
	);
}
