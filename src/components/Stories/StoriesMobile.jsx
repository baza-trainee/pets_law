import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { girlImage, horseImage, dogImage, arrow } from "../../assets/images/stories";

const StorySlide = ({ title, image, content, link }) => (
  <div className="min-h-[682px] items-center bg-white">
    <div className="z-10 ml-[15px]">
      <div className="max-w-[330px] px-6 py-[20px] mt-6 mb-8 bg-[#FFAD00] rounded-3xl">
        <h2 className="w-[290px] text-2xl font-bold text-black">{title}</h2>
        <img src={image} alt="girl" className="max-w-[290px] object-contain object-center my-5" />
        <h6 className="text-[18px] scrollbar-w-3 mt-5 text-black max-h-[370px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          {content}
        </h6>
        <div className="flex items-start self-start justify-between gap-5 mt-5">
          <a href={link} className="text-base text-right text-black grow whitespace-nowrap">
            Перейти на сайт
          </a>
          <img src={arrow} className="object-contain object-center w-[11px] overflow-hidden self-stretch shrink-0 max-w-full" alt="Arrow" />
        </div>
      </div>
    </div>
  </div>
);

const SliderDots = ({ currentSlide, totalSlides, goToSlide }) => (
  <div className="absolute top-[44%] left-1/2 transform -translate-x-1/2 z-10 dots-mob">
    {[...Array(totalSlides).keys()].map((idx) => (
      <button
        key={idx}
        onClick={() => goToSlide(idx)}
        className={`dot-mob ${currentSlide === idx ? "active" : ""}`}
      ></button>
    ))}
  </div>
);

const StoriesMobile = ({ isOpenMobile }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 5000,
    afterChange: (index) => {
      setCurrentSlide(index);
    },
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <section className={`keen-slider ${isOpenMobile ? "mobile-slider" : ""} mx-auto my-auto`}>
      <Slider {...settings} ref={sliderRef}>
        <StorySlide
          title="Притулок захисту корів"
          image={girlImage}
          content="Здраве Життя — це притулок захисту корів, діяльність якого спрямована на підтримання та відновлення популяції корів на основі заповідних, духовних і моральних принципів, на заміну сільсько-господарським споживчим. Наша місія Захист корів від усіх видів насильства має величезну важливість. Коли корови перебувають в умовах любові й турботи, вони максимально реалізують свою закладену Всевишнім природну функцію впорядковувати навколишній простір на енергетичному рівні."
          link="https://zdrave-zyttia.site"
        />
        <StorySlide
          title="ПЕТ-ТЕРАПІЯ: ЯК ТВАРИНИ НАС ЛІКУЮТЬ"
          image={horseImage}
          content="У 1977 році психіатри Сем і Елізабет Корсон відкрили першу терапевтичну програму, яка використовувала домашніх тварин в процесі терапії. Ця програма існувала на базі психіатричної клініки при Державному університеті штату Огайо. Учасникам терапевтичної групи запропонували вибрати собі вихованців з сусіднього притулку для собак. І вже через кілька тижнів багато хто відзначив, що відчувають себе набагато впевненіше і незалежно, ніж раніше."
        />
        <StorySlide
          title="Собака-рятувальник"
          image={dogImage}
          content="Ймовірно вам знайомі фотографії величезних пухнастих собак-сенбернарів із невеличкими флягами алкоголю на шиї. Але ви, можливо, не знали, що собаки цієї породи стали гірськими рятувальниками з легкої руки ченців-августинців, які жили у Пеннінських Альпах. Дорога ця була важкою: і тому, що пролягала на висоті двох з
          половиною кілометрів, і через погодні умови тих місць — бурі починалися несподівано й захоплені в дорозі
          мандрівники часто втрачали напрямок, через що гинули."
        />
      </Slider>
      <SliderDots currentSlide={currentSlide} totalSlides={3} goToSlide={goToSlide} />
    </section>
  );
};

export default StoriesMobile;
