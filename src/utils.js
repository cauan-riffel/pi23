export const imgPath="/src/img/";
export function getTop(el){
	if(typeof el===typeof []){
		let arr=[];
		if(el.length===0)return null;
		for(let e of el){
			arr.push(g(e).getBoundingClientRect().top)
		}
		return arr;
	}
	return g(el).getBoundingClientRect().top;
}
export const g=(id)=>document.getElementById(id);
export const move=(l)=>window.scroll(0,l,{behavior:"smooth"});
export function resize(aw,bp,callback){
	let w=window.innerWidth;
	if(aw>bp&&w<=bp){
		callback(w);
	}else if(aw<=bp&&w>bp){
		callback(w);
	}
}
