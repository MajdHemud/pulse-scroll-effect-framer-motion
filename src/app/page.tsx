import { ImageFlippingVerticalScroll } from '@/app/components/ImageFlippingVerticalScroll';
import { ReactLenis } from 'lenis/react';

export default function Home() {
	return (
		<div>
			<ReactLenis
				root
				options={{
					// Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
					lerp: 0.05
					//   infinite: true,
					//   syncTouch: true,
				}}>
				{' '}
				<ImageFlippingVerticalScroll />
			</ReactLenis>
		</div>
	);
}
