export const imgPath="/src/img/";
export function getTop(el){
	if(typeof el===typeof []){
		let arr=[];
		if(el.length===0)return null;
		for(let e of el){
			arr.push(document.getElementById(e).getBoundingClientRect().top)
		}
		return arr;
	}
	return document.getElementById(el).getBoundingClientRect().top;
}
