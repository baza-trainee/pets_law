import LawCardMobile from "./common/LawCardMobile";
import img1 from "./../assets/images/laws/1.webp";
import img2 from "./../assets/images/laws/2.webp";
import img3 from "./../assets/images/laws/3.webp";
import img4 from "./../assets/images/laws/4.webp";
import img5 from "./../assets/images/laws/5.webp";
import img6 from "./../assets/images/laws/6.webp";
import img7 from "./../assets/images/laws/7.webp";
import img8 from "./../assets/images/laws/8.webp";
import img9 from "./../assets/images/laws/9.webp";
import img10 from "./../assets/images/laws/10.webp";
import img11 from "./../assets/images/laws/11.webp";
import img12 from "./../assets/images/laws/12.webp";
import img13 from "./../assets/images/laws/13.webp";
import img14 from "./../assets/images/laws/14.webp";
import img15 from "./../assets/images/laws/15.webp";
import img16 from "./../assets/images/laws/16.webp";
import img17 from "./../assets/images/laws/17.webp";
import img18 from "./../assets/images/laws/18.webp";
import title from "./../assets/images/laws/title1.svg";
import titleMob from "./../assets/images/laws/title1-mob.svg";
import { useState } from "react";
// import LawCardDesktop from "./common/LawCardDesktop";
import LawSectionDesktop from "./common/LawSectionDesktop";
import LawCardDesktop from "./common/LawCardDesktop";
const PartOne = () => {
  const [isShowNext, setIsShowNext] = useState(false);
  return (
    <section id="part_1" className="relative flex-col mt-[60px] xl:mt-[120px] mb-[20px] mx-2">
      <img className="hidden md:block absolute left-[-30px]  lg:left-[0px] top-[-20px] w-[300px] h-[100px] xl:top-[-110px] xl:left-[-100px] xl:w-auto xl:h-auto 2xl:left-[0px]" src={title} alt="Права тварин" />
      <img className="block w-full md:hidden" src={titleMob} alt="Права тварин" />
      <div className="md:hidden">
        <LawCardMobile
          title="Увага!"
          body="Жорстоким поводженням тепер вважається  не тільки  порушення правил утримання тварин,  а й інші порушення правил поводження з тваринами та порушення правил транспортування тварин. "
          image={img1}
          reverse={false}
        />
        <LawCardMobile
          title="Увага!"
          body="Введене поняття «каліцтва» тварини та «тілесне ушкодження тварини», що є дуже важливим для відмежування адміністративної відповідальності від кримінальної, а внаслідок, більш ефективного їх застосування до винних осіб."
          image={img2}
          reverse={true}
        />
        <LawCardMobile
          title="Увага!"
          body="Особа, яка супроводжує домашню тварину, зобов'язана  тепер забезпечити наявність повідка, якщо тварина може становити небезпеку для життя чи здоров’я людини, а також намордника на собаках небезпечних порід. "
          image={img3}
          reverse={false}
        />
        <LawCardMobile
          title="Увага!"
          body="Особа, яка супроводжує тварину, зобов'язана тепер забезпечити наявність на домашній тварині нашийника."
          image={img4}
          reverse={true}
        />
        {isShowNext ? (
          <>
            <LawCardMobile
              title="Заборонено!"
              body="Дресирувати тварин у жорстокий спосіб."
              image={img5}
              reverse={false}
            />
            <LawCardMobile
              title="Увага!"
              body="Винним у жорстокому поводженні з тваринами особам забороняється утримувати тварин: протягом року (якщо особа вчинила адмін. правопорушення з жорстокого поводження щодо тварин),  протягом 10 років (якщо особа вчинила злочин проти тварини)"
              image={img6}
              reverse={true}
            />
            <LawCardMobile
              title="Заборонено!"
              body="Залишати тварину без можливості укриття в приміщенні при температурі повітря більше ніж +20 °C або менше ніж 0 °C."
              image={img7}
              reverse={false}
            />
            <LawCardMobile
              title="Заборонено!"
              body="Пропаганда жорстокого поводження з тваринами."
              image={img8}
              reverse={true}
            />
            <LawCardMobile
              title="Заборонено!"
              body="Залишати тварину в закритому салоні автомобіля за відсутності в ньому людини при температурі повітря більше ніж +20 °C та менше ніж +5 °C."
              image={img9}
              reverse={false}
            />
            <LawCardMobile
              title="Заборонено!"
              body="Дарувати домашніх тварин як призи, нагороди чи премії."
              image={img10}
              reverse={true}
            />
            <LawCardMobile
              title="Увага!"
              body="Забороняється регулювання чисельності тварин біологічно обґрунтованими методами і методами евтаназії. Лише гуманні методи (біостерилізація, влаштування у притулок,тощо)."
              image={img11}
              reverse={false}
            />
            <LawCardMobile
              title="Увага!"
              body="Скасовано послугу евтаназії новонародженого приплоду тварин ветеринарами як обов’язкову."
              image={img12}
              reverse={true}
            />
            <LawCardMobile
              title="Увага!"
              body="Якщо тварина хвора на сказ або іншу особливо небезпечну хворобу, для її умертвіння повинен бути обов’язково документ від ветеринара."
              image={img13}
              reverse={false}
            />
            <LawCardMobile
              title="Увага!"
              body="Органи Національної поліції України здійснюють нагляд за захистом тварин від жорстокого поводження та вживають відповідних заходів."
              image={img14}
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
          image={img1}
          title="Увага!"
          body="Жорстоким поводженням тепер вважається  не тільки  порушення правил утримання тварин,  а й інші порушення правил поводження з тваринами та порушення правил транспортування тварин. "
        />
        <LawCardDesktop
          className="items-end justify-end"
          image={img2}
          title="Увага!"
          body="Введене поняття «каліцтва» тварини та «тілесне ушкодження тварини», що є дуже важливим для відмежування адміністративної відповідальності від кримінальної, а внаслідок, більш ефективного їх застосування до винних осіб."
        />
        <LawCardDesktop
          className="items-end justify-end"
          image={img3}
          title="Увага!"
          body="Особа, яка супроводжує домашню тварину, зобов'язана  тепер забезпечити наявність повідка, якщо тварина може становити небезпеку для життя чи здоров’я людини, а також намордника на собаках небезпечних порід. "
        />
        <LawCardDesktop
          className="items-end justify-end"
          image={img4}
          title="Увага!"
          body="Особа, яка супроводжує тварину, зобов'язана тепер забезпечити наявність на домашній тварині нашийника."
        />
        <LawCardDesktop
          className="items-end justify-end"
          image={img5}
          title="Заборонено!"
          body="Дресирувати тварин у жорстокий спосіб."
        />
        <LawCardDesktop
          className="items-end justify-end"
          image={img6}
          title="Увага!"
          body="Винним у жорстокому поводженні з тваринами особам забороняється утримувати тварин: протягом року (якщо особа вчинила адмін. правопорушення з жорстокого поводження щодо тварин),  протягом 10 років (якщо особа вчинила злочин проти тварини)"
        />
        <LawCardDesktop
          className="items-center justify-start"
          image={img7}
          title="Заборонено!"
          body="Залишати тварину без можливості укриття в приміщенні при температурі повітря більше ніж +20 °C або менше ніж 0 °C."
        />
        <LawCardDesktop
          className="items-center justify-start"
          image={img8}
          title="Заборонено!"
          body="Пропаганда жорстокого поводження з тваринами."
        />
        <LawCardDesktop
          className="items-center justify-start"
          image={img9}
          title="Заборонено!"
          body="Залишати тварину в закритому салоні автомобіля за відсутності в ньому людини при температурі повітря більше ніж +20 °C та менше ніж +5 °C."
        />
        <LawCardDesktop
          className="items-center justify-start"
          image={img10} 
          title="Заборонено!"
          body="Дарувати домашніх тварин як призи, нагороди чи премії."
        />
        <LawCardDesktop
          className="items-center justify-start"
          image={img11}
          title="Увага!"
          body="Забороняється регулювання чисельності тварин біологічно обґрунтованими методами і методами евтаназії. Лише гуманні методи (біостерилізація, влаштування у притулок,тощо)."
        />
        <LawCardDesktop
          className="items-center justify-start"
          image={img12}
          title="Увага!"
          body="Скасовано послугу евтаназії новонародженого приплоду тварин ветеринарами як обов’язкову."
        />
        <LawCardDesktop
          className="items-start justify-end"
          image={img13}
          title="Увага!"
          body="Якщо тварина хвора на сказ або іншу особливо небезпечну хворобу, для її умертвіння повинен бути обов’язково документ від ветеринара."
        />
        <LawCardDesktop
          className="items-start justify-end"
          image={img14}
          title="Увага!"
          body="Органи Національної поліції України здійснюють нагляд за захистом тварин від жорстокого поводження та вживають відповідних заходів."
        />
        <LawCardDesktop
          className="items-start justify-end"
          image={img15}
          title="Заборонено!"
          body="Насильницькі дії стосовно тварин, спрямовані на задоволення статевої пристрасті стало злочином, а не адмін правопорушенням."
        />
        <LawCardDesktop
          className="items-start justify-end"
          image={img16}
          title="Заборонено!"
          body="Встановлено гуманні умови утримання сільськогосподарських тва рин, посилено захист вагітних тварин, заборона розведення птиці для фуа-гри."
        />
        <LawCardDesktop
          className="items-start justify-end"
          image={img17}
          title="Увага!"
          body="Адміністративна відповідальність  осіб за жорстоке поводження з тваринами, порушення правил утримання собак та котів  що спричинили заподіяння шкоди здоров'ю людини або її майну – з 16 років."
        />
        <LawCardDesktop
          className="items-start justify-end"
          image={img18}
          title="Заборонено!"
          body="Умертвляти тварин шляхом утоплення, задушення, використання електричного струму та отрути."
        />
      </LawSectionDesktop>
    </section>
  );
};

export default PartOne;
