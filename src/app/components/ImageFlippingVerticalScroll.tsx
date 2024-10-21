'use client';

import { ArrowDownIcon } from '@/app/components/icons/ArrowDownIcon';
import { smoothEase } from '@/app/framer-motion-easing-functions';
import { fadeIn, slideIn } from '@/app/framer-motion-variants';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export function ImageFlippingVerticalScroll() {
	const [isLoaded, setIsLoaded] = useState(false);
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef
	});

	useEffect(() => {
		window.scrollTo(0, 0);
		setIsLoaded(true);
	}, []);

	const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1], {
		ease: smoothEase
	});
	const right = useTransform(scrollYProgress, [0, 0.25], [-180, 0], {
		ease: smoothEase
	});
	const scale = useTransform(scrollYProgress, [0.15, 1], [0.5, 1], {
		ease: smoothEase
	});

	return (
		<div ref={targetRef} className='relative h-[400vh]'>
			{isLoaded && (
				<div className='sticky flex items-center justify-center top-0 h-screen'>
					<div className='flex gap-x-40 items-center'>
						<div className='relative w-[400px] h-[640px]'>
							<motion.div
								initial='initial'
								variants={slideIn}
								whileInView='animate'
								className='absolute w-[400px] h-[640px]'>
								<Image
									alt='image-1'
									src='/images/mazda-miata-with-cherry blossom-trees-iphone-wallpaper.png'
									layout='fill'
									objectFit='contain'
								/>
							</motion.div>
							<motion.div
								style={{
									opacity,
									scale,
									translateY: '-50%',
									right
								}}
								className='absolute top-1/2 transform w-full h-full'>
								<Image
									alt='image-2'
									src='/images/shonen-style-illustration of-a-highly-modified-mazda-rx-7-type-rs.png'
									layout='fill'
									objectFit='contain'
								/>
							</motion.div>
						</div>

						<motion.div
							initial='initial'
							animate='animate'
							variants={fadeIn}
							className='flex gap-y-4 flex-col items-center'>
							<h3 className='text-2xl'>Scroll Down to Flip Images</h3>
							<ArrowDownIcon width='3rem' height='auto' />
						</motion.div>
					</div>
				</div>
			)}
		</div>
	);
}
