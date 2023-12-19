import vectorPaw from "../assets/images/about/VectorPaw.png";
import catBackground from "../assets/images/about/catBackground.svg";
import vectorArrow from "../assets/images/about/VectorArrow.svg";
import vectorArrowMob from "../assets/images/about/VectorArrowMob.svg";
import vectorHeart from "../assets/images/about/VectorHeart.svg";

const About = () => {
  return (
    <section id="about" className="relative block mx-auto bg-blue">
      <div className="hidden relative sm:block mx-auto max-w-[1920px] min-h-[992px]">
        {/* Desktop */}
        <div className=" relative float-right bottom-0 right-0 w-[711px] h-[992px]">
          <img
            className="hidden xl:block z-10 md:mt-[40px] 2xl:mr-[50px] md:mr-[80px] relative float-right rotate-40 2xl:w-[38%] 2xl:h-[27%] md:w-[32%] md:h-[23%]"
            src={vectorPaw}
            alt="Paw"
          />
          <img
            className="absolute block lg:w-[100%] lg:h-[100%] md:w-[80%] md:h-[80%] sm:w-[68%] sm:h-[68%] bottom-0 right-0"
            src={catBackground}
            alt="Cat"
          />
          <div className="hidden lg:block absolute lg:h-[100%] md:h-[70%] inset-0 bg-gradient-to-l from-transparent from-60% to-blue"></div>
        </div>
        <div className="sm:bg-none absolute z-9 lg:w-[40%] md:w-[50%] sm:w-[85%] block md:bg-white lg:min-h-[16%] rounded-[30px] px-[30px] py-[20px] 2xl:top-[9%] sm:top-[5%] 2xl:left-[31%] sm:left-[7%]">
          <p className="text-black items-center font-inter 2xl:text-[25px] md:text-[22px] sm:text-[20px] not-italic font-normal 2xl:leading-[30px] sm:leading-[25px] ">
            Багато людей знають, що володіння домашньою твариною може бути
            цікавим і приємним досвідом. Але крім цього, є ще багато причин,
            чому домашня тварина корисна для емоційного та фізичного
            здоров&apos;я людей.
          </p>
        </div>
        <div className="absolute bg-white lg:w-[263px] lg:min-h-[10%] sm:min-h-[8%] md:w-[240px] sm:w-[220px] rounded-[30px] 2xl:top-[32%] xl:top-[20%] md:top-[12%] sm:top-[22%] 2xl:left-[63%] xl:left-[55%] sm:left-[63%] p-5 z-9">
          <p className="text-black items-center lg:text-[25px] md:text-[22px] sm:text-[20px] not-italic font-normal font-inter lg:leading-[30px] sm:leading-[25px]">
            Ось чотири самих росповсюджених
          </p>
        </div>
        <div className="bg-white absolute xl:max-w-[24%] sm:max-w-[50%] sm:min-h-[7%] rounded-[30px] top-[34%] 2xl:left-[25%] xl:left-[20%]  sm:left-[7%] xl:p-[30px] sm:p-[15px] z-9">
          <p className="text-black items-center xl:text-[18px] md:text-[16px] sm:text-[14px] not-italic font-normal font-inter leading-[22px]">
            1. Допомога у боротьбі зі стресом - звірята можуть мати
            терапевтичний ефект на людину, знижувати рівень стресу та допомагати
            заспокоїтися.
          </p>
        </div>
        <div className="absolute bg-white xl:max-w-[25%] sm:max-w-[50%] xl:min-h-[15%] md:min-h-[10%] sm:min-h-[7%] rounded-[30px] xl:top-[59%] sm:top-[49%] 2xl:left-[12%] lx:left-[6%] sm:left-[7%] xl:p-[30px] sm:p-[15px] z-9">
          <p className="text-black items-center xl:text-[18px] md:text-[16px] sm:text-[14px] not-italic font-normal font-inter leading-[22px]">
            2. Зменшення ризику алергічних реакцій в майбутньому - діти, які
            зростають з домашніми тваринами, менше схильні до алергічних реакцій
            на тваринний пух та шерсть.
          </p>
        </div>
        <div className="absolute bg-white xl:max-w-[28%] sm:max-w-[50%] xl:min-h-[15%] md:min-h-[10%] rounded-[30px] xl:top-[61%] sm:top-[66%] 2xl:left-[44%] xl:left-[37%] sm:left-[7%] xl:p-[30px] sm:p-[15px] z-9">
          <p className="text-black items-center xl:text-[18px] md:text-[16px] sm:text-[14px] not-italic font-normal font-inter leading-[22px]">
            3. Стимулювання розвитку почуття відповідальності - у дітей виростає
            почуття відповідальності, оскільки їм потрібно доглядати за
            твариною, годувати її та забезпечувати потребним доглядом.
          </p>
        </div>
        <div className="absolute bg-white 2xl:max-w-[43%] sm:max-w-[50%] min-h-[10%] rounded-[30px] 2xl:top-[81%] sm:top-[84%] 2xl:left-[19%] sm:left-[7%] xl:p-[30px] sm:p-[15px] z-9">
          <p className="text-black items-center xl:text-[18px] md:text-[16px] sm:text-[14px] not-italic font-normal font-inter leading-[22px]">
            4. Зменшення почуття самотності - у власників тварин завжди є
            компанія, що допомагає зменшити почуття самотності та відчуття
            нескінченної одинокості.
          </p>
        </div>
        <div className="hidden md:block absolute 2xl:top-[42%] xl:top-[27%] md:top-[18%] 2xl:left-[55%] xl:left-[45%] md:left-[60%] md:w-[16%] md:h-[15%]">
          <img
            className="z-9 stroke-3 stroke-lightBlue xl:max-w-[100%] xl:h-[100%] md:max-w-[115%] md:h-[115%]"
            src={vectorArrow}
            alt="Arrow"
          />
        </div>
        <div className="md:hidden absolute w-[160px] h-[154px] top-[20%] left-[41%]">
          <img
            className="z-9 stroke-3 w-[100%] h-[100%]"
            src={vectorArrowMob}
            alt="Arrow"
          />
        </div>
        <div className=" absolute overflow-hidden xl:w-[235px] xl:h-[205px] 2xl:top-[23%] 2xl:left-[16.8%] xl:top-[27%] xl:left-[13%] md:-right-[0px] md:top-[300px] sm:-right-[0px] sm:top-[440px]">
          <img
            className="relative right-[-50%] -rotate-11 2xl:w-[100%] 2xl:h-[100%] xl:right-0 sm:w-[70%] sm:h-[70%] relate z-9 "
            src={vectorHeart}
            alt="Heart"
          />
        </div>
      </div>

      {/* Mobile */}

      <div className="sm:hidden block w-[390px] h-[670px]">
        <div className="bg-none block z-9 w-[100%] h-[16%] px-[20px] py-[20px]">
          <p className="text-black items-center font-inter text-[14px] not-italic font-normal leading-[17px]">
            Багато людей знають, що володіння домашньою твариною може бути
            цікавим і приємним досвідом. Але крім цього, є ще багато причин,
            чому домашня тварина корисна для емоційного та фізичного
            здоров&apos;я людей.
          </p>
        </div>
        <div className="bg-none block w-[100%] h-[72%] z-20">
          <div className="absolute bottom-0 right-0 w-[390px] h-[546px]">
            <img
              className="absolute block w-[100%] h-[100%]"
              src={catBackground}
              alt="Cat"
            />
          </div>
          <div className="absolute bg-white w-[38%] h-[10%] rounded-[10px] top-[18%] left-[58%] p-2.5 z-9">
            <p className="text-black items-center text-[14px] not-italic font-normal font-inter leading-[17px]">
              Ось чотири самих росповсюджених
            </p>
          </div>
          <div className="absolute w-[40%] h-[15%] top-[17%] left-[18%]">
            <img
              className="w-[100%] h-[100%]"
              src={vectorArrowMob}
              alt="Arrow"
            />
          </div>
          <div className=" bg-white relative w-[71%] h-auto rounded-r-[10px] py-[10px] pl-[21px] pr-[10px] top-[21%] z-9">
            <p className="text-black items-center text-[10px] not-italic font-normal font-inter leading-3">
              1. Допомога у боротьбі зі стресом - звірята можуть мати
              терапевтичний ефект на людину, знижувати рівень стресу та
              допомагати заспокоїтися.
            </p>
          </div>
          <div className=" bg-white w-[71%] relative h-auto rounded-r-[10px] py-[10px] pl-[21px] pr-[10px] top-[25%] z-9">
            <p className="text-black items-center text-[10px] not-italic font-normal font-inter leading-3">
              2. Зменшення ризику алергічних реакцій в майбутньому - діти, які
              зростають з домашніми тваринами, менше схильні до алергічних
              реакцій на тваринний пух та шерсть.
            </p>
          </div>
          <div className="relative block top-[33%]">
            <div className=" bg-white w-[38%] relative h-auto rounded-r-[10px] pt-[10px] pr-[10px] pl-[20px] z-20">
              <p className="text-black items-center text-[10px] not-italic font-normal font-inter leading-3">
                3. Стимулювання розвитку почуття відповідальності - у дітей
                виростає почуття відповідальності,
              </p>
            </div>
            <div className=" bg-white w-[44%] relative h-auto rounded-r-[10px] py-[10px] pl-[20px] -top-[10px] z-1">
              <p className="text-black items-center text-[10px] not-italic font-normal font-inter leading-3">
                оскільки їм потрібно доглядати за твариною, годувати її та
                забезпечувати потребним доглядом.
              </p>
            </div>
          </div>
          <div className=" bg-white relative w-[47%] h-auto rounded-r-[10px] py-[10px] pl-[21px] pr-[10px] top-[35%] z-9">
            <p className="text-black items-center text-[10px] not-italic font-normal font-inter leading-3">
              4. Зменшення почуття самотності - у власників тварин завжди є
              компанія, що допомагає зменшити почуття самотності та відчуття
              нескінченної одинокості.
            </p>
          </div>
          <div className=" absolute w-[31%] h-[19%] -right-[8%] bottom-[47%]">
            <img
              className=" w-[100%] h-[100%] stroke-3 z-9"
              src={vectorHeart}
              alt="Heart"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
