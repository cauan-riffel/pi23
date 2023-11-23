export function getTop(el){
	if(typeof el===typeof []){
		let arr=[];
		if(el.length===0)return null;
		for(let e of el){
			arr.push(g(e).getBoundingClientRect().y)
		}
		return arr;
	}
	return g(el).getBoundingClientRect().y;
}
export const g=(id)=>document.getElementById(id);
export const move=(l)=>window.scrollTo({top:l!==0?window.scrollY+l:0,behavior:"smooth"});
export function resize(aw,bp,callback){
	let w=window.innerWidth;
	if(aw>bp&&w<=bp){
		callback(w);
	}else if(aw<=bp&&w>bp){
		callback(w);
	}
}
