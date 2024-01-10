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
          infinite: false,
          dots: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
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
              title="КАРГ - команда, що визволяє пухнастиків з халепи"
              body="Рятувати вуличних тварин з вулиць Києва - це сюди. Команда порятунку визволяє не тільки котів і собак, а і білок, лисиць, єнотів і навіть птахів з найнеочікувніших пасток - дерев, дахів, недобудов, колодців і посадок. В списку ГО декілька сотень звернень щорічно."
              image={boyImage}
              link="https://www.karg.kyiv.ua/"
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
              title="Притулок для захисту корів, с.Буша, Вінницька обл."
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
