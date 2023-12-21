import boyImage from "../../../assets/images/stories/boy.webp";

const Card1 = () => {
  return (
    <article className="md:!flex md:!justify-center px-3">
      <div className="px-5 bg-yellowBg md:bg-white py-7 rounded-3xl w-[330px] xl:w-[417px] h-[682px] xl:h-[554px]">
        <h4 className="text-2xl font-bold">
          Смуджи — кішка, що напала на хуліганів, які причепилися до її
          5-річного власника
        </h4>
        <img className="my-3" src={boyImage} alt="boyImage" />
        <p className="overflow-y-auto text-lg xl:scrollbar-w-3 h-[308px] xl:h-[150px] xl:scrollbar xl:scrollbar-thumb-gray-700 xl:scrollbar-track-gray-300 xl:scrollbar-thumb-rounded-full xl:scrollbar-track-rounded-full">
          Коли п'ятирічного Ітана оточили кілька хлопчиків, його мати, помітивши
          через вікно, як її сина штовхають на землю, прямувала до дверей, щоб
          провести розслідування. Однак, як тільки вона досягла переднього
          двору, вона стала свідком того, як їх 4-річна кішка
        </p>
      </div>
    </article>
  );
};

export default Card1;
