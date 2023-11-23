import React from 'react';
import './modal.css';
import { g } from '../../utils';

export default function Modal({content:c,show:s,changeShow:cs}){
	function update(t){
		if(t.target===g('modalBg'))cs({child:null,show:false});
	}
	let modal=g('modalBg');
	if((modal||(modal=g('modal'))) && (s||!s&&modal.classList[0]!=='defaultModalBg')){
		if(s){
			let rVal=Math.floor(Math.random()*10)%4;
			document.body.classList=['noScroll']
			modal.classList=['showModalBg'];
			setTimeout(()=>modal.lastChild.classList=['showMC'+(rVal===0?'left':rVal===1?'right':rVal===2?'top':'button')],500);
		}else{
			let rVal=Math.floor(Math.random()*10)%4;
			modal.lastChild.classList=['hideMC'+(rVal===0?'left':rVal===1?'right':rVal===2?'top':'button')];
			setTimeout(()=>{
				modal.lastChild.classList=['defaultModalContent'];
				modal.classList=['hideModalBg'];
			},1000);
			setTimeout(()=>{
				modal.classList=['defaultModalBg']
				document.body.classList=[];
			},1500);
		}
	}


	return(
		<div id="modalBg" className='defaultModalBg' onClick={(t)=>update(t)}>
			<div id="modalContent" className='defaultModalContent'>
				<button id='btn' onClick={()=>cs({child:null,show:false})}>X</button>
				{c}
			</div>
		</div>
	);
}
