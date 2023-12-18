import LawCardMobile from "./common/LawCardMobile";
import img1 from "./../assets/images/laws/partOne/1.webp";
import img2 from "./../assets/images/laws/partOne/2.webp";
import img3 from "./../assets/images/laws/partOne/3.webp";
import img4 from "./../assets/images/laws/partOne/4.webp";
import img5 from "./../assets/images/laws/partOne/5.webp";
import img6 from "./../assets/images/laws/partOne/6.webp";
import img7 from "./../assets/images/laws/partOne/7.webp";
import img8 from "./../assets/images/laws/partOne/8.webp";
import img9 from "./../assets/images/laws/partOne/9.webp";
import img10 from "./../assets/images/laws/partOne/10.webp";
import img11 from "./../assets/images/laws/partOne/11.webp";
import img12 from "./../assets/images/laws/partOne/12.webp";
import img13 from "./../assets/images/laws/partOne/13.webp";
import img14 from "./../assets/images/laws/partOne/14.webp";
import img15 from "./../assets/images/laws/partOne/15.webp";
import img16 from "./../assets/images/laws/partOne/16.webp";
import img17 from "./../assets/images/laws/partOne/17.webp";
import img18 from "./../assets/images/laws/partOne/18.webp";
import { useState } from "react";
import LawCardDesktop from "./common/LawCardDesktop";
import LawSectionDesktop from "./common/LawSectionDesktop";
const PartOne = () => {
  const [isShowNext, setIsShowNext] = useState(false);
  return (
    <section className="flex-col mt-[60px] mb-[20px] mx-2">
      <h2 className="max-w-[1440px] mx-auto font-bold font-inter">Права тварин чатина 1</h2>
      <div className="md:hidden">
        <LawCardMobile
          title="Увага!"
          body="Жорстоким поводженням тепер вважається  не тільки  порушення правил утримання тварин,  а й інші порушення правил поводження з тваринами та порушення правил транспортування тварин."
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
          body="Особа, яка супроводжує тварину, зобов'язана тепер забезпечити наявність на домашній 
				тварині нашийника з 
				позначками-ідентифікаторами."
          image={img4}
          reverse={true}
        />
        {isShowNext ? (
          <>
            <LawCardMobile
              title="Заборонено!"
              body="Дресирувати тварин 
								у жорстокий спосіб."
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
              title="Увага!"
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
              body="Пропаганда жорстокого поводження з тваринами."
              image={img10}
              reverse={true}
            />
            <LawCardMobile
              title="Заборонено!"
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
              body="Органи Національної поліції України здійснюють нагляд за  захистом тварин від жорстокого поводження та вживають відповідних заходів."
              image={img14}
              reverse={true}
            />
          </>
        ) : null}
        {!isShowNext ? (
          <button
            onClick={() => setIsShowNext(true)}
            className="btn btn-orange"
          >
            Читати далі
          </button>
        ) : (
          <button
            onClick={() => setIsShowNext(false)}
            className="btn btn-orange"
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
          body="Особа, яка супроводжує тварину, зобов'язана тепер забезпечити наявність на домашній 
					тварині нашийника з 
					позначками-ідентифікаторами. "
        />
        <LawCardDesktop
          className="items-end justify-end"
          image={img5}
          title="Увага!"
          body="Особа, яка супроводжує тварину, зобов'язана тепер забезпечити наявність на домашній 
					тварині нашийника з 
					позначками-ідентифікаторами. "
        />
        <LawCardDesktop
          className="items-end justify-end"
          image={img6}
          title="Увага!"
          body="Дресирувати тварин 
					у жорстокий спосіб."
        />
        <LawCardDesktop
          className="items-center justify-start"
          image={img7}
          title="Увага!"
          body="Винним у жорстокому поводженні з тваринами особам забороняється утримувати тварин: протягом року (якщо особа вчинила адмін. правопорушення з жорстокого поводження щодо тварин),  протягом 10 років (якщо особа вчинила злочин проти тварини)"
        />
        <LawCardDesktop
          className="items-center justify-start"
          image={img8}
          title="Увага!"
          body="Залишати тварину без можливості укриття в приміщенні при температурі повітря більше ніж +20 °C або менше ніж 0 °C."
        />
        <LawCardDesktop
          className="items-center justify-start"
          image={img9}
          title="Увага!"
          body="Пропаганда жорстокого поводження з тваринами."
        />
        <LawCardDesktop
          className="items-center justify-start"
          image={img10}
          title="Увага!"
          body="Залишати тварину в закритому салоні автомобіля за відсутності в ньому людини при температурі повітря більше ніж +20 °C та менше ніж +5 °C."
        />
        <LawCardDesktop
          className="items-center justify-start"
          image={img11}
          title="Увага!"
          body="Пропаганда жорстокого поводження з тваринами."
        />
        <LawCardDesktop
          className="items-center justify-start"
          image={img12}
          title="Увага!"
          body="Забороняється регулювання чисельності тварин біологічно обґрунтованими методами і методами евтаназії. Лише гуманні методи (біостерилізація, влаштування у притулок,тощо)."
        />
        <LawCardDesktop
          className="items-start justify-end"
          image={img13}
          title="Увага!"
          body="Скасовано послугу евтаназії новонародженого приплоду тварин ветеринарами як обов’язкову."
        />
        <LawCardDesktop
          className="items-start justify-end"
          image={img14}
          title="Увага!"
          body="Якщо тварина хвора на сказ або іншу особливо небезпечну хворобу, для її умертвіння повинен бути обов’язково документ від ветеринара."
        />
        <LawCardDesktop
          className="items-start justify-end"
          image={img15}
          title="Увага!"
          body="Органи Національної поліції України здійснюють нагляд за  захистом тварин від жорстокого поводження та вживають відповідних заходів."
        />
        <LawCardDesktop
          className="items-start justify-end"
          image={img16}
          title="Увага!"
          body="Насильницькі дії стосовно тварин, спрямовані на задоволення статевої пристрасті 
					стало злочином, а не адмін правопорушенням."
        />
        <LawCardDesktop
          className="items-start justify-end"
          image={img17}
          title="Увага!"
          body="Встановлено гуманні умови утримання сільськогосподарських тва рин, посилено захист вагітних тварин, заборона розведення 
					птиці для фуа-гри."
        />
        <LawCardDesktop
          className="items-start justify-end"
          image={img18}
          title="Увага!"
          body="Адміністративна відповідальність  осіб за жорстоке поводження з тваринами, порушення правил утримання собак та котів  що спричинили заподіяння шкоди здоров'ю людини або її майну – з 16 років."
        />
      </LawSectionDesktop>
    </section>
  );
};

export default PartOne;
