import "./Pricing.scss";
import PricingCard from "./pricingCard/PricingCard";

const Pricing = () => {
  const pricing = [
    {
      id: 1,
      title: 'Базовый',
      serviceCount: '03',
      price: 'Бесплатный',
      best: false,
      services: [
        {
          id: 1,
          title: 'You can use 12 links everyday',
          available: true,
        },
        {
          id: 2,
          title: 'Chat Support',
          available: true,
        },
        {
          id: 3,
          title: 'Weekly Meeting For Teams',
          available: true,
        },
        {
          id: 4 ,
          title: 'You can use 12 links everyday',
          available: false,
        },
        {
          id: 5 ,
          title: 'Tags',
          available: false,
        },
        {
          id: 6,
          title: 'Tags2',
          available: false,
        },
        {
          id: 7,
          title: 'Tags3',
          available: false,
        }
      ]
    },
    {
      id: 2,
      title: 'Стандарт',
      serviceCount: '05',
      price: '50 000 т',
      best: true,
      services: [
        {
          id: 1,
          title: 'You can use 12 links everyday',
          available: true,
        },
        {
          id: 2,
          title: 'Chat Support',
          available: true,
        },
        {
          id: 3,
          title: 'Weekly Meeting For Teams',
          available: true,
        },
        {
          id: 4 ,
          title: 'You can use 12 links everyday',
          available: true,
        },
        {
          id: 5 ,
          title: 'Tags',
          available: true,
        },
        {
          id: 6,
          title: 'Tags2',
          available: false,
        },
        {
          id: 7,
          title: 'Tags3',
          available: false,
        }
      ]
    },
    {
      id: 3,
      title: 'Премиум',
      serviceCount: '07',
      price: '100 000 т',
      best: false,
      services: [
        {
          id: 1,
          title: 'You can use 12 links everyday',
          available: true,
        },
        {
          id: 2,
          title: 'Chat Support',
          available: true,
        },
        {
          id: 3,
          title: 'Weekly Meeting For Teams',
          available: true,
        },
        {
          id: 4 ,
          title: 'You can use 12 links everyday',
          available: true,
        },
        {
          id: 5 ,
          title: 'Tags',
          available: true,
        },
        {
          id: 6,
          title: 'Tags2',
          available: true,
        },
        {
          id: 7,
          title: 'Tags3',
          available: true,
        }
      ]
    },
  ]
  return (
    <div className="pricing" id="pricing">
      <div className="container">
        <h1 className="title">🛄 Тарифы</h1>
        <p className="subtitle">
          Мы также уделяем особое внимание качеству и свежести нашего кофе. Мы сотрудничаем только с лучшими кофейнями и кофейными производителями, чтобы наши клиенты получали только лучший кофе.
        </p>
        <div className="pricing-list">
          {
            pricing.map((p) => {
              return (
                <div key={p.id} className="pricing-list_item">
                  <PricingCard pricing={p} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Pricing;
