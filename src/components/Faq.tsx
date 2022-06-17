import { DATA } from "../utils/constants";

interface IAccordion {
  answer: string;
  question: string;
  id: number;
}
/**
 * Формирует элемент аккордеона вопросов/ответов
 * @param id  идентификатор элемента
 * @param question вопрос
 * @param answer ответ на вопрос элемент вопрос/ответ для аккордеона
 */
function Accordion({ id, answer, question }: IAccordion) {
  return (
    <li key={id} className="faq__item">
      <label htmlFor={"accordion-" + id}>
        <input type="checkbox" id={"accordion-" + id} />
        <p className="faq__question">{question}</p>
        <div className="faq__answer">{answer}</div>
      </label>
    </li>
  );
}
/**
 * экран FAQ с аккорденоном вопросов/ответов
 */
export default function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="base__title">faq</div>
      <div className="faq__content">
        <ul className="faq__accordion">
          {DATA.map((item, i) => (
            <Accordion
              key={i}
              id={i}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
