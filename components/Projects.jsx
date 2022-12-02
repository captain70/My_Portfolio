import React, { useContext } from 'react';
import SingleProject from './SingleProject';
import taskManagerImg from '../public/assets/projects/task_manager.jpg';
import recipeImg from '../public/assets/projects/recipe.jpg';
import moviesImg from '../public/assets/projects/movies.jpg';
import chatBoxImg from '../public/assets/projects/chat_box.jpg';

const Projects = () => {
	return (
		<div id='projects' className='w-full scrollbar-hide'>
			<div className='max-w-[1240px] mx-auto px-2 py-16'>
				<p className='text-xl tracking-widest text-[#8c52ff] uppercase underline'>
					Projects
				</p>
				<h2 className='py-4'>What I have built</h2>
				<p className='text-gray-600 pb-4 dark:text-stone-100 text-lg'>
					These are the current projects I have built and the technologies I
					used.{' '}
				</p>
				<div className='grid md:grid-cols-2 gap-10 mx-5'>
					<SingleProject
						title='Task Manager'
						backgroundImg={taskManagerImg}
						projectUrl='/task'
						tech='React JS'
					/>
					<SingleProject
						title='Recipe App'
						backgroundImg={recipeImg}
						projectUrl='/recipe'
						tech='React JS'
					/>
					<SingleProject
						title='Cinematic App'
						backgroundImg={moviesImg}
						projectUrl='/cinema'
						tech='React JS'
					/>
					<SingleProject
						title='Chat App'
						backgroundImg={chatBoxImg}
						projectUrl='/chat'
						tech='Next JS'
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
