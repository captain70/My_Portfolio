import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import logoImg from './../public/assets/ismael_logo1.png';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState('#ecf0f3');
	const [linkColor, setLinkColor] = useState('#1f2937');
	const [mounted, setMounted] = useState(false);

	const { systemTheme, theme, setTheme } = useTheme();

	const router = useRouter();

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (
			router.asPath === '/task' ||
			router.asPath === '/recipe' ||
			router.asPath === '/cinema' ||
			router.asPath === '/chat'
		) {
			setNavBg('transparent');
			setLinkColor('#ecf0f3');
		} else {
			setNavBg('#ecf0f3');
			setLinkColor('#1f2937');
		}
	}, [router]);
	const toggleMenu = () => {
		setNav(!nav);
	};
	useEffect(() => {
		const shadowHandler = () => {
			window.scrollY >= 90 ? setShadow(true) : setShadow(false);
		};
		window.addEventListener('scroll', shadowHandler);
	}, []);

	const renderThemeChanger = () => {
		if (!mounted) return null;

		const currentTheme = theme === 'system' ? systemTheme : theme;

		if (currentTheme === 'dark') {
			return (
				<div
					className='text-gray-200 bg-gray-600'
					onClick={() => setTheme('light')}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path
							fillRule='evenodd'
							d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
							clipRule='evenodd'
						/>
					</svg>
				</div>
			);
		} else {
			return (
				<div
					className='bg-transparent dark:bg-transparent'
					onClick={() => setTheme('dark')}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
					</svg>
				</div>
			);
		}
	};
	return (
		<div className=''>
			<div
				style={{ backgroundColor: `${navBg}` }}
				className={
					shadow
						? 'fixed w-full h-16 shadow-xl z-[100] '
						: 'fixed w-full h-16 z-[100]'
				}
			>
				<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
					<Link href='/'>
						<Image
							src={logoImg}
							alt='/'
							width='120'
							height='50'
							className='ml-7'
						/>
					</Link>
					<div>
						<ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
							<Link href='/'>
								<li className='ml-10 text-sm uppercase  hover: hover:text-indigo-600'>
									About
								</li>
							</Link>
							<Link href='/#skills'>
								<li className='ml-10 text-sm uppercase  hover: hover:text-indigo-600'>
									Skills
								</li>
							</Link>
							<Link href='/#projects'>
								<li className='ml-10 text-sm uppercase  hover: hover:text-indigo-600'>
									Projects
								</li>
							</Link>
							<Link href='/#contact'>
								<li className='ml-10 text-sm uppercase  hover: hover:text-indigo-600'>
									Contact
								</li>
							</Link>
							<li className='mx-10 text-sm uppercase'>
								{renderThemeChanger()}
							</li>
						</ul>
						<div className='flex items-center justify-center space-x-4'>
							<div className='md:hidden'>{renderThemeChanger()}</div>
							<div onClick={toggleMenu} className='md:hidden'>
								<AiOutlineMenu size={25} />
							</div>
						</div>
					</div>
				</div>
				<div
					className={
						nav
							? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
							: ''
					}
				>
					<div
						className={
							nav
								? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] pr-10 ease-in duration-500'
								: 'fixed left-[-100%] top-0 p-10 ease-in duration-700'
						}
					>
						<div>
							<div className='flex w-full h-28 items-center justify-between'>
								<Link href='/'>
									<Image
										onClick={() => setNav(false)}
										src='/../public/assets/ismael_logo1.png'
										alt='/'
										width='120'
										height='35'
										className='ml-7'
									/>
								</Link>
								<div
									onClick={toggleMenu}
									className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
								>
									<AiOutlineClose />
								</div>
							</div>
							<div className='border-b border-gray-300 ml-6'>
								<p className='w-[85%] md:w-[90%] text-left pb-2 pl-4'>
									Lets work together with joy
								</p>
							</div>
							<div className='py-8 pl-10 flex flex-col'>
								<ul className='uppercase'>
									<Link href='/'>
										<li onClick={() => setNav(false)} className='py-4 text-sm'>
											Home
										</li>
									</Link>
									<Link href='/#about'>
										<li onClick={() => setNav(false)} className='py-4 text-sm'>
											About
										</li>
									</Link>
									<Link href='/#skills'>
										<li onClick={() => setNav(false)} className='py-4 text-sm'>
											Skills
										</li>
									</Link>
									<Link href='/#projects'>
										<li onClick={() => setNav(false)} className='py-4 text-sm'>
											Projects
										</li>
									</Link>
									<Link href='/#contacts'>
										<li onClick={() => setNav(false)} className='py-4 text-sm'>
											Contacts
										</li>
									</Link>
								</ul>
								<div className='pt-16'>
									<p className='uppercase tracking-widest text-[#8c52ff]'>
										Connect with me
									</p>
									<div className='flex items-center justify-between mb-4 mt-6 w-full sm:w-[80%]'>
										<a
											href='https://www.linkedin.com/in/ismael-abdulai-112165178/'
											target='_blank'
											rel='noreferrer'
										>
											<div className='rounded-full text-[#8c52ff] shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
												<FaLinkedinIn />
											</div>
										</a>
										<a
											href='https://www.instagram.com/captaina7/'
											target='_blank'
											rel='noreferrer'
										>
											<div className='rounded-full text-[#8c52ff] shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
												<FaInstagram />
											</div>
										</a>
										<Link href='/#contact' onClick={() => setNav(false)}>
											<div className='rounded-full text-[#8c52ff] shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
												<AiOutlineMail />
											</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
