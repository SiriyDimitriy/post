import React from 'react';
import style from '../styles/landing.less';
import {getCookie} from '../utils/cookiesUtils';
import {Link} from 'react-router-dom';

class LandingPage extends React.PureComponent {

    render() {
        const viewedItems = getCookie('viewed_items') && JSON.parse(getCookie('viewed_items'));

        return <div className={style.landing}>
            <img src='images/landing1.jpg' className={style.landingImg1}/>
            <section className={style.landing_services}>
                <div className={style.landing_services_header}>Наши услуги:</div>
                <div className={style.landing_services_list}>
                    <div className={style.landing_services_list_item}>
                        <img className={style.landing_services_list_item_icon} src={'/images/svg/steps.svg'}/>
                        <div className={style.landing_services_list_item_header}>
                            Позвоните в офис
                        </div>
                        <div className={style.landing_services_list_item_description}>
                            Мы поможем сформулировать задачу и наметим шаги к её выполнению.
                        </div>
                    </div>
                    <div className={style.landing_services_list_item}>
                        <img className={style.landing_services_list_item_icon} src={'/images/svg/dimensions.svg'}/>
                        <div className={style.landing_services_list_item_header}>
                            Нужны размеры
                        </div>
                        <div className={style.landing_services_list_item_description}>
                            Можно прислать на yaplakal@com.ua, продиктовать по телефону или вызвать замерщика.
                        </div>
                    </div>
                    <div className={style.landing_services_list_item}>
                        <img className={style.landing_services_list_item_icon} src={'/images/svg/accounting.svg'}/>
                        <div className={style.landing_services_list_item_header}>
                            Расчет и смета
                        </div>
                        <div className={style.landing_services_list_item_description}>
                            Мы бесплатно рассчитаем оптимальное количество материала и смету на монтаж.
                        </div>
                    </div>
                    <div className={style.landing_services_list_item}>
                        <img className={style.landing_services_list_item_icon} src={'/images/svg/credit-card.svg'}/>
                        <div className={style.landing_services_list_item_header}>
                            Оплата
                        </div>
                        <div className={style.landing_services_list_item_description}>
                            Вы оплачиваете материал удобным способом - в офисе, на сайте или безналичным переводом.
                        </div>
                    </div>
                    <div className={style.landing_services_list_item}>
                        <img className={style.landing_services_list_item_icon} src={'/images/svg/warranty.svg'}/>
                        <div className={style.landing_services_list_item_header}>
                            Гарантия
                        </div>
                        <div className={style.landing_services_list_item_description}>
                            Мы - официальные представители производителя и выдаем гарантию на материал и монтаж.
                        </div>
                    </div>
                    <div className={style.landing_services_list_item}>
                        <img className={style.landing_services_list_item_icon} src={'/images/svg/delivery.svg'}/>
                        <div className={style.landing_services_list_item_header}>
                            Доставка
                        </div>
                        <div className={style.landing_services_list_item_description}>
                            Мы доставим купленные стройматериалы по минимальной цене быстро и бережно.
                        </div>
                    </div>
                </div>
            </section>
            {/*<Slider height={'400'} width={'400'}/>*/}
            {viewedItems && <section className={style.landing_last_viewed}>
                <div className={style.landing_last_viewed_header}>Вы смотрели:</div>
                <div className={style.landing_last_viewed_list}>
                    {viewedItems.map(el => {
                        return (
                            <Link className={style.landing_last_viewed_list_item} to={`/items/${el.id}`}>
                                <img className={style.landing_last_viewed_list_item_image}
                                     src={`/${el.images[0].src}`}/>
                                <div className={style.landing_last_viewed_list_item_title}>{el.name}</div>
                            </Link>
                        );
                    })}
                </div>
            </section>}
        </div>
    }
}

export default LandingPage;
