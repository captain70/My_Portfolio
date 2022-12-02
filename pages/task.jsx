import Image from 'next/image';
import React from 'react';
import taskManagerImg from '../public/assets/projects/task_manager.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const task = () => {
	return (
		<div className='w-full h-full'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
				<Image
					className='absolute z-1'
					layout='fill'
					objectFit='cover'
					src={taskManagerImg}
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='py-2'>Task Manager App</h2>
					<h3>React JS / CSS</h3>
				</div>
			</div>

			<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
				<div className='col-span-4'>
					<p className='pt-4 text-xl underline text-indigo-600 tracking-wider uppercase pb-2'>
						Project
					</p>
					<h2 className='pb-4'>Overview</h2>
					<p className='leading-relaxed'>
						This app is a simple todo-list that helps to demonstrate my
						understanding and implementation on a basic level how javascript and
						the react framework work together. It also helps to effectively
						implement basic css styling to a project. There are no external APIs
						implemented in this project. The todo-list or task manager has an
						edit task where users can edit any task in their list, completed
						task where users can strike out a task that has been completed and a
						delete task feature for removing unwanted or completed task. It also
						groups the completed and uncompleted task in together to help
						visualize task management.
					</p>
					<a
						href='https://github.com/captain70/task-manager'
						target='_blank'
						rel='noreferrer'
					>
						<button className='px-8 py-2 mt-4 mr-8'>Src Code</button>
					</a>
					<a
						href='https://crew-task-manager.netlify.app/'
						target='_blank'
						rel='noreferrer'
					>
						<button className='px-8 py-2 mt-4'>Demo</button>
					</a>
				</div>
				<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 dark:bg-slate-600 dark:text-stone-100 '>
					<div className='p-2'>
						<p className='text-center font-bold pb-2 '>Technologies</p>
						<div className='grid grid-cols-3 md:grid-cols-1 '>
							<p className=' py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' />
								Javascript
							</p>
							<p className=' py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> React
							</p>
							<p className=' py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> CSS
							</p>
						</div>
					</div>
				</div>
				<Link href='/#projects'>
					<p className='underline cursor-pointer text-indigo-600'>Back</p>
				</Link>
			</div>
		</div>
	);
};

export default task;
