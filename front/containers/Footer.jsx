import React from 'react'
import {connect} from 'react-redux';
import style from '../styles/footer.less';

@connect(store => ({
    contacts: store.contacts
}))
class Footer extends React.Component {
    render() {
        const {contacts} = this.props;
        return (
            <div className={style.footer}>
                <section className={style.footer_main}>
                    <section className={style.footer_main_phones}>
                        <div className={style.footer_main_phones_header}>Наші телефони:</div>
                        <div className={style.footer_main_phones_content}>+380998887766</div>
                    </section>
                    <section className={style.footer_main_schedule}>
                        <div className={style.footer_main_schedule_header}>Графік роботи:</div>
                        <div className={style.footer_main_schedule_content}>ПН - СБ: 00:30–21:00</div>
                    </section>
                    <section className={style.footer_main_address}>
                        <div className={style.footer_main_address_header}>Адреса:</div>
                        <div className={style.footer_main_address_content}>г. Київ, ул. Єбаньковская, 6, оф. 666</div>
                    </section>
                    <section className={style.footer_main_links}>
                        <div className={style.footer_main_links_header}>Ссилки:</div>
                        <div className={style.footer_main_links_content}>
                            {contacts.social && Object.keys(contacts.social).map(item => {
                                let src = null;
                                switch (item) {
                                    case 'facebook':
                                        src = 'facebook.svg';
                                        break;
                                    case 'instagram':
                                        src = 'instagram.svg';
                                        break;
                                }
                                return <a className={style.footer_main_links_content_item} href={contacts.social[item]} key={item}><img alt={item} src={`svg/${src}`}/></a>
                            })}
                        </div>
                    </section>
                </section>
                <section className={style.footer_rights}>
                    © 2018—2020 Компания «Ебтваюмать». Все права защищены.
                </section>
            </div>
        );
    }
}

export default Footer;
