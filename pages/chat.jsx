import Image from 'next/image';
import React from 'react';
import chatImg from '../public/assets/projects/chat_box.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const chat = () => {
	return (
		<div className='w-full'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
				<Image
					className='absolute z-1'
					layout='fill'
					objectFit='cover'
					src={chatImg}
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='py-2'>Chat App</h2>
					<h3>MongoDB / Express / /React JS / Node JS / Socket.io </h3>
				</div>
			</div>

			<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
				<div className='col-span-4'>
					<p className='pt-4 text-xl underline text-indigo-600 tracking-wider uppercase pb-2'>
						Project
					</p>
					<h2 className='pb-4'>Overview</h2>
					<p className='leading-relaxed'>
						This is a fullstack application that inculcates all the technolgies
						of the mern stack. It also relies on the socket.io library for
						real-time bi-directional communication. A user registeration and
						authentication is provided by node js and express js using
						jsonwebtoken and mongo db in the backend server side of the
						application. In the front-end, I employ the react framework and
						tailwind css for my styling of the client side. A user is able to
						login and search for a list of users on the network through a search
						function implemented. A chat can then be created between these two
						users and if the second user is online, the chat would be in
						real-time.The back-end api is hosted on render.com whilst the
						front-end is hosted on netlify.com.
					</p>
					<a
						href='https://github.com/captain70/chat-Box'
						target='_blank'
						rel='noreferrer'
					>
						<button className='px-8 py-2 mt-4 mr-8'>Src Code</button>
					</a>
					<a
						href='https://crew-chatbox-react.netlify.app/'
						target='_blank'
						rel='noreferrer'
					>
						<button className='px-8 py-2 mt-4'>Demo</button>
					</a>
				</div>
				<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 dark:bg-slate-600 dark:text-stone-100'>
					<div className='p-2'>
						<p className='text-center font-bold pb-2'>Technologies</p>
						<div className='grid grid-cols-3 md:grid-cols-1'>
							<p className='text-gray-600 py-2 flex items-center dark:text-stone-100'>
								<RiRadioButtonFill className='pr-1' /> React
							</p>
							<p className='text-gray-600 py-2 flex items-center dark:text-stone-100'>
								<RiRadioButtonFill className='pr-1' /> Tailwind
							</p>
							<p className='text-gray-600 py-2 flex items-center dark:text-stone-100'>
								<RiRadioButtonFill className='pr-1' /> Mongo db
							</p>
							<p className='text-gray-600 py-2 flex items-center dark:text-stone-100'>
								<RiRadioButtonFill className='pr-1' /> Node js
							</p>
							<p className='text-gray-600 py-2 flex items-center dark:text-stone-100'>
								<RiRadioButtonFill className='pr-1' /> Express js
							</p>
							<p className='text-gray-600 py-2 flex items-center dark:text-stone-100'>
								<RiRadioButtonFill className='pr-1' /> Socket.io
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

export default chat;
