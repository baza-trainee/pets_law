import { girlImage, boyImage, dogImage, catImage, arrow } from '../assets/images/stories';

const Stories = () => {

  return (
    <section className="max-w-[1920px] min-h-[1170px] flex flex-col items-center self-stretch px-[240px] bg-[#FFAD00]">
      <div className="flex max-w-[1451px] justify-between gap-[90px] min-h-[1170px]">
        <div className="z-10 max-w-[417px] flex flex-col items-stretch my-auto mr-90">
          <h3 className="text-3xl mt-[52x] font-bold text-black whitespace-nowrap">
            Історії про тварин 
          </h3>
          <div className="flex flex-col items-start px-5 py-[30px] mt-56 bg-white rounded-3xl">
            <div className="self-stretch text-2xl font-bold text-black">
              Притулок захисту корів
            </div>
            <img
              src={girlImage}
              alt="girl"
              className="self-stretch object-contain object-center mt-5 overflow-hidden"/>
            <p className="mt-5 text-lg text-black">
              Здраве Життя — це притулок захисту корів, діяльність якого спрямована на підтримання та відновлення популяції корів на основі заповідних, духовних і моральних принципів, на заміну сільськогосподарським споживчим. 
              Наша місія
              Захист корів від усіх видів насильства має величезну важливість. Коли корови перебувають в умовах любові й турботи, вони максимально реалізують свою закладену Всевишнім природну функцію впорядковувати навколишній простір на енергетичному рівні.
            </p>
            <div className="flex items-start self-start justify-between gap-5 mt-5">
              <a
                href="#"
                className="text-base text-black grow whitespace-nowrap">
                Перейти на сайт
              </a>
              <img
                src={arrow}
                className="object-contain object-center w-[11px] overflow-hidden self-stretch shrink-0 max-w-full"
                alt="Arrow"/>
            </div>
          </div>
        </div>
        <div className="pt-[142px] z-10 flex flex-col max-h-[549px] items-stretch max-w-[417px]">
          <div className="flex flex-col items-stretch px-5 py-[30px] bg-white rounded-3xl">
            <div className="text-2xl font-bold text-black">
              Смуджи — кішка, що напала на хуліганів, які причепилися до її
              5-річного власника
            </div>
            <div>
              <img
                src={boyImage}
                alt="boy"
                className="max-w-[377px] max-h-[211px] object-contain object-center overflow-hidden mt-5"
              />
            </div>
            <div className="flex flex-wrap items-stretch content-start justify-between mt-5">
              <p className="text-lg text-black">
                Коли п&apos;ятирічного Ітана оточили кілька хлопчиків, його мати,
                помітивши через вікно, як її сина штовхають на землю,
                прямувала до дверей, щоб провести розслідування. Однак, як
                тільки вона досягла переднього двору, вона стала свідком
                того, як їх 4-річна кішка Смуджи кинулася в бій, сичала і
                буквально кричала на хуліганів. Це збентежило хлопчаків і
                вони втекли.
              </p>{" "}
              <img
                src={dogImage}
                alt="dog"
                className="max-w-[377px] object-contain object-center w-px items-end overflow-hidden shrink-0"
              />
            </div>
          </div>
        </div>{" "}
        <div className="pt-[41px] z-10 flex flex-col items-stretch max-h-[549px] max-w-[417px] ml-90 mt-41">
          <div className="items-stretch bg-white z-[1] flex flex-col px-5 py-[30px] rounded-3xl">
            <div className="text-2xl font-bold text-black">
              Собака-рятувальник
            </div>
            <img
              src={dogImage}
              alt="dog"
              className=" max-w-[377px] object-contain object-center overflow-hidden mt-5"/>
            <div className="flex items-start content-start justify-between gap-5 mt-5">
              <p className="text-lg text-black">
                Ймовірно вам знайомі фотографії величезних пухнастих
                собак-сенбернарів із невеличкими флягами алкоголю на шиї.
                Але ви, можливо, не знали, що собаки цієї породи стали
                гірськими рятувальниками з легкої руки ченців-августинців,
                які жили у Пеннінських Альпах.
              </p>
              <div className="items-center self-stretch flex w-px shrink-0 h-[142px] flex-col" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src={catImage}
          alt="cat"
          className="absolute top-[40.5%] right-[13%] z-0 max-w-[740px]"/>
      </div>
    </section>
  );
};

export default Stories;
