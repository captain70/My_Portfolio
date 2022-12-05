import Image from 'next/image';
import React from 'react';
import htmlImg from './../public/assets/skills/html.png';
import javascriptImg from './../public/assets/skills/javascript.png';
import tailwindImg from './../public/assets/skills/tailwind.png';
import cssImg from './../public/assets/skills/css.png';
import reactImg from './../public/assets/skills/react.png';
import mongoImg from './../public/assets/skills/mongo.png';
import nodeImg from './../public/assets/skills/node.png';
import pythonImg from './../public/assets/skills/python.png';
import gitImg from './../public/assets/skills/git.png';
import javaImg from './../public/assets/skills/java.png';
import jenkinsImg from './../public/assets/skills/jenkins.png';
import dockerImg from './../public/assets/skills/docker.png';

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
								<Image src={htmlImg} alt='/' width='64' height='64' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>HTML</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-slate-600'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image src={cssImg} alt='/' width='64' height='64' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>CSS</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-slate-600'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image src={javascriptImg} alt='/' width='64' height='64' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>JavaScript</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-slate-600'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image src={reactImg} alt='/' width='64' height='64' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>React</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-slate-600'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image src={tailwindImg} alt='/' width='64' height='64' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>TailWind</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-slate-600'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image src={mongoImg} alt='/' width='64' height='64' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>MongoDb</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-slate-600'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image src={pythonImg} alt='/' width='64' height='64' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Python</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-slate-600'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image src={nodeImg} alt='/' width='64' height='64' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>NodeJs</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-slate-600'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image src={javaImg} alt='/' width='64' height='64' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Java</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-slate-600'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image src={gitImg} alt='/' width='64' height='64' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Git</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-slate-600'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image src={dockerImg} alt='/' width='64' height='64' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Docker</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-slate-600'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image src={jenkinsImg} alt='/' width='64' height='64' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Jenkins</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
