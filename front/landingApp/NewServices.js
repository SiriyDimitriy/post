import React from 'react';
import style from '../styles/landingApp/newServices.less';
import Title from './components/Title';

const NewServices = React.memo(({}) => {

    const services = [{
        label: 'Зконтактуйте',
        image: '/svg/services/phone.svg',
        description: 'Я допоможу зформувати завдання згідно Ваших вимог та вирішити його максимально швидко та гнучко.'
    }, {
        label: 'Перевірена та запатентована конструкція',
        image: '/svg/services/guarantee.svg',
        description: 'Адаптована до використання в складних умовах, перевірена багатьма користувачами та запатентована конструкція.'
    },{
        label: 'Гарантія. Сервіс. 24/7',
        image: '/svg/services/24-hours.svg',
        description: 'Гарантія, ремонт та безкоштовне обслуговування на період спєціальнай ваєннай апірациі.'
    }, {
        label: 'Оплата',
        image: '/svg/services/wallet.svg',
        description: 'На рахунок ФОП. Безготівковий розрахунок.'
    },{
        label: 'Доставка',
        image: '/svg/services/fast-delivery.svg',
        description: 'Новою поштою, безкоштовно, швидко та дбайливо.'
    }];

    return <div className={style.Services}>
        <div className={style.ServicesInner}>
            <Title text={'послуги'}/>
            <div className={style.ServiceList}>
                {services.map(({label, description, image}, i) => <div key={label} className={style.Service}>
                    <div className={style.Text}>
                        <img src={image} className={style.Image}/>
                        <div className={style.Label}>{label}</div>
                        <div className={style.Description}>{description}</div>
                    </div>
                    {i !== services.length - 1
                        ? <svg viewBox="0 0 100 57" preserveAspectRatio="none" className={style.Polygon}>
                            <polygon points="0,5 100,0 100,57 0,57"/>
                            <line x1="0" y1="5" x2="100" y2="0" stroke="black" strokeWidth="0.25"/>
                        </svg>
                        : <svg viewBox="0 0 200 57" preserveAspectRatio="none" className={style.Polygon}>
                            <polygon points="0,5 200,0 200,57 0,57"/>
                            <line x1="0" y1="5" x2="200" y2="0" stroke="black" strokeWidth="0.25"/>
                        </svg>}
                </div>)}
            </div>
        </div>
    </div>;
});

export default NewServices;
