import LawCardMobile from "./common/LawCardMobile";
import img25 from "./../assets/images/laws/25.webp";
import img26 from "./../assets/images/laws/26.webp";
import img27 from "./../assets/images/laws/27.webp";
import img28 from "./../assets/images/laws/28.webp";
import img29 from "./../assets/images/laws/29.webp";
import img30 from "./../assets/images/laws/30.webp";
import img31 from "./../assets/images/laws/31.webp";
import img32 from "./../assets/images/laws/32.webp";
import img33 from "./../assets/images/laws/33.webp";
import img34 from "./../assets/images/laws/34.webp";
import img35 from "./../assets/images/laws/35.webp";
import img36 from "./../assets/images/laws/36.webp";
import titleMob from "./../assets/images/laws/title3-mob.svg";
import { useState } from "react";

const PartThree = () => {
  const [isShowNext, setIsShowNext] = useState(false);
  return (
    <section id="part_3" className="flex-col mx-2 md:hidden mt-[60px] mb-[20px]">
      <img className="block md:hidden w-full" src={titleMob} alt="Права тварин" />
      <div className="">
        <LawCardMobile
          title="Заборонено!"
          body="Завдавати домашнім 
				тваринам болю, страждання 
				або пригнічення.
				"
          image={img25}
          reverse={false}
        />
        <LawCardMobile
          title="Заборонено!"
          body="Залишати домашню тварину прив'язаною без нагляду в громадських місцях, поблизу зупинок, магазинів тощо.
				"
          image={img26}
          reverse={true}
        />
        <LawCardMobile
          title="Заборонено!"
          body="Замуровування тварин у підвальних приміщеннях.
				"
          image={img27}
          reverse={false}
        />

        {isShowNext ? (
          <>
            <LawCardMobile
              title="Заборонено!"
              body="Виключено умертвіння тимчасово ізольованих  безпритульних домашніх тварин.
								"
              image={img28}
              reverse={true}
            />
            <LawCardMobile
              title="Увага!"
              body="Поводок тварин на прив'язі – не менше 20 метрів, для сторожових собак – не менше 10 метрів.
								"
              image={img29}
              reverse={false}
            />
            <LawCardMobile
              title="Заборонено!"
              body="Залишати тварину без можливості укриття в приміщенні при температурі повітря більше ніж +20 °C або менше ніж 0 °C.
								"
              image={img30}
              reverse={true}
            />
            <LawCardMobile
              title="Увага!"
              body="Законом тепер встановлюється вичерпний перелік для умертвіння тварин.
								"
              image={img31}
              reverse={false}
            />
            <LawCardMobile
              title="Увага!"
              body="Захищено права домашніх тварин:
								"
              image={img32}
              reverse={true}
            />
            <LawCardMobile
              title="Увага!"
              body="
								Місцеві ради тепер також повинні  не допускати діяльності пересувних виставок та зоопарків, іншої забороненої діяльності, а також встановлюють перелік тварин, які потребують охорони на їх території.
								"
              image={img33}
              reverse={false}
            />
            <LawCardMobile
              title="Заборонено!"
              body="Прив'язувати тварин до
								машин/мотоциклів 
								та примушувати до бігу.
								"
              image={img34}
              reverse={true}
            />
            <LawCardMobile
              title="Увага!"
              body="Адміністративна відповідальність  за неприбирання власником тварини її екскрементів під час перебування тварини у громадському місці.
								"
              image={img35}
              reverse={false}
            />
            <LawCardMobile
              title="Заборонено!"
              body="Жебракування з тваринами,
								в т.ч. безпритульними."
              image={img36}
              reverse={true}
            />
          </>
        ) : null}
        {!isShowNext ? (
          <button
            onClick={() => setIsShowNext(true)}
            className="w-full btn btn-orange"
          >
            Читати далі
          </button>
        ) : (
          <button
            onClick={() => setIsShowNext(false)}
            className="w-full btn btn-orange"
          >
            Згорнути
          </button>
        )}
      </div>
    </section>
  );
};

export default PartThree;
