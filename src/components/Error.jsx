
import { Link } from 'react-router-dom';
import ButtonDonate from './common/ButtonDonate';

const Error = () => {
	return (
		<div className='relative bg-errorMob bg-no-repeat bg-cover position_right_60 h-[calc(100vh-76px)] w-[100%] lg:h-[calc(100vh-100px)] sm:position_right_80 md:bg-error md:position_right_60 lg:position_right_60 xl:position_right_80'>
			<div className='absolute top-0 flex items-center w-full h-full'>
				<div className='relative flex-col items-center justify-center w-[90%] left-2 2xl:w-[40%] sm:w-[65%] md:w-[55%] lg:w-[40%] lg:left-[20px] xl:w-[35%] 2xl:left-[20px]'>
					<h2 className='text-[32px] font-normal text-center text-white font-body sm:text-8xl'>
						404
					</h2>
					<span className='flex justify-center my-5 text-xs whitespace-nowrap sm:text-sm sm:my-10'>
						Вибачте, сторінка, яку ви шукаєте, недоступна
					</span>
					<div className='flex justify-center'>
						<Link to='/' className='btn btn-error'>
							Повернутись на головну
						</Link>
						<ButtonDonate className='btn btn-error' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Error;
