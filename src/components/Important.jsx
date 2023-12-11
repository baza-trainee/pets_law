const Important = () => {
	return (
		<div className='max-w-[1920px] bg-important min-h-[600px] bg-cover bg-center flex flex-col gap-10 items-center justify-end px-[240px]'>
			<p className='max-w-[1440px]'>
				Законопроект спрямований на впровадження європейських гуманних
				цінностей та стандартів по відношенню до тварин та приведення
				законодавства України у відповідність до Директив Європейського
				Союзу, що регламентують гуманне ставлення до цілого ряду груп
				сільськогосподарських тварин, захист тварин, які
				використовуються для експериментів та інших наукових цілей,
				захист тварин під час перевезення.
			</p>
			<a
				href='https://www.rada.gov.ua/news/Novyny/188226.html'
				target='_blank'
				rel='noopener noreferrer'
				className='py-2.5 px-16 rounded-2xl bg-white border border-black max-w-[222px] mb-10 self-start hover:bg-yellow hover:cursor-pointer hover:border-yellow duration-300 hover:text-white'
			>
				Читати далі
			</a>
		</div>
	);
};

export default Important;
