import img from '../assets/pet_harassment.png';

const RedBlock = () => {
	return (
		<section className='bg-[#A52630]'>
			<div className='container max-w-[1440px] mx-auto my-0 flex justify-evenly'>
				<img
					src={img}
					alt='Що робити коли помітили знущання над твариною'
					width='755'
					height='910'
					className='h-[910px]'
				/>
				<div>
					<h3 className='text-white text-[40px] leading-normal w-[589px] max-w-full text-center my-[60px] font-normal'>
						Що робити коли помітили знущання над твариною
					</h3>
					<div className='mb-[90px]'>
						<p className='text-white text-[24px] leading-normal font-bold mb-[20px]'>
							Зняти на телефон , зафіксувати порушення
						</p>
						<ul
							role='list'
							className='marker:text-white-400 list-disc pl-[3rem] text-white text-[25px] leading-normal font-normal'
						>
							<li>викласти в соц мережу</li>
							<li>тегнути ....</li>
						</ul>
					</div>
					<div className='mb-[60px]'>
						<p className='text-white text-[24px] leading-normal font-bold mb-[20px]'>
							Звернутись до зоозахисної організації :
						</p>
						<ul className='text-white text-[25px] leading-normal font-normal'>
							<li>м.Київ</li>
							<li>м. Дніпро</li>
							<li>м. Харків</li>
						</ul>
					</div>
					<p className='mb-[60px] text-white text-[24px] leading-normal font-bold flex gap-[14px]'>
						Звернутись до поліції
						<span className='text-[25px] font-normal'>102</span>
					</p>
					<div className='flex items-center justify-between'>
						<p className='text-white text-[18px] leading-normal font-normal'>
							Підтримай тому що ти можеш
						</p>
						<button
							type='button'
							className='bg-white w-[222px] max-w-full h-[42px] rounded-[20px] text-black cursor-pointer text-[18px] leading-normal font-normal border-none transition-colors duration-250 ease-in-out focus:bg-[#D0A716] hover:bg-[#D0A716]'
						>
							Підтримати проєкт
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RedBlock;
