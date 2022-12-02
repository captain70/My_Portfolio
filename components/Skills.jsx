import Image from 'next/image';
import React from 'react';

const Skills = () => {
	return (
		<div id='skills' className='w-full lg:h-screen p-2'>
			<div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full '>
				<p className='text-xl tracking-widest uppercase text-[#8c52ff] underline'>
					Technical Skills
				</p>
				<h2 className='py-4'>What I can do</h2>
				<p className='text-gray-600 pb-4 dark:text-stone-100 text-lg'>
					{"These are some of the tools and frameworks I'm competent in."}
				</p>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-slate-600'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center '>
							<div className='m-auto'>
								<Image
									src='/../public/assets/skills/html.png'
									alt='/'
									width='64'
									height='64'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>HTML</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-slate-600'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/skills/css.png'
									alt='/'
									width='64'
									height='64'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>CSS</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-slate-600'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/skills/javascript.png'
									alt='/'
									width='64'
									height='64'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>JavaScript</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-slate-600'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/skills/react.png'
									alt='/'
									width='64'
									height='64'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>React</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-slate-600'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/skills/tailwind.png'
									alt='/'
									width='64'
									height='64'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>TailWind</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-slate-600'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/skills/mongo.png'
									alt='/'
									width='64'
									height='64'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>MongoDb</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-slate-600'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/skills/python.png'
									alt='/'
									width='64'
									height='64'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Python</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-slate-600'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/skills/node.png'
									alt='/'
									width='64'
									height='64'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>NodeJs</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
