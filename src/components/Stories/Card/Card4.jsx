import horseImage from "../../../assets/images/stories/horse.webp";

const Card4 = () => {
  return (
    <article className="md:!flex md:!justify-center px-3">
      <div className="px-5 bg-yellowBg md:bg-white py-7 rounded-3xl w-[330px] xl:w-[417px] h-[682px] md:h-[554px]">
        <h4 className="text-2xl font-bold">
          ПЕТ-ТЕРАПІЯ: ЯК ТВАРИНИ НАС ЛІКУЮТЬ
        </h4>
        <img className="w-full my-3" src={horseImage} alt="boyImage" />
        <p className="overflow-y-auto text-lg  h-[308px] md:h-[200px] xl:h-[150px]  xl:scrollbar-thumb-gray-700 xl:scrollbar-track-gray-300 xl:scrollbar-thumb-rounded-full xl:scrollbar-track-rounded-full">
          У 1977 році психіатри Сем і Елізабет Корсон відкрили першу
          терапевтичну програму, яка використовувала домашніх тварин в процесі
          терапії. Ця програма існувала на базі
        </p>
      </div>
    </article>
  );
};

export default Card4;
