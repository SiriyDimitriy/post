import React from 'react';
import '../styles/__colors.less';
import style from '../styles/landingApp/plants.less';

const Plants = React.memo(({}) => {

    const plants = [{
        image: '/images/producers/arcelor_mittal_belgium.jpg',
    }, {
        image: '/images/producers/bryza.jpg',
    }, {
        image: '/images/producers/dongbu_steel.jpg',
    }, {
        image: '/images/producers/metipol.jpg',
    }, {
        image: '/images/producers/sutor.jpg',
    }, {
        image: '/images/producers/tata_steel.jpg',
    }];

    return <section className={style.Plants}>
        <div className={style.PlantsInner}>
            {/*<div className={style.PlantsHeader}>{'Мы являемся официальными представителями \nзаводов-изготовителей стали:'}</div>*/}
            <div className={style.Plants}>
                {plants.map(plant => <img className={style.Plant} src={plant.image} key={plant.image}/>)}
            </div>
        </div>
    </section>;
});

export default Plants;
