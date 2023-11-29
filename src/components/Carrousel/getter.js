import cauan from './img/cauan.svg';
import maria from './img/maria.svg';
import bruna from './img/bruna.svg';
import rosemara from './img/rosemara.svg';

import ternero from './img/ternero.svg';

const _dict={0:cauan,2:bruna,4:maria,5:rosemara,ternero};
export default function getImage(img){
	return _dict[img];
}
