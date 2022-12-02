import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleProject = ({ title, backgroundImg, projectUrl }) => {
	return (
		<div className='group relative cursor-pointer flex items-center justify-center overflow-hidden h-full w-full rounded-xl transition-shadow hover:shadow-xl hover:shadow-black/50'>
			<Image
				className='rounded-xl object-cover transition-transform duration-300 group-hover:rotate-3 group-hover:scale-125'
				src={backgroundImg}
				alt='/'
				width={500}
				height={500}
			/>
			<div className='absolute inset-0 bg-gradient-to-b group-hover:from-black/80 group-hover:via-black/70 group-hover:to-black/80'></div>
			<div className='absolute inset-0 flex translate-y-[90%] flex-col items-center justify-center px-9 text-center transition-all duration-700  space-y-4 group-hover:translate-y-0'>
				<h1 className='font-dmserif text-3xl text-white mb-4'>{title}</h1>

				<Link href={projectUrl}>
					<button className='rounded-full py-3 px-5 font-semibold text-sm capitalize text-white shadow shadow-black/40 cursor-pointer'>
						See More
					</button>
				</Link>
			</div>
		</div>
	);
};

export default SingleProject;
