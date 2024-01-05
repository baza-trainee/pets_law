import LawCardMobile from "./common/LawCardMobile";
import img15 from "./../assets/images/laws/15.webp";
import img16 from "./../assets/images/laws/16.webp";
import img17 from "./../assets/images/laws/17.webp";
import img18 from "./../assets/images/laws/18.webp";
import img19 from "./../assets/images/laws/19.webp";
import img20 from "./../assets/images/laws/20.webp";
import img21 from "./../assets/images/laws/21.webp";
import img22 from "./../assets/images/laws/22.webp";
import img23 from "./../assets/images/laws/23.webp";
import img24 from "./../assets/images/laws/24.webp";
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
import title from "./../assets/images/laws/title2.svg";
import titleMob from "./../assets/images/laws/title2-mob.svg";

import { useState } from "react";
import LawCardDesktop from "./common/LawCardDesktop";
import LawSectionDesktop from "./common/LawSectionDesktop";

const PartTwo = () => {
  const [isShowNext, setIsShowNext] = useState(false);
  return (
    <section id="part_2" className="relative flex-col mx-2 mt-[60px] xl:mt-[180px] mb-[20px]">
      <img className="hidden md:block absolute left-[-30px]  lg:left-[0px] top-[-20px] w-[300px] h-[100px] xl:top-[-110px] xl:left-[-100px] xl:w-auto xl:h-auto 2xl:left-[0px]" src={title} alt="Права тварин" />
      <img className="block md:hidden w-full" src={titleMob} alt="Права тварин" />
      <div className="md:hidden">
        <LawCardMobile
          title="Увага!"
          body="Насильницькі дії стосовно тварин, спрямовані на задоволення статевої пристрасті 
					стало злочином, а не адмін правопорушенням."
          image={img15}
          reverse={false}
        />
        <LawCardMobile
          title="Увага!"
          body="Встановлено гуманні умови утримання сільськогосподарських тва рин, посилено захист вагітних тварин, заборона розведення 
					птиці для фуа-гри."
          image={img16}
          reverse={true}
        />
        <LawCardMobile
          title="Увага!"
          body="Адміністративна відповідальність  осіб за жорстоке поводження з тваринами, порушення правил утримання собак та котів  що спричинили заподіяння шкоди здоров'ю людини або її майну – з 16 років."
          image={img17}
          reverse={false}
        />

        {isShowNext ? (
          <>
            <LawCardMobile
              title="Увага!"
              body="Умертвляти тварин шляхом утоплення, задушення, використання електричного струму та отрути."
              image={img18}
              reverse={true}
            />
            <LawCardMobile
              title="Заборонено!"
              body="Бити, травмувати, отруювати тварин, примушування до нападу одних тварин на інших, використовувати тварин як мішень при стрільбі."
              image={img19}
              reverse={false}
            />
            <LawCardMobile
              title="Заборонено!"
              body="Умертвіння тварин для регулювання чисельності безпритульних тварин."
              image={img20}
              reverse={true}
            />
            <LawCardMobile
              title="Заборонено!"
              body="Заборонено зменшення заповідних зон та забезпечення перекриття їх шлагбаумами."
              image={img21}
              reverse={false}
            />
            <LawCardMobile
              title="Заборонено!"
              body="Надавати фотопослуги 
								з дикими тваринами."
              image={img22}
              reverse={true}
            />
            <LawCardMobile
              title="Увага!"
              body="Встановлено порядок тимчасового вилучення тварини та зобов’язання службових осіб щодо їх вилучення у кримінальному процесі та процесі за КУпАП."
              image={img23}
              reverse={false}
            />
            <LawCardMobile
              title="Заборонено!"
              body="Бити, вбивати, отруювати чи калічити домашніх тварин, дарувати домашніх тварин як призи, нагороди чи премії."
              image={img24}
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
      <LawSectionDesktop>
        <LawCardDesktop
          className="items-end justify-end"
          image={img19}
          title="Заборонено!"
          body="Бити, травмувати, отруювати тварин, примушування до нападу одних тварин на інших, використовувати тварин як мішень при стрільбі."
        />
        <LawCardDesktop
          className="items-end justify-end"
          image={img20}
          title="Заборонено!"
          body="Умертвіння тварин для регулювання чисельності безпритульних тварин."
        />
        <LawCardDesktop
          className="items-end justify-end"
          image={img21}
          title="Заборонено!"
          body="Заборонено зменшення заповідних зон та забезпечення перекриття їх шлагбаумами."
        />
        <LawCardDesktop
          className="items-end justify-end"
          image={img22}
          title="Заборонено!"
          body="Надавати фотопослуги 
					з дикими тваринами."
        />
        <LawCardDesktop
          className="items-end justify-end"
          image={img23}
          title="Увага!"
          body="Встановлено порядок тимчасового вилучення тварини та зобов’язання службових осіб щодо їх вилучення у кримінальному процесі та процесі за КУпАП."
        />
        <LawCardDesktop
          className="items-end justify-end"
          image={img24}
          title="Заборонено!"
          body="Бити, вбивати, отруювати чи калічити домашніх тварин, дарувати домашніх тварин як призи, нагороди чи премії."
        />
        <LawCardDesktop
          className="items-center justify-start"
          image={img25}
          title="Заборонено!"
          body="Завдавати домашнім 
					тваринам болю, страждання 
					або пригнічення.
					"
        />
        <LawCardDesktop
          className="items-center justify-start"
          image={img26}
          title="Заборонено!"
          body="Залишати домашню тварину прив'язаною без нагляду в громадських місцях, поблизу зупинок, магазинів тощо."
        />
        <LawCardDesktop
          className="items-center justify-start"
          image={img27}
          title="Заборонено!"
          body="Замуровування тварин у підвальних приміщеннях."
        />
        <LawCardDesktop
          className="items-center justify-start"
          image={img28}
          title="Увага!"
          body="Виключено умертвіння тимчасово ізольованих  безпритульних домашніх тварин."
        />
        <LawCardDesktop
          className="items-center justify-start"
          image={img29}
          title="Заборонено!"
          body="Поводок тварин на прив'язі – не менше 20 метрів, для сторожових собак – не менше 10 метрів."
        />
        <LawCardDesktop
          className="items-center justify-start"
          image={img30}
          title="Увага!"
          body="Залишати тварину без можливості укриття в приміщенні при температурі повітря більше ніж +20 °C або менше ніж 0 °C."
        />
        <LawCardDesktop
          className="items-start justify-end"
          image={img31}
          title="Увага!"
          body="Законом тепер встановлюється вичерпний перелік для умертвіння тварин."
        />
        <LawCardDesktop
          className="items-start justify-end"
          image={img32}
          title="Увага!"
          body="Захищено права домашніх тварин:"
        />
        <LawCardDesktop
          className="items-start justify-end"
          image={img33}
          title="Заборонено!"
          body="Місцеві ради тепер також повинні  не допускати діяльності пересувних виставок та зоопарків, іншої забороненої діяльності, а також встановлюють перелік тварин, які потребують охорони на їх території."
        />
        <LawCardDesktop
          className="items-start justify-end"
          image={img34}
          title="Увага!"
          body="Прив'язувати тварин до
					машин/мотоциклів 
					та примушувати до бігу.
					"
        />
        <LawCardDesktop
          className="items-start justify-end"
          image={img35}
          title="Увага!"
          body="Адміністративна відповідальність  за неприбирання власником тварини її екскрементів під час перебування тварини у громадському місці."
        />
        <LawCardDesktop
          className="items-start justify-end"
          image={img36}
          title="Увага!"
          body="Жебракування з тваринами,
					в т.ч. безпритульними."
        />
      </LawSectionDesktop>
    </section>
  );
};

export default PartTwo;
