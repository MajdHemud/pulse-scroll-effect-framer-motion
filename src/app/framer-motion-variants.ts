import { smoothEase } from '@/app/framer-motion-easing-functions';
import { Variants } from 'framer-motion';

export const slideIn = {
	initial: {
		opacity: 0,
		right: '-180px'
	},
	animate: {
		opacity: 1,
		right: 0,
		transition: {
			ease: smoothEase,
			duration: 2.5
		}
	}
} as Variants;

export const fadeIn = {
	initial: {
		opacity: 0
	},
	animate: {
		opacity: 1,
		transition: {
			ease: smoothEase,
			duration: 2.5,
			delay: 1
		}
	}
} as Variants;
