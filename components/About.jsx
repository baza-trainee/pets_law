import vectorPaw from "../assets/VectorPaw.png";
import catBackground from "../assets/catBackground.svg";
import vectorArrow from "../assets/VectorArrow.svg";
import vectorHeart from "../assets/VectorHeart.svg";
const About = () => {
  return (
    <section className="relative block max-w-[1920px] min-h-[992px] mx-auto bg-blue">
      <div className="relative float-right bottom-0 right-0 w-[746px] h-[1040px]">
        <img
          className="z-30 2xl:-mt-[20px] xl:-mt-[5px] 2xl:mr-[50px] xl:mr-[80px] relative block float-right rotate-40 2xl:w-[287px] 2xl:h-[275px] xl:w-[260px] xl:h-[255px]"
          src={vectorPaw}
          alt="Paw"
        />
        <img
          className="absolute block float-right xl:w-[100%] xl:h-[100%]  xl:-mt-[48px] -z-5"
          src={catBackground}
          alt="Cat"
        />
        <div className="absolute block -mt-[48px] xl:h-[100%] inset-0 bg-gradient-to-l from-transparent from-60% to-blue"></div>
      </div>
      <div className="absolute z-40 xl:max-w-[770px] block bg-white min-h-[160px] rounded-[30px] px-[30px] py-[20px] top-[9%] 2xl:left-[31%] xl:left-[13%]">
        <p className="text-black items-center font-inter text-[25px] not-italic font-normal leading-[30px]">
          Багато людей знають, що володіння домашньою твариною може бути цікавим
          і приємним досвідом. Але крім цього, є ще багато причин, чому домашня
          тварина корисна для емоційного та фізичного здоров&apos;я людей.
        </p>
      </div>
      <div className="absolute bg-white max-w-[263px] min-h-[100px] rounded-[30px] top-[32%] 2xl:left-[63%] xl:left-[50%] p-5 z-40">
        <p className="text-black items-center text-[25px] not-italic font-normal font-inter leading-[30px]">
          Ось чотири самих росповсюджених
        </p>
      </div>
      <div className="bg-white absolute max-w-[466px] min-h-[148px] rounded-[30px] top-[37%] 2xl:left-[25%] xl:left-[10%] p-[30px] z-40">
        <p className="text-black items-center text-[18px] not-italic font-normal font-inter leading-[22px]">
          1. Допомога у боротьбі зі стресом - звірята можуть мати терапевтичний
          ефект на людину, знижувати рівень стресу та допомагати заспокоїтися.
        </p>
      </div>
      <div className="absolute bg-white 2xl:max-w-[484px] 2xl:min-h-[148px] xl:max-w-[384px] xl:min-h-[198px] rounded-[30px] top-[59%] 2xl:left-[12%] xl:left-[6%] p-[30px] z-40">
        <p className="text-black items-center text-[18px] not-italic font-normal font-inter leading-[22px]">
          2. Зменшення ризику алергічних реакцій в майбутньому - діти, які
          зростають з домашніми тваринами, менше схильні до алергічних реакцій
          на тваринний пух та шерсть.
        </p>
      </div>
      <div className="absolute bg-white 2xl:max-w-[533px] 2xl:min-h-[148px] rounded-[30px] xl:max-w-[433px] xl:min-h-[190px] top-[61%] 2xl:left-[44%] xl:left-[37%] p-[30px] z-40">
        <p className="text-black items-center text-[18px] not-italic font-normal font-inter leading-[22px]">
          3. Стимулювання розвитку почуття відповідальності - у дітей виростає
          почуття відповідальності, оскільки їм потрібно доглядати за твариною,
          годувати її та забезпечувати потребним доглядом.
        </p>
      </div>
      <div className="absolute bg-white 2xl:max-w-[828px] xl:max-w-[780px] min-h-[104px] rounded-[30px] 2xl:top-[81%] xl:top-[85%] 2xl:left-[19%] xl:left-[9%] p-[30px] z-40">
        <p className="text-black items-center text-[18px] not-italic font-normal font-inter leading-[22px]">
          4. Зменшення почуття самотності - у власників тварин завжди є
          компанія, що допомагає зменшити почуття самотності та відчуття
          нескінченної одинокості.
        </p>
      </div>
      <div className="absolute top-[42%] 2xl:left-[55%] xl:left-[50%] 2xl:w-[308px] 2xl:h-[149px] xl:w-[220px] xl:h-[100px]">
        <img
          className="z-30 stroke-3 stroke-lightBlue"
          src={vectorArrow}
          alt="Arrow"
        />
      </div>
      <div className="absolute w-[235px] h-[205px] 2xl:top-[23%] 2xl:left-[16.8%] xl:top-[27%] xl:left-[3%]">
        <img
          className="-rotate-11 2xl:w-[100%] 2xl:h-[100%] xl:w-[70%] xl:h-[70%] relate z-30"
          src={vectorHeart}
          alt="Heart"
        />
      </div>
    </section>
  );
};

export default About;
