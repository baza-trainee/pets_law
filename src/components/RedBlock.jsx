import img from "../assets/pet_harassment.png";
import ButtonDonate from "./common/ButtonDonate";

const RedBlock = () => {
  return (
    <section id="suggest" className="bg-[#A52630]">
      <div className="container max-w-[1920px] mx-auto my-0 flex justify-center gap-x-[5%] px-[2%] flex-wrap 2xl:flex-nowrap">
        <div className="overflow-hidden flex items-center  lg:end flex-col text-center w-[calc(390px+(755-390)*((100vw-390px)/(1920-390)))] h-[calc(575px+(925-575)*((100vw-390px)/(1920-390)))]">
          <p className="block md:hidden text-[36px] pt-[20px] max-w-[350px] text-white text-center font-normal leading-normal">
            Помітили знущання над твариною?
          </p>
          <img
            src={img}
            alt="Що робити коли помітили знущання над твариною"
            width="755"
            height="910"
            className="h-auto max-h-[900px] my-auto sm:h-full "
          />
        </div>
        <div className="my-[calc(8px+(60-8)*((100vw-390px)/(1920-390)))] ">
          <h3 className="hidden md:block text-white text-[calc(25px+(40-25)*((100vw-390px)/(1920-390)))] leading-normal max-w-[calc(350px+(589-350)*((100vw-390px)/(1920-390)))] mx-auto  text-center font-normal mb-[calc(8px+(60-8)*((100vw-390px)/(1920-390)))]">
            Що робити коли помітили знущання над твариною
          </h3>
          <div className="mb-[calc(8px+(90-8)*((100vw-390px)/(1920-390)))] bg-[#fff] rounded-[10px] p-[10px] md:bg-transparent md:rounded-none md:p-0">
            <p className="text-[#A52630] md:text-white text-[calc(16px+(25-16)*((100vw-390px)/(1920-390)))] leading-normal md:font-bold mb-[20px]">
              Зняти на телефон, зафіксувати порушення
            </p>
            <ul
              role="list"
              className="marker:text-[#A52630] md:marker:text-white list-disc pl-[3rem] text-white text-[calc(16px+(24-16)*((100vw-390px)/(1920-390)))] leading-normal font-normal"
            >
              <li className="text-[#A52630] md:text-white">
                викласти в соц мережу
              </li>
              <li className="text-[#A52630] md:text-white">тегнути ....</li>
            </ul>
          </div>
          <div className="mb-[calc(8px+(60-8)*((100vw-390px)/(1920-390)))] bg-[#fff] rounded-[10px] p-[10px] md:bg-transparent md:rounded-none md:p-0">
            <p className="text-[#A52630] md:text-white text-[calc(16px+(24-16)*((100vw-390px)/(1920-390)))] leading-normal md:font-bold mb-[20px]">
              Звернутись до зоозахисної організації :
            </p>
            <ul className="marker:text-[#A52630] md:marker:text-white text-[calc(16px+(25-16)*((100vw-390px)/(1920-390)))] leading-normal font-normal">
              <li className="text-[#A52630] md:text-white">м.Київ</li>
              <li className="text-[#A52630] md:text-white">м. Дніпро</li>
              <li className="text-[#A52630] md:text-white">м. Харків</li>
            </ul>
          </div>
          <p className="text-[#A52630]  md:text-white bg-[#fff] rounded-[10px] p-[10px] md:bg-transparent md:rounded-none md:p-0 mb-[calc(8px+(60-8)*((100vw-390px)/(1920-390)))] text-[calc(16px+(24-16)*((100vw-390px)/(1920-390)))] leading-normal md:font-bold flex gap-[14px]">
            Звернутись до поліції
            <span className="text-[calc(16px+(25-16)*((100vw-390px)/(1920-390)))] font-normal">
              102
            </span>
          </p>
          <div className="hidden md:flex items-center justify-start flex-wrap gap-[25px]">
            <p className="text-white text-[calc(10px+(18-10)*((100vw-390px)/(1920-390)))] leading-normal font-normal ">
              Підтримай тому що ти можеш
            </p>
            <ButtonDonate className='px-8 py-2 text-[18px] rounded-[20px] leading-[20px] btn btn-white' />
            {/* <button
              type="button"
              className="bg-white w-[calc(111px+(222-111)*((100vw-390px)/(1920-390)))] max-w-full h-[calc(25px+(42-25)*((100vw-390px)/(1920-390)))] rounded-[20px] text-black cursor-pointer text-[calc(10px+(18-10)*((100vw-390px)/(1920-390)))] leading-normal font-normal border-none transition-colors duration-250 ease-in-out focus:bg-[#D0A716] hover:bg-[#D0A716]"
            >
              Підтримати проєкт
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedBlock;
