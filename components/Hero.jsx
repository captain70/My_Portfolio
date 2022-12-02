import Link from 'next/link';
import React, { useContext } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const Hero = () => {
	return (
		<div id='hero' className='w-full h-screen text-center scroll-smooth'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<h1 className='py-4 mt-4 text-gray-600 dark:text-stone-100'>
						{"Hello, I'm"} <span className='text-[#8c52ff]'>Ismael.</span>
					</h1>
					<h1 className='py-2 text-gray-600 dark:text-stone-100'>
						{' '}
						A Software Developer
					</h1>
					<p className='pt-4 mt-3 text-gray-700 m-auto max-w-[70%] text-lg whitespace-pre-line dark:text-stone-100 leading-relaxed'>
						{
							"A highly motivated developer whose interest lie in building websites and providing  web services. Solving everyday problems with digital solutions is at the core of my goals. I'm enthusiastic about technological growth and exhibit the attitude in ensuring I attain maximum results. An ultimate team player who never shies away from resposibilities and ever ready to learn from the group."
						}
					</p>
					<p className='text-gray-700 m-auto max-w-[70%] text-lg whitespace-pre-line pb-4 dark:text-stone-100 leading-relaxed italic'>
						{
							"'Be Humble. Be Hungry. And always be the hardest worker in the room'"
						}
						<span className='pb-4 pl-2 underline font-bold dark:text-stone-100'>
							Dwayne Johnson
						</span>
					</p>
					<div className='flex justify-between items-center max-w-[330px] m-auto py-4'>
						<a
							href='https://www.linkedin.com/in/ismael-abdulai-112165178/'
							target='_blank'
							rel='noreferrer'
						>
							<div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300 text-[#8c52ff]  dark:bg-slate-100 dark:shadow-gray-300'>
								<FaLinkedinIn />
							</div>
						</a>
						<a
							href='https://github.com/captain70'
							target='_blank'
							rel='noreferrer'
						>
							<div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300 text-[#8c52ff]  dark:bg-slate-100 dark:shadow-gray-300'>
								<FaGithub />
							</div>
						</a>
						<Link href='/#contact'>
							<div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300 text-[#8c52ff]  dark:bg-slate-100 dark:shadow-gray-300'>
								<AiOutlineMail />
							</div>
						</Link>
					</div>
					<div className='flex items-center justify-center py-3 mt-2'>
						<a href='ismael_cv.pdf' download='ismael curriculum'>
							<button className='flex justify-center items-center px-6 py-3 gap-x-2 active:translate-y-1 active:shadow-lg active:scale-100 active:transition-all active:duration-500 '>
								Resume <FiDownload size={30} className='pb-1' />
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
