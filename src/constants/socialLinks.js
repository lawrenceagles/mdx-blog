import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
const SocialLinks = ({ styleClass }) => {
	return (
		<ul className={styleClass}>
			<li>
				<a href='https://www.facebook.com/lawrence.oputa.1029'>
					<FaFacebookSquare className='social-icon facebook-icon' />
				</a>
			</li>
			<li>
				<a href='https://instagram.com/lawrence_eagles'>
					<FaInstagramSquare className='social-icon dribble-icon' />
				</a>
			</li>
			<li>
				<a href='https://twitter.com/lawrence_eagles'>
					<FaTwitterSquare className='social-icon twitter-icon' />
				</a>
			</li>
		</ul>
	);
};
export default SocialLinks;
