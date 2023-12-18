import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { girlImage, boyImage, dogImage, catImage, arrow } from '../../assets/images/stories';

const StoriesDesktop = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      setCurrentSlide(index);
    },
  };
  
  return (
    <section className="keen-slider">
      <Slider {...settings} ref={sliderRef}>
        <div className="keen-slider__slide number-slide1">
            <div className="md:flex-1 max-w-[1920px] min-h-[1064px] flex flex-col items-center self-stretch px-[240px] bg-[#FFAD00]">
            <div className="flex max-w-[1451px] justify-between lg:gap-[90px] md:gap-[90px] sm:gap-[10px] min-h-[1064px]">
              <div className="z-10 xl:max-w-[417px] flex flex-col items-stretch mr-90">
                <h3 className="text-3xl mt-[52px] font-bold text-black whitespace-nowrap">
                  Історії про тварин  
                  </h3>
                <div className="flex flex-col justify-center px-6 py-[30px] mt-[39px] bg-white rounded-3xl">
                  <h2 className="text-2xl md:text-[20px] font-bold text-black">
                  Смуджи — кішка, що напала на хуліганів, які причепилися до її 5-річного власника 
                  </h2>
                  <img
                    src={boyImage}
                    alt="boy"
                    className="xl:max-w-[377px] lg:max-w-[250px] md:max-w-[250px] self-stretch object-contain object-center mt-5" />
                  <p className="scrollbar-w-3 p-3 mt-5 text-lg font-normal text-black max-h-[163px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    Коли п&apos;ятирічного Ітана оточили кілька хлопчиків, його мати, помітивши через вікно, як її сина штовхають на землю, прямувала до дверей, щоб провести розслідування. Однак, як тільки вона досягла переднього двору, вона стала свідком того, як їх 4-річна кішка Смуджи кинулася в бій, сичала і буквально кричала на хуліганів. Це збентежило хлопчаків і вони втекли.
                  </p>
                </div>
              </div>
              <div className="pt-[128px] md:pt-[128px] z-10 flex flex-col max-h-[554px] items-stretch xl:max-w-[417px]">
                <div className="flex flex-col items-stretch px-6 py-[30px] bg-white rounded-3xl">
                  <h2 className="text-2xl md:text-[20px] font-bold text-black">
                    Собака-рятувальник
                  </h2>
                  <div>
                    <img
                      src={dogImage}
                      alt="dog"
                      className="xl:max-w-[377px] lg:max-w-[250px] md:max-w-[250px] self-stretch object-contain object-center mt-5 overflow-hidden"/>
                      <p className="p-2 mt-5 text-lg text-black max-h-[220px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                      Ймовірно вам знайомі фотографії величезних пухнастих собак-сенбернарів із невеличкими флягами алкоголю на шиї. Але ви, можливо, не знали, що собаки цієї породи стали гірськими рятувальниками з легкої руки ченців-августинців, які жили у Пеннінських Альпах. 
                      </p>
                  </div>
                </div>
              </div>{" "}
              <div className="pt-[128px] md:pt-[128px] sm:pt-[75px] z-10 flex flex-col max-h-[554px] items-stretch xl:max-w-[427px]">
                <div className="flex flex-col items-stretch px-6 py-[30px] bg-white rounded-3xl">
                  <h2 className="text-2xl md:text-[20px] font-bold text-black">
                    Притулок захисту корів
                  </h2>
                  <img
                    src={girlImage}
                    alt="girl"
                    className="xl:max-w-[377px] lg:max-w-[250px] md:max-w-[250px] self-stretch object-contain object-center mt-5 overflow-hidden"/>
                    <p className="p-2 mt-5 text-lg text-black max-h-[176px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    Здраве Життя — це притулок захисту корів, діяльність якого спрямована на підтримання та відновлення популяції корів на основі заповідних, духовних і моральних принципів, на заміну сільськогосподарським споживчим.
                    <br></br>Наша місія<br></br>
                    Захист корів від усіх видів насильства має величезну важливість. Коли корови перебувають в умовах любові й турботи, вони максимально реалізують свою закладену Всевишнім природну функцію впорядковувати навколишній простір на енергетичному рівні.
                    </p>
                    <div className="flex items-start self-start justify-between gap-5 mt-5 ml-auto">
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
            </div>
          </div></div>
        <div className="keen-slider__slide number-slide2">
          <div className="max-w-[1920px] min-h-[1064px] flex flex-col items-center self-stretch px-[240px] bg-[#FFAD00]">
          <div className="flex max-w-[1451px] justify-between lg:gap-[90px] md:gap-[90px] sm:gap-[10px] min-h-[1064px]">
              <div className="z-10 xl:max-w-[417px] flex flex-col items-stretch mr-90">
                <h3 className="text-3xl mt-[52px] font-bold text-black whitespace-nowrap">
                  Історії про тварин  
                  </h3>
                <div className="flex flex-col justify-center px-6 py-[30px] mt-[39px] bg-white rounded-3xl">
                  <h2 className="self-stretch text-2xl md:text-[20px] font-bold text-black">
                  Смуджи — кішка, що напала на хуліганів, які причепилися до її 5-річного власника 
                  </h2>
                  <img
                    src={boyImage}
                    alt="boy"
                    className="xl:max-w-[377px] lg:max-w-[250px] md:max-w-[250px] self-stretch object-contain object-center mt-5" />
                  <p className="scrollbar-w-3 p-3 mt-5 text-lg text-black max-h-[163px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    Коли п&apos;ятирічного Ітана оточили кілька хлопчиків, його мати, помітивши через вікно, як її сина штовхають на землю, прямувала до дверей, щоб провести розслідування. Однак, як тільки вона досягла переднього двору, вона стала свідком того, як їх 4-річна кішка Смуджи кинулася в бій, сичала і буквально кричала на хуліганів. Це збентежило хлопчаків і вони втекли.
                  </p>
                </div>
              </div>
              <div className="pt-[128px] md:pt-[128px] z-10 flex flex-col max-h-[554px] items-stretch xl:max-w-[417px]">
                <div className="flex flex-col items-stretch px-6 py-[30px] bg-white rounded-3xl">
                  <h2 className="text-2xl md:text-[20px] font-bold text-black">
                    Собака-рятувальник
                  </h2>
                  <div>
                    <img
                      src={dogImage}
                      alt="dog"
                      className="xl:max-w-[377px] lg:max-w-[250px] md:max-w-[250px] self-stretch object-contain object-center mt-5 overflow-hidden"/>
                      <p className="p-2 mt-5 text-lg text-black max-h-[220px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                      Ймовірно вам знайомі фотографії величезних пухнастих собак-сенбернарів із невеличкими флягами алкоголю на шиї. Але ви, можливо, не знали, що собаки цієї породи стали гірськими рятувальниками з легкої руки ченців-августинців, які жили у Пеннінських Альпах. 
                      </p>
                  </div>
                </div>
              </div>{" "}
              <div className="pt-[128px] md:pt-[128px] sm:pt-[75px] z-10 flex flex-col max-h-[554px] items-stretch xl:max-w-[427px]">
                <div className="flex flex-col items-stretch px-6 py-[30px] bg-white rounded-3xl">
                  <h2 className="text-2xl md:text-[20px] font-bold text-black">
                    Притулок захисту корів
                  </h2>
                  <img
                    src={girlImage}
                    alt="girl"
                    className="xl:max-w-[377px] lg:max-w-[250px] md:max-w-[250px] self-stretch object-contain object-center mt-5 overflow-hidden"/>
                    <p className="p-2 mt-5 text-lg text-black max-h-[176px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    Здраве Життя — це притулок захисту корів, діяльність якого спрямована на підтримання та відновлення популяції корів на основі заповідних, духовних і моральних принципів, на заміну сільськогосподарським споживчим.
                    <br></br>Наша місія<br></br>
                    Захист корів від усіх видів насильства має величезну важливість. Коли корови перебувають в умовах любові й турботи, вони максимально реалізують свою закладену Всевишнім природну функцію впорядковувати навколишній простір на енергетичному рівні.
                    </p>
                    <div className="flex items-start self-start justify-between gap-5 mt-5 ml-auto">
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
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3">
          <div className="md:flex-1 max-w-[1920px] min-h-[1064px] flex flex-col items-center self-stretch px-[240px] bg-[#FFAD00]">
          <div className="flex max-w-[1451px] justify-between lg:gap-[90px] md:gap-[90px] sm:gap-[10px] min-h-[1064px]">
              <div className="z-10 xl:max-w-[417px] flex flex-col items-stretch mr-90">
                <h3 className="text-3xl mt-[52px] font-bold text-black whitespace-nowrap">
                  Історії про тварин  
                  </h3>
                <div className="flex flex-col justify-center px-6 py-[30px] mt-[39px] bg-white rounded-3xl">
                  <h2 className="self-stretch text-2xl md:text-[20px] font-bold text-black">
                  Смуджи — кішка, що напала на хуліганів, які причепилися до її 5-річного власника 
                  </h2>
                  <img
                    src={boyImage}
                    alt="boy"
                    className="xl:max-w-[377px] lg:max-w-[250px] md:max-w-[250px] self-stretch object-contain object-center mt-5" />
                  <p className="scrollbar-w-3 p-3 mt-5 text-lg text-black max-h-[163px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    Коли п&apos;ятирічного Ітана оточили кілька хлопчиків, його мати, помітивши через вікно, як її сина штовхають на землю, прямувала до дверей, щоб провести розслідування. Однак, як тільки вона досягла переднього двору, вона стала свідком того, як їх 4-річна кішка Смуджи кинулася в бій, сичала і буквально кричала на хуліганів. Це збентежило хлопчаків і вони втекли.
                  </p>
                </div>
              </div>
              <div className="pt-[128px] md:pt-[128px] z-10 flex flex-col max-h-[554px] items-stretch xl:max-w-[417px]">
                <div className="flex flex-col items-stretch px-6 py-[30px] bg-white rounded-3xl">
                  <h2 className="text-2xl md:text-[20px] font-bold text-black">
                    Собака-рятувальник
                  </h2>
                  <div>
                    <img
                      src={dogImage}
                      alt="dog"
                      className="xl:max-w-[377px] lg:max-w-[250px] md:max-w-[250px] self-stretch object-contain object-center mt-5 overflow-hidden"/>
                      <p className="p-2 mt-5 text-lg text-black max-h-[220px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                      Ймовірно вам знайомі фотографії величезних пухнастих собак-сенбернарів із невеличкими флягами алкоголю на шиї. Але ви, можливо, не знали, що собаки цієї породи стали гірськими рятувальниками з легкої руки ченців-августинців, які жили у Пеннінських Альпах. 
                      </p>
                  </div>
                </div>
              </div>{" "}
              <div className="pt-[128px] md:pt-[128px] sm:pt-[75px] z-10 flex flex-col max-h-[554px] items-stretch xl:max-w-[427px]">
                <div className="flex flex-col items-stretch px-6 py-[30px] bg-white rounded-3xl">
                  <h2 className="text-2xl md:text-[20px] font-bold text-black">
                    Притулок захисту корів
                  </h2>
                  <img
                    src={girlImage}
                    alt="girl"
                    className="xl:max-w-[377px] lg:max-w-[250px] md:max-w-[250px] self-stretch object-contain object-center mt-5 overflow-hidden"/>
                    <p className="p-2 mt-5 text-lg text-black max-h-[176px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    Здраве Життя — це притулок захисту корів, діяльність якого спрямована на підтримання та відновлення популяції корів на основі заповідних, духовних і моральних принципів, на заміну сільськогосподарським споживчим.
                    <br></br>Наша місія<br></br>
                    Захист корів від усіх видів насильства має величезну важливість. Коли корови перебувають в умовах любові й турботи, вони максимально реалізують свою закладену Всевишнім природну функцію впорядковувати навколишній простір на енергетичному рівні.
                    </p>
                    <div className="flex items-start self-start justify-between gap-5 mt-5 ml-auto">
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
            </div>
          </div>
        </div>
        </Slider>
        <img
            src={catImage}
            alt="cat"
            className="absolute xl:top-[49.7%] sm:top-[50.7%] right-[11%] z-0  hidden lg:block "
        />
        <div className="absolute top-[66.2%] right-[20%] z-0">
          {sliderRef.current && (
            <div className="dots">
              {[...Array(sliderRef.current.props.children.length).keys()].map(
              (idx) => {
                return (
                  <button
                  key={idx}
                  onClick={() => {
                    sliderRef.current.slickGoTo(idx);
                  }}
                  className={`dot ${currentSlide === idx ? "active" : ""}`}
                ></button>
                );
              })}
            </div>
          )}
        </div>
    </section>
  )
}

export default StoriesDesktop;
