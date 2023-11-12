import React from 'react';
import style from '../styles/landingApp/additionalProduction.less';
import Title from './components/Title';

const AdditionalProduction = React.memo(({landingMode}) => {

    const products = [
        {
            name: 'Профнастил',
            icon: '/images/landing/production/profnastil.png',
            landingMode: 'profnastil',
            link: '/profnastil.html'
        },
        {
            name: 'Водостічні системи',
            icon: '/images/landing/production/vodostochka.png',
            landingMode: 'watering',
            link: '/watering.html'
        },
        {
            name: 'Софіт',
            icon: '/images/landing/production/sofit.png',
            landingMode: 'sofit',
            link: '/sofit.html'
        },
        {
            name: 'Добірні елементи',
            icon: '/images/landing/production/dobornye_elementy.png',
            landingMode: 'additionalElements',
            link: '/additionalElements.html'
        },
        {
            name: 'Утеплювачі',
            icon: '/images/landing/production/utepliteli.png',
            landingMode: 'insulation',
            link: '/insulation.html'
        },
        {
            name: 'Металочерепиця',
            icon: '/images/landing/production/monterrey.png',
            landingMode: 'metalTail',
            link: '/metalTail.html'
        },
        {
            name: 'Фальцева крівля',
            icon: '/images/landing/production/foldedRoof.png',
            landingMode: 'foldedRoof',
            link: '/foldedRoof.html'
        },
        {
            name: 'Металевий сайдинг',
            icon: '/images/landing/production/metal-siding.png',
            landingMode: 'siding',
            link: '/siding.html'
        },
        {
            name: 'Євроштакетник',
            icon: '/images/landing/production/fence.png',
            landingMode: 'fence',
            link: '/fence.html'
        },
    ];

    return <section className={style.AdditionalProduction}>
        <div className={style.AdditionalProductionInner}>
            <Title text={'СУПУТНА ПОКРІВЕЛЬНА \nПРОДУКЦІЯ'}/>

            <div className={style.Products}>
                {products
                    .filter(product => product.landingMode !== landingMode)
                    .map(product => <a href={product.link} className={style.Product} key={product.icon}>
                        <div className={style.ImageWrapper}>
                            <img src={product.icon}/>
                        </div>
                        <div>{product.name}</div>
                        {/*<div className={style.Delimiter}/>*/}
                    </a>)}
            </div>
        </div>
    </section>;
});

export default AdditionalProduction;
