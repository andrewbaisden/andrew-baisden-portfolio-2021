import React from 'react';

import { useTheme } from '../../context/ThemeContext';

interface NodeJSLogoProps {}

export const NodeJSLogo = ({ ...props }: NodeJSLogoProps) => {
	const { activeTheme } = useTheme();
	return (
		<>
			<div className="logo-container">
				<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M45.9234 1.26951C48.3922 -0.14361 51.6078 -0.149993 54.0745 1.26951C66.484 8.28157 78.8975 15.2826 91.305 22.2989C93.6386 23.6135 95.1996 26.2106 95.1759 28.8997V71.0869C95.1933 73.8872 93.478 76.5465 91.016 77.8312C78.6472 84.8046 66.2847 91.7865 53.9181 98.7599C51.3982 100.201 48.1181 100.09 45.6769 98.5308C41.9688 96.3812 38.2542 94.2422 34.5457 92.0947C33.7879 91.6429 32.9337 91.2833 32.3986 90.5486C32.8716 89.911 33.7174 89.8316 34.4046 89.5532C35.9525 89.061 37.3741 88.2709 38.7961 87.5042C39.1557 87.2582 39.5947 87.3525 39.9394 87.5727C43.1103 89.3908 46.2532 91.2617 49.4347 93.0624C50.1135 93.4543 50.8007 92.934 51.3808 92.6106C63.5184 85.7507 75.6709 78.9167 87.8064 72.0546C88.256 71.8383 88.5046 71.361 88.4681 70.8684C88.4766 56.9518 88.4702 43.0326 88.4723 29.116C88.5238 28.5571 88.2003 28.0433 87.695 27.8145C75.3691 20.8731 63.0496 13.9209 50.7259 6.97767C50.5124 6.83088 50.2594 6.75212 50.0003 6.75174C49.7412 6.75136 49.4881 6.82937 49.2741 6.97554C36.9504 13.9209 24.633 20.8794 12.3092 27.8206C11.8057 28.0497 11.4677 28.555 11.5277 29.116C11.5298 43.0326 11.5277 56.9518 11.5277 70.8706C11.5063 71.1109 11.5591 71.352 11.6789 71.5614C11.7987 71.7708 11.9798 71.9385 12.1979 72.0418C15.4865 73.9067 18.7794 75.7585 22.0702 77.617C23.9241 78.6149 26.2003 79.2078 28.2429 78.4433C30.0454 77.7968 31.3089 75.9574 31.2745 74.0436C31.2915 60.2082 31.266 46.3706 31.2872 32.5372C31.2422 31.9231 31.8248 31.4156 32.422 31.4734C34.0021 31.4628 35.5844 31.4521 37.1645 31.4777C37.8241 31.4628 38.278 32.1241 38.1964 32.7429C38.1901 46.666 38.2135 60.5894 38.1858 74.5124C38.1901 78.2231 36.6656 82.2606 33.2333 84.0762C29.005 86.2667 23.7787 85.8021 19.6014 83.7018C15.9851 81.8968 12.534 79.7667 8.98191 77.833C6.51347 76.5553 4.80674 73.8855 4.82411 71.0872V28.8997C4.79823 26.155 6.42128 23.5106 8.82766 22.2153C21.1943 15.2362 33.5589 8.25178 45.9234 1.26951Z"
						fill={activeTheme === 'light' ? '#2F2F3A' : '#817ed9'}
					/>
					<path
						d="M56.712 30.493C62.1057 30.1458 67.8798 30.2873 72.7333 32.9444C76.4911 34.9806 78.5745 39.254 78.6408 43.4288C78.5358 43.9919 77.9472 44.3026 77.4096 44.2639C75.8447 44.2618 74.2794 44.2852 72.7145 44.2533C72.0507 44.2788 71.6649 43.6667 71.5816 43.0799C71.1319 41.0823 70.0426 39.104 68.1624 38.1405C65.2762 36.6955 61.9298 36.7682 58.7826 36.7983C56.4851 36.9203 54.0145 37.1192 52.0681 38.4703C50.5738 39.4937 50.1199 41.5596 50.6532 43.2235C51.156 44.4182 52.5351 44.8036 53.6635 45.1589C60.1635 46.8589 67.0514 46.6898 73.4273 48.927C76.067 49.8391 78.6493 51.6121 79.5528 54.376C80.7347 58.0802 80.2167 62.5079 77.5812 65.4816C75.444 67.9288 72.3312 69.2607 69.2266 69.9841C65.0964 70.905 60.8103 70.9284 56.616 70.5196C52.672 70.0699 48.5677 69.0338 45.523 66.3465C42.9195 64.0859 41.6479 60.5635 41.7741 57.1639C41.8043 56.5898 42.3759 56.1894 42.9259 56.2366C44.5018 56.2238 46.0777 56.2196 47.6535 56.2387C48.283 56.1937 48.7496 56.7377 48.7819 57.3309C49.0727 59.2341 49.7879 61.2316 51.4475 62.36C54.6504 64.4263 58.6691 64.2848 62.3365 64.3426C65.3748 64.2079 68.7855 64.1671 71.2649 62.1589C72.573 61.0135 72.9606 59.0972 72.6071 57.4487C72.2241 56.0568 70.7681 55.4082 69.5177 54.9841C63.1011 52.9543 56.1362 53.6909 49.7816 51.3955C47.2018 50.4838 44.7071 48.76 43.716 46.1097C42.333 42.3586 42.9667 37.7189 45.8784 34.8455C48.7174 31.9873 52.8156 30.8866 56.712 30.4926V30.493Z"
						fill={activeTheme === 'light' ? '#2F2F3A' : '#817ed9'}
					/>
				</svg>

				<p style={{ color: activeTheme === 'light' ? '#2F2F3A' : '#817ed9' }}>NodeJS</p>
			</div>
		</>
	);
};

export default NodeJSLogo;