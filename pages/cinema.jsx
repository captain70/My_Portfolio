import Image from 'next/image';
import React from 'react';
import moviesImg from '../public/assets/projects/movies.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const cinema = () => {
	return (
		<div className='w-full'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
				<Image
					className='absolute z-1'
					layout='fill'
					objectFit='cover'
					src={moviesImg}
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='py-2'>Cinematic App</h2>
					<h3>React JS / Tailwind / Firebase</h3>
				</div>
			</div>

			<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
				<div className='col-span-4'>
					<p className='pt-4 text-xl underline text-indigo-600 tracking-wider uppercase pb-2'>
						Project
					</p>
					<h2 className='pb-4'>Overview</h2>
					<p className='leading-relaxed'>
						Cinematic is an application that was built to mimic modern movie and
						tv streaming services. Although I do not have the video data
						available, I try to create a user interface and user experience that
						clones that of a real streaming service. The application was built
						with reactJs and tailwind css was used in the styling. The data
						which is live and current data on movies and tv shows was fetched
						from themoviedb.org Api. The application is hosted on Firebase.
						Also. with FireStore cloud storage, a user login and authentication
						service was created. This allows users to register and login into
						the site as well as like and store their preferences in their
						accounts. The app is hosted on Firebase.
					</p>
					<a
						href='https://github.com/captain70/cinematic'
						target='_blank'
						rel='noreferrer'
					>
						<button className='px-8 py-2 mt-4 mr-8'> Src Code</button>
					</a>
					<a
						href='https://cinematic-react.web.app/'
						target='_blank'
						rel='noreferrer'
					>
						<button className='px-8 py-2 mt-4'>Demo</button>
					</a>
				</div>
				<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 dark:bg-slate-600 dark:text-stone-100'>
					<div className='p-2'>
						<p className='text-center font-bold pb-2'>Technologies</p>
						<div className='grid grid-cols-3 md:grid-cols-1 '>
							<p className='text-gray-600 py-2 flex items-center dark:text-stone-100'>
								<RiRadioButtonFill className='pr-1' /> React
							</p>
							<p className='text-gray-600 py-2 flex items-center dark:text-stone-100'>
								<RiRadioButtonFill className='pr-1' /> Tailwind
							</p>
							<p className='text-gray-600 py-2 flex items-center dark:text-stone-100'>
								<RiRadioButtonFill className='pr-1' /> Javascript
							</p>
							<p className='text-gray-600 py-2 flex items-center dark:text-stone-100'>
								<RiRadioButtonFill className='pr-1' /> React Router 6
							</p>
							<p className='text-gray-600 py-2 flex items-center dark:text-stone-100'>
								<RiRadioButtonFill className='pr-1' /> Firebase
							</p>
							<p className='text-gray-600 py-2 flex items-center dark:text-stone-100'>
								<RiRadioButtonFill className='pr-1' /> themoviedb API
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

export default cinema;
