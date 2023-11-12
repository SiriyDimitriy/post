import React, {useEffect} from 'react';
import '../styles/__colors.less';
import style from '../styles/landingApp/production.less';
import {useDispatch, useSelector} from 'react-redux';
import {fetchColors, fetchProducts} from '../actions/LandingAppActions';
import {fetchItemPropertiesNames} from '../actions/MainActions';
import ColorsTab from "../containers/ColorsTab";

const Production = React.memo(({}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchColors());
    }, []);

    useEffect(() => {
        dispatch(fetchItemPropertiesNames());
    }, []);

    const colors = useSelector(store => store.landingColors);
    const products = useSelector(store => store.landingProducts);
    const itemPropertiesNames = useSelector(store => store.itemPropertiesNames);

    const renderCharacteristics = (product) => {

        return product && <div className={style.characteristics}>{Object.keys(product.description_items)
            .filter(cardProp => itemPropertiesNames[cardProp])
            .map(cardProp => <div key={cardProp} className={style.characteristic}>
                <span>{itemPropertiesNames[cardProp]}</span>
                <span>{product.description_items[cardProp]}</span>
            </div>)}
        </div>;
    };

    const renderPrices = (product) => {
        return product && product.prices && product.prices
            .map(price => <div key={price.producer} className={style.price_row}>
                <span>{price.producer} ({price.polymer_coating})</span>
                <span className={style.price}>{price.price}</span>
            </div>);
    };

    return <section className={style.production}>
        <div className={style.production_header}>НАША ПРОДУКЦИЯ:</div>
        <div className={style.production_list}>
            {products.map(product => <div className={style.production_list_item}>
                <div className={style.characteristics_container}>
                    <img src={product.image} key={product.image} className={style.image}/>
                    <div>
                        <div className={style.productName}>{product.name}</div>
                        {renderCharacteristics(product)}
                    </div>
                </div>
                <div className={style.prices_container}>
                    <div key={'header'} className={style.prices_header}>
                        <span>Производитель</span>
                        <span className={style.price}>Цена</span>
                    </div>
                    {renderPrices(product)}
                </div>
            </div>)}
        </div>
        <div className={style.colorsHeader}>Доступные цвета и типы защитных покрытий:</div>
        <ColorsTab colors={colors}/>
    </section>;
});

export default Production;
