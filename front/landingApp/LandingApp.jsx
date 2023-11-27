import React from 'react';
import Plants from './Users';
import NewProduction from './NewProduction';
import AdditionalProduction from './AdditionalProduction';
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
            product: "Телескопічна щогла 11500",
            price: "17000 грн"
        }, {
            product: "Телескопічна щогла 10500",
            price: "15000 грн"
        }, {
            product: "Телескопічна щогла 8500",
            price: "13000 грн"
        }, {
            product: "Телескопічна щогла 8000 полегшена",
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
        products: [ {
            label: 'Телескопічна \nщогла 11500',
            image: '/images/catalog/post-11500.jpg',
            table: {
                'Транспортні розміри': '1450х200х200мм',
                'Максимальна робоча висота': '11.5м',
                'Вага': '14кг',
            },
        }, {
            label: 'Телескопічна \nщогла 10500',
            image: '/images/catalog/post-10500.jpg',
            table: {
                'Транспортні розміри': '1450х200х200мм',
                'Максимальна робоча висота': '10.5м',
                'Вага': '12кг',
            },
        },  {
            label: 'Телескопічна \nщогла 8500',
            image: '/images/catalog/post-8500.jpg',
            table: {
                'Транспортні розміри': '1300х200х200мм',
                'Максимальна робоча висота': '8.5м',
                'Вага': '9.5кг',
            },
        },
            {
                label: 'Телескопічна полегшена \nщогла 8000',
                image: '/images/catalog/post-8000.jpg',
                table: {
                    'Транспортні розміри': '1500х200х200мм',
                    'Максимальна робоча висота': '8.0м',
                    'Вага': '8.0кг',
                },
            },
        ]};

    return <div>
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
