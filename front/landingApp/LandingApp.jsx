import React from 'react';
import Plants from './Users';
import NewProduction from './NewProduction';
import style from '../styles/landingApp/landing.less';
import NewServices from './NewServices';
import NewHeader from './NewHeader';
import Footer from './Footer';
import { getConfig } from './config';
import { getPriceConfig } from './prices';
// import 'react-s-alert/dist/s-alert-default.css';
// import 'react-s-alert/dist/s-alert-css-effects/scale.css';
// import Alert from 'react-s-alert';
import Superiorities from './Superiorities';
import Users from './Users';
import Construction from './Construction';
import Usages from './Usages';

const LandingApp = React.memo(({ landingMode }) => {
    // const config = getConfig(landingMode);
    // const priceConfig = window && window.priceConfig && window.priceConfig[landingMode];

    const priceConfig = {
        siteName: 'Водостока.НЕТ',
        prices: [{
            product: "Телескопічна щогла AS-13000",
            price: "18000 грн"
        }, {
            product: "Телескопічна щогла AS-11500",
            price: "17000 грн"
        }, {
            product: "Телескопічна щогла AS-10500",
            price: "15000 грн"
        }, {
            product: "Телескопічна щогла AS-9500",
            price: "14000 грн"
        },{
            product: "Телескопічна щогла AS-8500",
            price: "13000 грн"
        }, {
            product: "Телескопічна щогла AS-6000",
            price: "12000 грн"
        },{
            product: "Телескопічна щогла AS-8000L полегшена",
            price: "14000 грн"
        }, {
            product: "Телескопічна щогла нестандарнтного розміру та конструкції",
            price: "Договірна"
        }],
    };

    const config = {
        siteName: 'Крыши.НЕТ',
        header: "Металочерепиця \nта комплектуючі",
        subHeader: "Роздрібний та оптовий продаж всіх видів черепиці \nта комплектуючих.",
        motivationMessage: "Якщо у Вас ще немає металочерепиці, тоді Вам до нас!",
        logoImg: "/images/landing/landing-logo.jpg",
        mainImg: "/images/landing/roof-main.png",
        products: [{
            label: 'Телескопічна \nщогла 13000',
            image: '/images/catalog/post-13000.jpg',
            table: {
                'Транспортні розміри': '1750х250х250мм',
                'Максимальна робоча висота': '13м',
                'Матеріали секцій': 'Алюміній АД31',
                'Вага': '15.5кг',
            },
        }, {
            label: 'Телескопічна \nщогла 11500',
            image: '/images/catalog/post-11500.jpg',
            table: {
                'Транспортні розміри': '1450х200х200мм',
                'Максимальна робоча висота': '11.5м',
                'Матеріали секцій': 'Алюміній АД31',
                'Вага': '14кг',
            },
        }, {
            label: 'Телескопічна \nщогла 10500',
            image: '/images/catalog/post-10500.jpg',
            table: {
                'Транспортні розміри': '1450х200х200мм',
                'Максимальна робоча висота': '10.5м',
                'Матеріали секцій': 'Алюміній АД31',
                'Вага': '12кг',
            },
        },  {
            label: 'Телескопічна \nщогла 9500',
            image: '/images/catalog/post-8500.jpg',
            table: {
                'Транспортні розміри': '1300х200х200мм',
                'Максимальна робоча висота': '9.5м',
                'Матеріали секцій': 'Алюміній АД31, Д16Т, АМг5',
                'Вага': '10.5кг',
            },
        },  {
            label: 'Телескопічна \nщогла 8500',
            image: '/images/catalog/post-8500.jpg',
            table: {
                'Транспортні розміри': '1300х200х200мм',
                'Максимальна робоча висота': '8.5м',
                'Матеріали секцій': 'Алюміній АД31, Д16Т, АМг5',
                'Вага': '9.5кг',
            },
        },{
            label: 'Телескопічна \nщогла 6000',
            image: '/images/catalog/post-8500.jpg',
            table: {
                'Транспортні розміри': '1150х200х200мм',
                'Максимальна робоча висота': '6.0м',
                'Матеріали секцій': 'Алюміній АД31, Д16Т, АМг5',
                'Вага': '7.5кг',
            },
        },
            {
                label: 'Телескопічна полегшена \nщогла 8000',
                image: '/images/catalog/post-8000.jpg',
                table: {
                    'Транспортні розміри': '1500х200х200мм',
                    'Максимальна робоча висота': '8.0м',
                    'Матеріали секцій': 'Алюміній АД31, Д16Т, АМг5, карбон',
                    'Вага': '8.0кг',
                },
            },
        ]};

    return <div className={style.wrapper}>
        <NewHeader config={config}/>

        <NewProduction config={config} landingMode={landingMode} priceConfig={priceConfig}/>

        <NewServices/>

        <Superiorities />

        <Usages/>

        <Construction/>

        {/*<AdditionalProduction landingMode={landingMode}/>*/}
        <Users/>

        <Footer config={config}/>
        {/*<Alert stack={{ limit: 6 }}*/}
        {/*       key='alert'*/}
        {/*       effect='scale'*/}
        {/*       timeout={10000}*/}
        {/*       position='top-right'*/}
        {/*/>*/}
    </div>;
});

export default LandingApp;
