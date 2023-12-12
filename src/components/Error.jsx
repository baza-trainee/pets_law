import error from './../assets/error.webp'
const Error = () => {
	return (
		<div className="relative bg-error bg-no-repeat bg-cover h-fit w-[100%]">
			<img src={error} className="z-0 max-h-screen opacity-0" />
			<div className='absolute top-0 flex items-center w-full h-full'>
				<div className="relative flex-col items-center justify-center w-[65%] left-2 lg:left-[10%] md:w-[55%]">
					<h2 className="text-lg font-normal text-center text-white font-body sm:text-8xl">400</h2>
					<span className='flex justify-center my-5 text-xs whitespace-nowrap sm:text-sm sm:my-10'>Вибачте, сторінка, яку ви шукаєте, недоступна</span>
					<div className="flex justify-center">
						<button className='px-1 py-1 mx-1 text-xs text-white transition-all ease-linear border border-white hover:bg-white hover:text-black sm:px-5 sm:py-1 sm:mx-4 rounded-2xl'>Повернутись на головну</button>
						<button className='px-1 py-1 mx-1 text-xs text-white transition-all ease-linear border border-white hover:bg-white hover:text-black sm:px-5 sm:py-1 sm:mx-4 rounded-2xl'>Підтримати проєкт</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Error;
