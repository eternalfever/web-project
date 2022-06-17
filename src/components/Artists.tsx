import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { ARTLST } from "../utils/constants";

interface IArtist {
  name: string;
  logoUrl: string;
}
/**
 * Формирует блок карусели маркетплейсов
 * @param name название маркетплейса
 * @param logoUrl ссылка на логотип
 */
function Artist({ name, logoUrl }: IArtist) {
  const ArtistStyled = styled.div`
    &:before {
      background: url(${(props: { beforeImage: any }) => props.beforeImage})
        no-repeat center/contain;
    }
  `;
  return (
    <div className="artists__item">
      <ArtistStyled className="artists__text" beforeImage={logoUrl}>
        {name}
      </ArtistStyled>
    </div>
  );
}
/**
 * экран Artists с каруселью маркетплейсов
 */
export default function Artists() {
  return (
    <section className="artists" id="artists">
      <div className="base__title">
        Top <span>NFT</span> Marketplaces
      </div>
      <div className="artists__content">
        <div className="artists__list">
          <Carousel isRTL={true} itemsToShow={3}>
            {ARTLST.map((item, i) => (
              <Artist name={item.name} logoUrl={item.logoUrl} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
