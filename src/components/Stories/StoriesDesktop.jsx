import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { girlImage, boyImage, dogImage, arrow } from '../../assets/images/stories';

const StoriesDesktop = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (index) => {
      setCurrentSlide(index);
    },
  };
  
  return (
    <section className="keen-slider relative ">
      <Slider {...settings} ref={sliderRef}>
        <div className="keen-slider__slide number-slide1">
          <div className="bg-catBox bg-no-repeat bg-contain bg-[bottom_right_170px] z-[-1] md:flex-1 max-w-[1920px] min-h-[1064px] flex flex-col items-center self-stretch px-[240px] bg-[#FFAD00]">
            <div className="flex max-w-[1451px] justify-between xl:gap-[90px] lg:gap-[40px] md:gap-[10px] sm:gap-[10px] min-h-[1064px]">
              <div className="xl:max-w-[417px] flex flex-col items-stretch mr-90">
                <h3 className="md:ml-6 text-3xl mt-[52px] font-bold text-black whitespace-nowrap">
                  Історії про тварин  
                  </h3>
                <div className="flex flex-col justify-center px-6 py-[30px] mt-[39px] bg-white rounded-3xl">
                  <h2 className="xl:text-2xl lg:text-2xl md:text-[20px] sm:text-[18px] font-bold text-black">
                  Смуджи — кішка, що напала на хуліганів, які причепилися до її 5-річного власника 
                  </h2>
                  <img
                    src={boyImage}
                    alt="boy"
                    className="xl:max-w-[377px] lg:max-w-[250px] md:max-w-[250px] sm:max-w-[175px] self-stretch object-contain object-center mt-5" />
                  <p className="scrollbar-w-3 p-3 mt-5 sm:p-1 xl:text-lg lg:text-lg md:text-sm sm:text-sm font-normal text-black max-h-[163px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    Коли п&apos;ятирічного Ітана оточили кілька хлопчиків, його мати, помітивши через вікно, як її сина штовхають на землю, прямувала до дверей, щоб провести розслідування. Однак, як тільки вона досягла переднього двору, вона стала свідком того, як їх 4-річна кішка Смуджи кинулася в бій, сичала і буквально кричала на хуліганів. Це збентежило хлопчаків і вони втекли.
                  </p>
                </div>
              </div>
              <div className="pt-[128px] md:pt-[128px] z-1 flex flex-col max-h-[554px] items-stretch xl:max-w-[417px]">
                <div className="flex flex-col items-stretch px-6 py-[30px] bg-white rounded-3xl">
                  <h2 className="xl:text-2xl lg:text-2xl md:text-[20px] sm:text-[18px] font-bold text-black">
                    Собака-рятувальник
                  </h2>
                  <div>
                    <img
                      src={dogImage}
                      alt="dog"
                      className="xl:max-w-[377px] lg:max-w-[250px] md:max-w-[250px] sm:max-w-[175px] self-stretch object-contain object-center mt-5 overflow-hidden"/>
                      <p className="p-2 mt-5 sm:p-1 xl:text-lg lg:text-lg md:text-sm sm:text-sm max-h-[220px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                      Ймовірно вам знайомі фотографії величезних пухнастих собак-сенбернарів із невеличкими флягами алкоголю на шиї. Але ви, можливо, не знали, що собаки цієї породи стали гірськими рятувальниками з легкої руки ченців-августинців, які жили у Пеннінських Альпах. Вони вивели міцних та розумних собак, які не боялися морозу та вітру і, завдяки своєму нюху, відшукували засипаних снігом. 
                      </p>
                  </div>
                </div>
              </div>{" "}
              <div className="relative pt-[128px] md:pt-[128px] flex flex-col max-h-[554px] items-stretch xl:max-w-[427px]">
                <div className="flex flex-col items-stretch px-6 py-[30px] bg-white rounded-3xl">
                  <h2 className="xl:text-2xl lg:text-2xl md:text-[20px] sm:text-[18px] font-bold text-black">
                    Притулок захисту корів
                  </h2>
                  <img
                    src={girlImage}
                    alt="girl"
                    className="xl:max-w-[377px] lg:max-w-[250px] md:max-w-[250px] sm:max-w-[175px] self-stretch object-contain object-center mt-5 overflow-hidden"/>
                    <p className="p-2 mt-5 sm:p-1 xl:text-lg lg:text-lg md:text-sm sm:text-sm max-h-[176px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    Здраве Життя — це притулок захисту корів, діяльність якого спрямована на підтримання та відновлення популяції корів на основі заповідних, духовних і моральних принципів, на заміну сільськогосподарським споживчим.
                    <br></br>Наша місія<br></br>
                    Захист корів від усіх видів насильства має величезну важливість. Коли корови перебувають в умовах любові й турботи, вони максимально реалізують свою закладену Всевишнім природну функцію впорядковувати навколишній простір на енергетичному рівні.
                    </p>
                    <div className="flex items-start self-start justify-between gap-5 mt-5 ml-auto">
                      <a
                        href="https://zdrave-zyttia.site"
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
          <div className="bg-catBox bg-no-repeat bg-contain bg-[bottom_right_170px] md:flex-1 max-w-[1920px] min-h-[1064px] flex flex-col items-center self-stretch px-[240px] bg-[#FFAD00]">
            <div className="flex max-w-[1451px] justify-between xl:gap-[90px] lg:gap-[40px] md:gap-[10px] sm:gap-[10px] min-h-[1064px]">
              <div className="z-1 xl:max-w-[417px] flex flex-col items-stretch mr-90">
                <h3 className="text-3xl mt-[52px] font-bold text-black whitespace-nowrap">
                  Історії про тварин  
                  </h3>
                <div className="flex flex-col justify-center px-6 py-[30px] mt-[39px] bg-white rounded-3xl">
                  <h2 className="xl:text-2xl lg:text-2xl self-stretch md:text-[20px] sm:text-[18px] font-bold text-black">
                  Смуджи — кішка, що напала на хуліганів, які причепилися до її 5-річного власника 
                  </h2>
                  <img
                    src={boyImage}
                    alt="boy"
                    className="xl:max-w-[377px] lg:max-w-[250px] md:max-w-[250px] sm:max-w-[175px] self-stretch object-contain object-center mt-5" />
                  <p className="scrollbar-w-3 p-3 mt-5 sm:p-1 xl:text-lg lg:text-lg md:text-sm sm:text-sm max-h-[163px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    Коли п&apos;ятирічного Ітана оточили кілька хлопчиків, його мати, помітивши через вікно, як її сина штовхають на землю, прямувала до дверей, щоб провести розслідування. Однак, як тільки вона досягла переднього двору, вона стала свідком того, як їх 4-річна кішка Смуджи кинулася в бій, сичала і буквально кричала на хуліганів. Це збентежило хлопчаків і вони втекли.
                  </p>
                </div>
              </div>
              <div className="relative pt-[128px] md:pt-[128px] z-1 flex flex-col max-h-[554px] items-stretch xl:max-w-[417px]">
                <div className="flex flex-col items-stretch px-6 py-[30px] bg-white rounded-3xl">
                  <h2 className="xl:text-2xl lg:text-2xl md:text-[20px] sm:text-[18px] font-bold text-black">
                    Собака-рятувальник
                  </h2>
                  <div>
                    <img
                      src={dogImage}
                      alt="dog"
                      className="xl:max-w-[377px] lg:max-w-[250px] md:max-w-[250px] sm:max-w-[175px] self-stretch object-contain object-center mt-5 overflow-hidden"/>
                      <p className="p-2 mt-5 sm:p-1 xl:text-lg lg:text-lg md:text-sm sm:text-sm max-h-[220px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                      Ймовірно вам знайомі фотографії величезних пухнастих собак-сенбернарів із невеличкими флягами алкоголю на шиї. Але ви, можливо, не знали, що собаки цієї породи стали гірськими рятувальниками з легкої руки ченців-августинців, які жили у Пеннінських Альпах. Вони вивели міцних та розумних собак, які не боялися морозу та вітру і, завдяки своєму нюху, відшукували засипаних снігом. 
                      </p>
                  </div>
                </div>
              </div>{" "}
              <div className="relative pt-[128px] md:pt-[128px] flex flex-col max-h-[554px] items-stretch xl:max-w-[427px]">
                <div className="flex flex-col items-stretch px-6 py-[30px] bg-white rounded-3xl">
                  <h2 className="xl:text-2xl lg:text-2xl md:text-[20px] sm:text-[18px] font-bold text-black">
                    Притулок захисту корів
                  </h2>
                  <img
                    src={girlImage}
                    alt="girl"
                    className="xl:max-w-[377px] lg:max-w-[250px] md:max-w-[250px] sm:max-w-[175px] self-stretch object-contain object-center mt-5 overflow-hidden"/>
                    <p className="p-2 mt-5 sm:p-1 xl:text-lg lg:text-lg md:text-sm sm:text-sm max-h-[176px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    Здраве Життя — це притулок захисту корів, діяльність якого спрямована на підтримання та відновлення популяції корів на основі заповідних, духовних і моральних принципів, на заміну сільськогосподарським споживчим.
                    <br></br>Наша місія<br></br>
                    Захист корів від усіх видів насильства має величезну важливість. Коли корови перебувають в умовах любові й турботи, вони максимально реалізують свою закладену Всевишнім природну функцію впорядковувати навколишній простір на енергетичному рівні.
                    </p>
                    <div className="flex items-start self-start justify-between gap-5 mt-5 ml-auto">
                      <a
                        href="https://zdrave-zyttia.site"
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
          <div className="bg-catBox bg-no-repeat bg-contain bg-[bottom_right_170px] md:flex-1 max-w-[1920px] min-h-[1064px] flex flex-col items-center self-stretch px-[240px] bg-[#FFAD00]">
            <div className="flex max-w-[1451px] justify-between xl:gap-[90px] lg:gap-[40px] md:gap-[10px] sm:gap-[10px] min-h-[1064px]">
              <div className="z-1 xl:max-w-[417px] flex flex-col items-stretch mr-90">
                <h3 className="text-3xl mt-[52px] font-bold text-black whitespace-nowrap">
                  Історії про тварин  
                  </h3>
                <div className="flex flex-col justify-center px-6 py-[30px] mt-[39px] bg-white rounded-3xl">
                  <h2 className="self-stretch xl:text-2xl lg:text-2xl md:text-[20px] sm:text-[18px] font-bold text-black">
                  Смуджи — кішка, що напала на хуліганів, які причепилися до її 5-річного власника 
                  </h2>
                  <img
                    src={boyImage}
                    alt="boy"
                    className="xl:max-w-[377px] lg:max-w-[250px] md:max-w-[250px] sm:max-w-[175px] self-stretch object-contain object-center mt-5" />
                  <p className="scrollbar-w-3 p-3 mt-5 xl:text-lg lg:text-lg md:text-sm sm:text-sm sm:p-1 max-h-[163px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    Коли п&apos;ятирічного Ітана оточили кілька хлопчиків, його мати, помітивши через вікно, як її сина штовхають на землю, прямувала до дверей, щоб провести розслідування. Однак, як тільки вона досягла переднього двору, вона стала свідком того, як їх 4-річна кішка Смуджи кинулася в бій, сичала і буквально кричала на хуліганів. Це збентежило хлопчаків і вони втекли.
                  </p>
                </div>
              </div>
              <div className="relative pt-[128px] md:pt-[128px] z-1 flex flex-col max-h-[554px] items-stretch xl:max-w-[417px]">
                <div className="flex flex-col items-stretch px-6 py-[30px] bg-white rounded-3xl">
                  <h2 className="xl:text-2xl lg:text-2xl md:text-[20px] sm:text-[18px] font-bold text-black">
                    Собака-рятувальник
                  </h2>
                  <div>
                    <img
                      src={dogImage}
                      alt="dog"
                      className="xl:max-w-[377px] lg:max-w-[250px] md:max-w-[250px] sm:max-w-[175px] self-stretch object-contain object-center mt-5 overflow-hidden"/>
                      <p className="p-2 mt-5 sm:p-1 xl:text-lg lg:text-lg md:text-sm sm:text-sm max-h-[220px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                      Ймовірно вам знайомі фотографії величезних пухнастих собак-сенбернарів із невеличкими флягами алкоголю на шиї. Але ви, можливо, не знали, що собаки цієї породи стали гірськими рятувальниками з легкої руки ченців-августинців, які жили у Пеннінських Альпах. Вони вивели міцних та розумних собак, які не боялися морозу та вітру і, завдяки своєму нюху, відшукували засипаних снігом.  
                      </p>
                  </div>
                </div>
              </div>{" "}
              <div className="relative pt-[128px] md:pt-[128px] flex flex-col max-h-[554px] items-stretch xl:max-w-[427px]">
                <div className="flex flex-col items-stretch px-6 py-[30px] bg-white rounded-3xl">
                  <h2 className="xl:text-2xl lg:text-2xl md:text-[20px] sm:text-[18px] font-bold text-black">
                    Притулок захисту корів
                  </h2>
                  <img
                    src={girlImage}
                    alt="girl"
                    className="xl:max-w-[377px] lg:max-w-[250px] md:max-w-[250px] sm:max-w-[175px] self-stretch object-contain object-center mt-5 overflow-hidden"/>
                    <p className="p-2 mt-5 sm:p-1 xl:text-lg lg:text-lg md:text-sm sm:text-sm max-h-[176px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    Здраве Життя — це притулок захисту корів, діяльність якого спрямована на підтримання та відновлення популяції корів на основі заповідних, духовних і моральних принципів, на заміну сільськогосподарським споживчим.
                    <br></br>Наша місія<br></br>
                    Захист корів від усіх видів насильства має величезну важливість. Коли корови перебувають в умовах любові й турботи, вони максимально реалізують свою закладену Всевишнім природну функцію впорядковувати навколишній простір на енергетичному рівні.
                    </p>
                    <div className="flex items-start self-start justify-between gap-5 mt-5 ml-auto">
                      <a
                        href="https://zdrave-zyttia.site"
                        className="text-base text-black grow whitespace-nowrap">
                        Перейти на сайт
                      </a>
                      <img
                        src={arrow}
                        className="object-contain object-center w-[11px] sm overflow-hidden self-stretch shrink-0 max-w-full"
                        alt="Arrow"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Slider>

        <div className="relative z-5">
          {sliderRef.current && (
            <div className="absolute top-[30px] right-[420px] z-10 dots">
              {sliderRef.current &&
                [...Array(sliderRef.current.props.children.length).keys()].map(
                  (idx) => (
                    <button
                      key={idx}
                      onClick={() => sliderRef.current.slickGoTo(idx)}
                      className={`dot ${currentSlide === idx ? "active" : ""}`}
                    ></button>
                  )
                )
              }
            </div>
          )}
        </div>
    </section>
  )
}

export default StoriesDesktop;

