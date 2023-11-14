import React from "react";
export default function Carrousel({names:n,images:img,backGroundColors:bg,descriptions:d}){
	const parts=[];
	{
		let l=n.length,x;
		for(x=0;x<l;x++){
			parts.push(
				<div id="person" key={`_img${x}`} className="show">

				</div>
			);
		}
	}



	return(
		<div id="carrousel" >
			<img src={img} alt={n+"photo"} />
		</div>
	);
}
