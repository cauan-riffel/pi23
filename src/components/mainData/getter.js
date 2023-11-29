import c1 from "./img/content1.svg";
import c2 from "./img/content2.svg";
import c3 from "./img/content3.svg";
import c4 from "./img/content4.svg";
import c5 from "./img/content5.svg";
import c6 from "./img/content6.svg";
import c7 from "./img/content7.svg";
import c8 from "./img/content8.svg";
import c9 from "./img/content9.svg";

const _dict={1:c1,2:c2,3:c3,4:c4,5:c5,6:c6,7:c7,8:c8,9:c9}
export default function getImage(content){
	if(_dict[content])return _dict[content];
	return false;
}
