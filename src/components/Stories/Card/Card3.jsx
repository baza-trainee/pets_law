import girlImage from "../../../assets/images/stories/girl.webp";
import arrow from "../../../assets/images/stories/arrow.svg";

const Card3 = () => {
  return (
    <article className="md:!flex md:!justify-center px-3">
      <div className="px-5 bg-yellowBg md:bg-white py-7 rounded-3xl w-[330px] xl:w-[417px] h-[682px] md:h-[554px]">
        <h4 className="text-2xl font-bold">Собака-рятувальник</h4>
        <img className="my-2.5 " src={girlImage} alt="dogImage" />
        <p className="overflow-y-auto h-[380px] md:h-[230px] xl:h-[200px] text-lg xl:scrollbar-w-3 xl:scrollbar xl:scrollbar-thumb-gray-700 xl:scrollbar-track-gray-300 xl:scrollbar-thumb-rounded-full xl:scrollbar-track-rounded-full">
          Здраве Життя — це притулок захисту корів, діяльність якого спрямована
          на підтримання та відновлення популяції корів на основі заповідних,
          духовних і моральних принципів, на заміну сільськогосподарським
          споживчим. <br /> Наша місія <br /> Захист корів від усіх видів
          насильства має величезну важливість.
        </p>
        <div className="flex justify-end gap-3 mt-3">
          <a href="#" className="">
            Перейти на сайт
          </a>
          <img src={arrow} alt="Arrow" />
        </div>
      </div>
    </article>
  );
};

export default Card3;
