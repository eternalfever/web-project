import { ModuleResolutionKind } from "typescript";
import { HEADER } from "../utils/constants";
import logo from "../../src/img/logo.gif";

interface IHeaderItem {
  text: string;
  href: string;
}
/**
 * шапка сайта с навигацией по лендингу
 */
export default function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="#">
        <img src={logo} alt="logo" />
      </a>
      <ul className="header__navigation">
        {HEADER.map((item, i) => (
          <HeaderElement key={i} text={item.text} href={item.href} />
        ))}
      </ul>
    </header>
  );
}
/**
 * Формирование элемента меню в хедере
 * @param text текст ссылки в хедере
 * @param href якорная ссылка для перехода на необходимый экран
 */
function HeaderElement({ text, href }: IHeaderItem) {
  return (
    <li>
      <a className="header__item" href={href}>
        {text}
      </a>
    </li>
  );
}
