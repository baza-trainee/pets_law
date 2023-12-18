import IconArrow from '../common/icons/IconArrow';
import { Link } from 'react-scroll';

const HeaderDesktop = ({ menuRef, toggleMenu, isOpen }) => {
	return (
		<nav className='items-center justify-between hidden text-xl md:flex gap-x-5 xl:gap-x-16'>
			<ul className='flex items-center justify-between text-base gap-x-5 lg:text-xl xl:gap-x-16 sm:flex-wrap lg:flex-nowrap'>
				<li className='duration-100 cursor-pointer hover:text-gray-500'>
					<Link duration={500} to='hero'>
						Головна
					</Link>
				</li>
				<li className='duration-100 cursor-pointer hover:text-gray-500'>
					<Link duration={500} to='about'>
						Про нас
					</Link>
				</li>
				<li className='relative' ref={menuRef}>
					<button
						className={`cursor-pointer duration-300 hover:text-gray-500 flex items-center gap-1 xl:gap-2.5 ${
							isOpen ? 'text-stone-400' : ''
						}`}
						onClick={toggleMenu}
					>
						Права тварин
						<IconArrow isOpen={isOpen} />
					</button>
					<ul
						className={`absolute py-2 pl-7 pr-10 whitespace-nowrap duration-500 rounded bg-lightBlue  
                            ${
								isOpen
									? 'opacity-100 z-10 translate-y-0'
									: 'opacity-0 pointer-events-none -translate-y-1.5'
							}`}
					>
						<li className='relative duration-100 cursor-pointer hover:text-gray-500'>
							<Link duration={500} to='partOne'>
								1 частина
							</Link>
						</li>
						<li className='relative duration-100 cursor-pointer hover:text-gray-500'>
							<Link duration={500} to='partTwo'>
								2 частина
							</Link>
						</li>
					</ul>
				</li>
				<li className='duration-100 cursor-pointer hover:text-gray-500'>
					<Link duration={500} to='about'>
						Поради
					</Link>
				</li>
				<li className='duration-100 cursor-pointer hover:text-gray-500'>
					<Link duration={500} to='about'>
						Партнери
					</Link>
				</li>
				<li className='duration-100 cursor-pointer hover:text-gray-500'>
					<Link duration={500} to='about'>
						Контакти
					</Link>
				</li>
			</ul>
			<button className='py-2.5 px-4 bg-orange rounded-[20px] duration-200 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] hover:bg-orangeHover'>
				Підтримати проєкт
			</button>
		</nav>
	);
};

export default HeaderDesktop;
