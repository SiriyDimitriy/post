import React, { useState } from 'react';
import style from '../styles/landingApp/newProduction.less';
import Title from './components/Title';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    840: { items: 2 },
    1024: { items: 3 },
    1500: { items: 4 },
};

const NewProduction = React.memo(({ config, priceConfig }) => {

    const { products, prices, colors, slider, siteName } = config;

    const [activeDecking, setActiveDecking] = useState('ПС-7');

    return (
        <div className={style.Production}>
            <div className={style.ProductionInner}>
                <div className={style.Prices}>
                    <div className={style.TableHeader}>
                        <div className={style.Product}>Виробник</div>
                        <div className={style.Price}>Ціна</div>
                    </div>
                    {priceConfig && priceConfig.prices.map(price => <div key={price.product} className={style.Row}>
                        <div className={style.Product}>{price.product}</div>
                        <div className={style.Price}>{price.price}</div>
                    </div>)}
                </div>

                <Title text={'Наша продукция'}/>
                {siteName === 'Профнастила.НЕТ'
                    ? <div className={style.Decking}>
                        {slider && <AliceCarousel mouseTracking
                                                  autoPlayStrategy={"none"}
                                                  items={slider}
                                                  responsive={responsive}
                                                  autoPlayInterval={1000}
                                                  animationDuration={1000}
                                                  animationType={"fadeout"}
                                                  autoPlay
                                                  autoPlayControls
                                                  infinite
                                                  touchTracking={false}
                            // disableDotsControls
                            // disableButtonsControls
                            // paddingLeft={300}
                            // paddingRight={300}
                        />}

                        <section className={style.List}>
                            {Object.keys(products).map(key => <div className={style.Item}
                                                                   onClick={() => setActiveDecking(key)}
                                                                   style={key === activeDecking ? { textDecoration: 'underline' } : {}}>{key}</div>)}
                        </section>

                        {products && products[activeDecking] && <div key={activeDecking} className={style.MetalTail}>
                            <div className={style.Characteristics}>
                                {Object.keys(products[activeDecking]).map(property => <div key={property}
                                                                                           className={style.Row}>
                                    <div className={style.AllAvailablePlace}>{property}</div>
                                    <div className={style.MarginLeft}>{products[activeDecking][property]}</div>
                                </div>)}
                                <div className={style.ArrowTriangle}/>
                            </div>
                        </div>}
                    </div>
                    : <div className={style.MetalTails}>
                        {products && products.map(({ label, table, image }) => <div key={label}
                                                                                    className={style.MetalTail}>
                            <div className={style.LabelBlock}>
                                <img src={image} className={style.Image}/>
                                <span className={style.Label}>{label}</span>
                                <svg viewBox="0 0 100 57" preserveAspectRatio="none" className={style.Polygon}>
                                    <polygon points="0,20 100,0 100,57 0,57"/>
                                    <line x1="0" y1="20" x2="100" y2="0" stroke="black" strokeWidth="0.25"/>
                                </svg>
                            </div>
                            <div className={style.Characteristics}>
                                {Object.keys(table).map(property => <div key={property} className={style.Row}>
                                    <div className={style.AllAvailablePlace}>{property}</div>
                                    <div className={style.MarginLeft}>{table[property]}</div>
                                </div>)}
                                <div className={style.ArrowTriangle}/>
                            </div>
                        </div>)}

                        {slider && <AliceCarousel mouseTracking
                                                  autoPlayStrategy={"none"}
                                                  items={slider}
                                                  responsive={responsive}
                                                  autoPlayInterval={1000}
                                                  animationDuration={1000}
                                                  animationType={"fadeout"}
                                                  autoPlay
                                                  autoPlayControls
                                                  infinite
                                                  touchTracking={false}
                            // disableDotsControls
                            // disableButtonsControls
                            // paddingLeft={300}
                            // paddingRight={300}
                        />}
                    </div>
                }

                <div className={style.Colors}>
                    <div className={style.ColorsHeader}>
                        Доступні кольори і типи захисних покриттів:
                    </div>
                    <div className={style.ColorList}>
                        {colors.map(color => <div key={color.hex} className={style.Color}>
                            {color.hex && <div className={style.Hex} style={{ backgroundColor: color.hex }}/>}
                            {color.img && <img className={style.Hex} src={color.img}/>}
                            <div className={style.Ral}>{color.ral}</div>
                            <div className={style.ColorName}>({color.color})</div>
                            <div className={style.Cover}>{color.cover}</div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>);
});

export default NewProduction;
