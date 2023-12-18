import  { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { girlImage, boyImage, dogImage, arrow } from "../../assets/images/stories";

const StorySlide = ({ title, image, content, link }) => (
  <div className="min-h-[682px] items-center bg-white">
    <div className="z-10 ml-[20px]">
      <div className="max-w-[330px] px-6 py-[20px] mt-6 mb-8 bg-[#FFAD00] rounded-3xl">
          <h2 className="w-[290px] text-2xl md:text-[20px] font-bold text-black">{title}</h2>
          <img src={image} alt="girl" className="max-w-[290px] object-contain object-center my-5" />
          <p className="scrollbar-w-3 mt-5 text-black max-h-[370px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            {content}
          </p>
          <div className="flex items-start self-start justify-between gap-5 mt-5">
            <a href={link} className="text-base text-right text-black grow whitespace-nowrap">
              Перейти на сайт
            </a>
            <img src={arrow} className="object-contain object-center w-[11px] overflow-hidden self-stretch shrink-0 max-w-full" alt="Arrow"/>
          </div>
      </div>
    </div>
  </div>
);

const StoriesMobile = ({ isOpenMobile }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      setCurrentSlide(index);
    },
  };

  return (
    <section className={`keen-slider ${isOpenMobile ? "mobile-slider" : ""} mx-auto my-auto`}>
      <Slider {...settings}>
        <StorySlide
          title="Притулок захисту корів"
          image={girlImage}
          content="Здраве Життя — це притулок захисту корів, діяльність якого спрямована на підтримання та відновлення популяції корів на основі заповідних, духовних і моральних принципів, на заміну сільсько-господарським споживчим. Наша місія Захист корів від усіх видів насильства має величезну важливість. Коли корови перебувають в умовах любові й турботи, вони максимально реалізують свою закладену Всевишнім природну функцію впорядковувати навколишній простір на енергетичному рівні."
          link="#"
        />
        <StorySlide
          title="Смуджи — кішка, що напала на хуліганів"
          image={boyImage}
          content="Коли п'ятирічного Ітана оточили кілька хлопчиків, його мати, помітивши через вікно, як її сина штовхають на землю, прямувала до дверей, щоб провести розслідування. Однак, як тільки вона досягла переднього двору, вона стала свідком того, як їх 4-річна кішка Смуджи кинулася в бій, сичала і буквально кричала на хуліганів."
          link="#"
        />
        <StorySlide
          title="Собака-рятувальник"
          image={dogImage}
          content="Ймовірно вам знайомі фотографії величезних пухнастих собак-сенбернарів із невеличкими флягами алкоголю на шиї. Але ви, можливо, не знали, що собаки цієї породи стали гірськими рятувальниками з легкої руки ченців-августинців, які жили у Пеннінських Альпах. Дорога ця була важкою: і тому, що пролягала на висоті двох з
          половиною кілометрів, і через погодні умови тих місць — бурі починалися несподівано й захоплені в дорозі
          мандрівники часто втрачали напрямок, через що гинули."
          link="#"
        />
      </Slider>

      <div className="absolute top-[95%] right-[13%] z-0 mt-[10px]">
        <div className="dots">
          {[...Array(3).keys()].map((idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={"dot" + (currentSlide === idx ? " active" : "")}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesMobile;
