import React from 'react';
import style from '../styles/landingApp/newServices.less';
import Title from './components/Title';

const NewServices = React.memo(({}) => {

    const services = [{
        label: 'Зателефонуйте в офіс',
        image: '/svg/services/phone.svg',
        description: 'Ми допоможемо зформувати завдання та намітимо кроки до його вирішення.'
    }, {
        label: 'Необхідні розміри',
        image: '/svg/services/mail.svg',
        description: 'Можна прислати на yaplakal@com.ua, продиктувати по телефону чи викликати замірника.'
    }, {
        label: 'Розрахунок та кошторис',
        image: '/svg/services/calculator.svg',
        description: 'Ми безкоштовно розрахуємо оптимальну кількість матеріалу та кошторис на монтаж.'
    }, {
        label: 'Оплата',
        image: '/svg/services/wallet.svg',
        description: 'Ви оплачуєте матеріал зручним способом – в офісі, на сайті або безготівковим переказом.'
    }, {
        label: 'Гарантія',
        image: '/svg/services/guarantee.svg',
        description: 'Ми - офіційні представники виробника та надаємо гарантію на матеріал та монтаж.'
    }, {
        label: 'Доставка',
        image: '/svg/services/fast-delivery.svg',
        description: 'Ми доставимо куплені будматеріали за мінімальною ціною швидко та дбайливо.'
    }, {
        label: 'Монтаж',
        image: '/svg/services/roof.svg',
        description: 'Ми робимо покрівельні роботи будь-якої складності. Починаючи з монтажу кроквяної конструкції і закінчуючи встановленням водостоків, коників та відливів.'
    }];

    return <div className={style.Services}>
        <div className={style.ServicesInner}>
            <Title text={'Наші послуги'}/>
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
