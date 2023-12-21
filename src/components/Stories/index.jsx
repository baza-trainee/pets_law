// import {
//   girlImage,
//   boyImage,
//   dogImage,
//   catImage,
//   arrow,
// } from "../../assets/images/stories";
import Card1 from "./Card/Card1.jsx";
import Card2 from "./Card/Card2.jsx";
import Card3 from "./Card/Card3.jsx";
import Card4 from "./Card/Card4.jsx";
import catImage from "../../assets/images/stories/cat-bg.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Stories = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    // autoplay: true,
    // autoplaySpeed: 5000,
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
      <div className="mx-auto max-w-[1472px] px-4 ">
        <h3 className="mb-10 text-3xl font-bold">Історії про тварин</h3>
        <Slider {...settings}>
          <div>
            <Card1 />
          </div>
          <div>
            <Card2 />
          </div>
          <div>
            <Card3 />
          </div>
          <div>
            <Card4 />
          </div>
        </Slider>
        <div className="hidden sm:block ">
          <img
            className="object-contain ml-auto sm:h-[310px] xl:h-full"
            src={catImage}
            alt="catImage"
          />
        </div>
      </div>
    </section>
  );
};

export default Stories;
