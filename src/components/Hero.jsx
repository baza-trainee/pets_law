const Hero = () => {
  return (
    <section
      id="hero"
      className="max-w-[1920px] lg:bg-hero lg:min-h-[1170px] relative lg:bg-cover bg-top bg-heroMob bg-cover bg-no-repeat min-h-[390px] mb-[470px] sm:mb-80 md:mb-64 lg:mb-[600px] xl:mb-[470px] mx-auto"
    >
      <div className="lg:max-w-[740px] lg:py-10 lg:text-4xl bg-white lg:px-14 text-yellow lg:rounded-3xl lg:min-h-[270px] absolute lg:right-[9%] lg:top-[51%] text-sm max-w-[70%] px-4 pt-3 bottom-10 pb-10 rounded-2xl right-5">
        <p>
          Зв&apos;язок з тваринами надає нам можливість побачити красу та
          розмаїття життя навколо нас
        </p>
      </div>
      <div className="text-white bg-yellow lg:px-14 lg:py-10 max-w-[830px] lg:rounded-3xl flex gap-10 flex-col items-center absolute lg:right-[10%] lg:top-[68%] px-4 py-5 rounded-l-2xl right-0 ml-[10%] -bottom-5 lg:bottom-auto">
        <h1 className="lg:text-6xl max-w-[630px] text-xl">
          Зоозахисний закон: які нововведення вступають у силу
        </h1>
        <p className="hidden text-2xl lg:block">
          Що саме змінює цей закон? <br />
          Які нововведення починають працювати вже сьогодні? UAnimals
          підготували для вас коротку підбірку, яка допоможе знати свої
          обов&apos;язки та захищати права тварин. Проявляючи громадянську
          активність, ми можемо вплинути на позитивні зміни в нашому суспільстві
          і сприяти вирішенню соціальних проблем.
        </p>
      </div>
      <div className="lg:text-6xl text-white bg-black lg:p-7 max-w-[345px] lg:rounded-tl-3xl lg:rounded-tr-3xl lg:rounded-bl-3xl absolute top-[102%] lg:left-[12%] text-2xl z-20 px-10 py-2 rounded-r-lg rounded-tl-lg">
        <h1>Про нас</h1>
      </div>
      <div className="lg:text-2xl bg-pink p-7 max-w-[905px] rounded-3xl absolute top-[111%] lg:left-[18%] z-10 text-sm mx-[10%]">
        <p>
          Любов до тварин - це особливий зв&apos;язок, який викликає в нас
          найніжніші почуття. Це безмежне кохання і розуміння без слів. Тварини
          стають нашими найкращими друзями і надійними співрозмовниками, якими
          можна довіритися у будь-якому життєвому шляху. При захисті тварин ми
          прагнемо досягти балансу між людиною і природою. Це вимагає нашої
          уваги, зусиль та відповідальності. Збереження довкілля і повага до
          тварин є важливими кроками для створення гармонійного світу. Ми маємо
          розуміти, що вони теж мають право на щасливе та безпечне існування.
        </p>
      </div>
    </section>
  );
};

export default Hero;
