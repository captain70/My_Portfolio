import Image from 'next/image';
import React from 'react';
import recipeImg from '../public/assets/projects/recipe.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const recipe = () => {
	return (
		<div className='w-full'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
				<Image
					className='absolute z-1'
					layout='fill'
					objectFit='cover'
					src={recipeImg}
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='py-2'>Recipe App</h2>
					<h3>React JS / Tailwind CSS</h3>
				</div>
			</div>

			<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
				<div className='col-span-4'>
					<p className='pt-4 text-xl underline text-indigo-600 tracking-wider uppercase pb-2'>
						Project
					</p>
					<h2 className='pb-4'>Overview</h2>
					<p className='leading-relaxed'>
						This is a recipe application showcasing recipes of different kinds
						and types. The data used in this app is fetched from the spoonacular
						Api.It was built using reactJs and styling was done using taliwind
						css. This app helps to demonstrate the implementation of the use of
						external APIs and how the data is integrated with the help of react
						to create a wonderful user experience. React routers is implored for
						the transition between pages on this website. The beautiful
						transition animation is courtesy of the framer motion package. The
						app is hosted on netlify.
					</p>
					<a
						href='https://github.com/captain70/recipe-app'
						target='_blank'
						rel='noreferrer'
					>
						<button className='px-8 py-2 mt-4 mr-8'> Src Code</button>
					</a>
					<a
						href='https://crew-recipes.netlify.app/'
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
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> React
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Tailwind
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Javascript
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> React Router 6
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Spoonacular API
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Framer-Motion
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

export default recipe;
