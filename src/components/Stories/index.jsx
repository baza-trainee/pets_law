import boyImage from "../../assets/images/stories/boy.webp";
import dogImage from "../../assets/images/stories/dog.webp";
import girlImage from "../../assets/images/stories/girl.webp";
import horseImage from "../../assets/images/stories/horse.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card.jsx";

const Stories = () => {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
    mobileFirst: true,
  };

  return (
    <section className="pt-12 text-black bg-white md:bg-yellowBg">
      <div className="mx-auto max-w-[1472px] px-4   bg-cover position_right_80 md:bg-story md:pb-[320px]">
        <h3 className="mb-10 ml-5 text-3xl font-bold">Історії про тварин</h3>
        <Slider {...settings}>
          <div>
            <Card
              title="Смуджи — кішка, що напала на хуліганів, які причепилися до її
              5-річного власника"
              body="Коли п'ятирічного Ітана оточили кілька хлопчиків, його мати, помітивши
              через вікно, як її сина штовхають на землю, прямувала до дверей, щоб
              провести розслідування. Однак, як тільки вона досягла переднього
              двору, вона стала свідком того, як їх 4-річна кішка"
              image={boyImage}
            />
          </div>
          <div>
            <Card
              title="Собака-рятувальник"
              body="Ймовірно вам знайомі фотографії величезних пухнастих собак-
              сенбернарів із невеличкими флягами алкоголю на шиї. Але ви, можливо,
              не знали, що собаки цієї породи стали гірськими рятувальниками з
              легкої руки ченців-августинців, які жили у Пеннінських Альпах. Вони
              вивели міцних та розумних собак, які не боялися морозу та вітру і,
              завдяки своєму нюху"
              image={dogImage}
            />
          </div>
          <div>
            <Card
              title="Притулок захисту корів"
              body="Здраве Життя — це притулок захисту корів, діяльність якого спрямована
              на підтримання та відновлення популяції корів на основі заповідних,
              духовних і моральних принципів, на заміну сільськогосподарським
              споживчим.&nbsp;Наша місія&nbsp; Захист корів від усіх видів
              насильства має величезну важливість."
              image={girlImage}
              link="https://zdrave-zyttia.site/"
            />
          </div>
          <div>
            <Card
              title="ПЕТ-ТЕРАПІЯ: ЯК ТВАРИНИ НАС ЛІКУЮТЬ"
              body="У 1977 році психіатри Сем і Елізабет Корсон відкрили першу
              терапевтичну програму, яка використовувала домашніх тварин в процесі
              терапії. Ця програма існувала на базі"
              image={horseImage}
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Stories;
