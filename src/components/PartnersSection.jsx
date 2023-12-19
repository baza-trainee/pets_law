import baza from "../assets/baza_trainee.webp";
import uanimals from "../assets/uanimals.webp";
import murrfecto from "../assets/murr_fecto.webp";
import zdrave from "../assets/cow_protection.webp";

const PartnersSection = () => {
  const options = [
    {
      img: baza,
      title: "baza-trainee.tech",
      link: "https://baza-trainee.tech/ua",
    },
    {
      img: uanimals,
      title: "uanimals.org",
      link: "https://uanimals.org/",
    },
    {
      img: murrfecto,
      title: "murrfecto.site",
      link: "#",
    },
    {
      img: zdrave,
      title: "zdrave-zyttia.site",
      link: "https://zdrave-zyttia.site/",
    },
  ];

  return (
    <section id="partners">
      <div className="container max-w-[1920px] px-[calc(20px+(240-20)*((100vw-390px)/(1920-390)))] pb-[30px] md:pb-[0] md:h-[566px] mx-auto bg-partnersMobil md:bg-partners bg-cover bg-center my-0">
        <div className="flex justify-center items-end md:items-start flex-col md:gap-[145px]">
          <div className="w-full mb-[45px]">
            <h3 className="text-[#181717] md:text-[24px] sm:text-[30px] leading-normal font-bold mt-[50px] md:mt-[30px]">
              Партнери
            </h3>
            <p className="block md:hidden text-[#181717] text-[16px] leading-normal mt-[10px]">
              Без друзів нікуди
            </p>
          </div>
          <ul className="flex flex-col md:flex-row gap-[calc(10px+(60-10)*((100vw-390px)/(1920-390)))]  justify-center text-[#000] text-[calc(16px+(18-16)*((100vw-390px)/(1920-390)))] leading-normal font-normal ">
            {options.map(({ img, title, link }) => (
              <li key={title} className="text-center">
                <img
                  src={img}
                  alt="Сайт партнера baza-trainee.tech"
                  width="150"
                  height="150"
                  className=" w-[calc(100px+(150-100)*((100vw-390px)/(1920-390)))] mx-auto mb-[20px]"
                />
                <a href={link} target="_blank" rel="noreferrer" title={title}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="block md:hidden bg-white w-[350px] max-w-full h-[40px] rounded-[20px] text-black cursor-pointer text-[16px] leading-normal font-normal border-[1px] border-black transition-colors duration-250 ease-in-out focus:bg-[#D0A716] hover:bg-[#D0A716] mt-[40px] mx-auto"
          >
            Підтримати проєкт
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
