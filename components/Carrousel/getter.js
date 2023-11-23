import cauan from './img/cauan.svg';
import ternero from './img/ternero.svg';

const _dict={0:cauan,ternero};
export default function getImage(img){
	return _dict[img];
}
