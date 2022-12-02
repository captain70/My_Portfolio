import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
	return (
		<div
			id='about'
			className='w-full md:h-screen p-2 flex items-center py-16 scroll-smooth'
		>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2'>
					<p className='uppercase text-xl tracking-widest text-[#8c52ff] underline'>
						About
					</p>
					<h1 className='py-4'>Who am I?</h1>
					<p className='py-2 text-gray-600 dark:text-stone-100 text-lg'>
						Not a regular Journey. started off with studying for a degree in
						Physics in Ghana and ended up with a masters in computer science in
						Italy via North Macedonia.{' '}
					</p>
					<p className='py-2 text-gray-600 dark:text-stone-100 text-lg'>
						I hold a joint masters degree in Computer Science and Networking
						from the University of Pisa and Santa Anna Advanced School in Pisa,
						Italy. Through this experience and studying from top professors, I
						have gained an increase in my ability to solve problems and complete
						task under scheduled times. I also gained immense understanding in
						the world of Information technology. I had my Bachelor degree in the
						Republic of North Macedonia.
					</p>
					<p className='py-2 text-gray-600 dark:text-stone-100 text-lg'>
						Traveling and learning from different societies has given me the
						ability to easily adapt to my environment and be able to work with a
						variety of people. I love the adventure of travels. Going to new
						places and discovering new cultures.
					</p>
					<Link href='/#projects'>
						<p className='py-2  underline cursor-pointer text-[#8c52ff]'>
							checkout some of my latest projects
						</p>
					</Link>
				</div>
				<div className='w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 '>
					{/* insert profile picture */}
					<Image
						className='rounded-xl'
						src='/../public/assets/venice.jpeg'
						alt='/'
						width='400'
						height='50'
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
