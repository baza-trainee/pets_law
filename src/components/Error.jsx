import error from './../assets/error.webp'
const Error = () => {
	return (
		<div className="relative bg-error bg-no-repeat bg-cover h-fit w-[100%]">
			<img src={error} className="z-0 opacity-0" />
			<div className='absolute top-0 flex items-center w-full h-full'>
				<div className="relative flex-col items-center justify-center left-[16%] w-auto">
					<h2 className="font-normal text-center text-white font-body text-8xl">400</h2>
					<span className='flex justify-center my-10 text-sm'>Вибачте, сторінка, яку ви шукаєте, недоступна</span>
					<div className="flex justify-center">
						<button className='px-5 py-1 mx-4 text-white border border-white rounded-2xl'>Повернутись на головну</button>
						<button className='px-5 py-1 mx-4 text-white border border-white rounded-2xl'>Підтримати проєкт</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Error;
