import phone from './img/phone.svg';
import email from './img/email.svg';
import location from './img/location.svg'

import logo from './img/logo.svg';

import instagram from './img/instagram.svg';
import facebook from './img/facebook.svg';
import linkedin from './img/linkedin.svg';
import gmail from './img/gmail.svg';



const _dict={phone,email,location,logo,instagram,facebook,linkedin,gmail};
export default function getImage(img){
	return _dict[img];
}
