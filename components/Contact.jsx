import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';

const Contact = () => {
	return (
		<div id='contact' className='w-full lg:h-screen'>
			<div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
				<p className='text-xl tracking-widest uppercase text-[#8c52ff] underline'>
					Contact
				</p>
				<h2 className='py-4'>Get In Touch</h2>
				<div className='grid lg:grid-cols-5 gap-8'>
					{/* left */}
					<div className='col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-gray-400 rounded-xl p-4'>
						<div className='lg:p-4 h-full '>
							<div>
								<Image
									className='rounded-xl hover:scale-105 ease-in duration-300'
									src={ContactImg}
									alt='/'
								/>
							</div>
							<div>
								<h2 className='py-2'>Ismael Abdulai</h2>
								<p className='text-gray-600 dark:text-stone-100 text-md'>
									Software Developer
								</p>
								<p className='py-4 text-gray-600 dark:text-stone-100 text-lg'>
									Currently available for full-time positions, remotely or
									on-site. Also available for freelance work. Contact me and
									let&apos;s connect.
								</p>
							</div>
							<div>
								<p className='uppercase pt-8 text-center'>Contact me here.</p>
								<div className='flex items-center justify-between py-4 mt-8'>
									<a
										href='https://www.linkedin.com/in/ismael-abdulai-112165178/'
										target='_blank'
										rel='noreferrer'
									>
										<div className='rounded-full text-[#8c52ff] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-lg dark:bg-stone-100 '>
											<FaLinkedinIn />
										</div>
									</a>
									<a
										href='https://www.instagram.com/captaina7/'
										target='_blank'
										rel='noreferrer'
									>
										<div className='rounded-full text-[#8c52ff] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-lg dark:bg-stone-100'>
											<FaInstagram />
										</div>
									</a>
									<Link href='/#contact'>
										<div className='rounded-full text-[#8c52ff] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-lg dark:bg-stone-100'>
											<AiOutlineMail />
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* right */}
					<div className='col-span-3 w-full h-auto shadow-lg shadow-gray-400 rounded-xl lg:p-4'>
						<div className='p-4'>
							<form
								action='https://getform.io/f/e466b9d0-4115-486b-a271-b97b4ea9cd87'
								method='POST'
								encType='multipart/form-data'
							>
								<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>Name</label>
										<input
											className='border-2 rounded-lg p-3 flex border-gray-300'
											type='text'
											name='name'
										/>
									</div>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>
											Phone Number
										</label>
										<input
											className='border-2 rounded-lg p-3 flex border-gray-300'
											type='text'
											name='phone'
										/>
									</div>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Email</label>
									<input
										className='border-2 rounded-lg p-3 flex border-gray-300'
										type='email'
										name='email'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Subject</label>
									<input
										className='border-2 rounded-lg p-3 flex border-gray-300'
										type='text'
										name='subject'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Message</label>
									<textarea
										className='border-2 rounded-lg p-3 border-gray-300'
										rows='10'
										name='message'
									></textarea>
								</div>
								<button className='w-full p-4 text-gray-100 mt-4'>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className='flex justify-center pt-12'>
					<Link href='/'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-stone-100'>
							<HiOutlineChevronDoubleUp className='text-[#8c52ff]' size={30} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
