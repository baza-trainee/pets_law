const Important = () => {
	return (
		<div className='max-w-[1920px] lg:bg-important min-h-[600px] lg:bg-cover flex flex-col lg:gap-10 gap-5 items-center justify-end lg:px-[240px] px-[5%] pt-[300px] lg:pt-0 bg-importantMob bg-contain bg-no-repeat bg-darkGrey bg-top'>
			<p className='max-w-[1440px] hidden lg:block'>
				Законопроект спрямований на впровадження європейських гуманних
				цінностей та стандартів по відношенню до тварин та приведення
				законодавства України у відповідність до Директив Європейського
				Союзу, що регламентують гуманне ставлення до цілого ряду груп
				сільськогосподарських тварин, захист тварин, які
				використовуються для експериментів та інших наукових цілей,
				захист тварин під час перевезення.
			</p>
			<h2 className='text-xl lg:hidden'>Пам’ятай!</h2>
			<p className='text-sm lg:hidden'>
				Закон працює лише тоді, коли є контроль. Закликаємо вас уважно
				вивчити всі ці норми, адже наше знання закону допоможе рятувати
				та захищати тварин
			</p>
			<p className='text-sm lg:hidden'>
				Законопроект спрямований на впровадження європейських гуманних
				цінностей та стандартів по відношенню до тварин та приведення
				законодавства України у відповідність до Директив Європейського
				Союзу, що регламентують гуманне ставлення до цілого ряду груп
				сільськогосподарських тварин, захист тварин, які
				використовуються для експериментів та інших наукових цілей,
				захист тварин під час перевезення.
			</p>
			<ul className='text-sm list-disc lg:hidden mb-7'>
				Винним у жорстокому поводженні з тваринами особам забороняється
				утримувати тварин:
				<li className='ml-5'>
					протягом 1 року – якщо особа вчинила адмінправопорушення з
					жорстокого поводження щодо тварин;
				</li>
				<li className='ml-5'>
					протягом 10 років – якщо особа вчинила злочин проти тварини.
				</li>
			</ul>
			<a
				href='https://www.rada.gov.ua/news/Novyny/188226.html'
				target='_blank'
				rel='noopener noreferrer'
				className='py-2.5 px-16 rounded-2xl bg-white border border-black max-w-[222px] mb-10 self-start hover:bg-yellow hover:cursor-pointer hover:border-yellow duration-300 hover:text-white hidden lg:block'
			>
				Читати далі
			</a>
		</div>
	);
};

export default Important;
