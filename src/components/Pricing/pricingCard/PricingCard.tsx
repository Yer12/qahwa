import "./PricingCard.scss";
import Diamond from "../../../assets/Diamond";
import Checked from "../../../assets/Checked";
import NotAvailable from "../../../assets/NotAvailable";
import BestDiamond from "../../../assets/BestDiamond";

type Pricing = {
  id: number;
  title: string;
  serviceCount: string;
  price: string;
  best: boolean,
  services: {
    id: number;
    title: string;
    available: boolean;
  }[];
}
type Props = {
    pricing: Pricing;
}

const PricingCard = (props: Props) => {
  const { title, serviceCount, best, price, services } = props.pricing;

  return (
    <div className="pricing-card" id="pricing">
      <div className="pricing-card_top">
        special
      </div>
      <div className="pricing-card_body" style={{ backgroundImage: `url(${best ? './images/pricingBgBest.svg' : './images/pricingBg.svg' })`}}>
        <div className="pricing-card_body-header">
          <div className="pricing-card_body-header-left">
            <div className="pricing-card_body-header-left_icon">
              {
                best ? <BestDiamond /> : <Diamond />
              }
            </div>
            <div className="pricing-card_body-header-left_info">
              <p className="pricing-card_body-header-left_info-title" style={{ color: `${best && 'white'}`}}>{title}</p>
              <p className="pricing-card_body-header-left_info-subtitle"><span style={{ color: `${best && 'white'}`}}>{serviceCount}</span> service</p>
            </div>
          </div>
          <div className="pricing-card_body-header-right">
            <p style={{ color: `${best && 'white'}`}}>{price}</p>
          </div>
        </div>
        <div className="pricing-card_body-divider" />
        <div className="pricing-card_body-services">
          {services.map((s) => {
            return (
              <div key={s.id} className={`pricing-card_body-services_list ${!s.available && 'not-available'}`}>
                <div className="pricing-card_body-services_list-icon">
                  {s.available ? <Checked /> : <NotAvailable />}
                </div>
                <p className="pricing-card_body-services_list-text" style={{ color: `${best && 'white'}`}}>{s.title}</p>
              </div>
            )
          })}
        </div>

        <div className="pricing-card_body-divider" />
        <div className="pricing-card_body-btn">
          Купить
        </div>
      </div>
    </div>
  )
}

export default PricingCard;
