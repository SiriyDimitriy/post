import React from 'react';
import {connect} from 'react-redux';
import style from '../styles/contacts.less';
// import Map from '../components/Map';
import {config} from '../utils/domUtils';

@connect(store => ({
    contacts: store.contacts
}))
class ContactsPage extends React.Component {

    render() {
        const {contacts} = this.props;
        return <div className={style.container}>
            <div className={style.contacts}>
            <div className={style.header}>Контактная информация</div>
            <div className={style.blockContainer}>
                <div className={style.block}>
                    <div className={style.label}>Наши телефоны:</div>
                    {contacts.phones && contacts.phones.map(phone => config.isMobile
                        ?
                        <a href={`tel:${phone}`}>
                            <span className={style.value}>{phone}</span>
                        </a>
                        : <span className={style.value}>{phone}</span>
                    )}
                </div>
                <div className={style.block}>
                    <div className={style.label}>Наша почта:</div>
                    <div className={style.value}>{contacts.email || ""}</div>
                </div>

                <div className={style.block}>
                    <div className={style.label}>Наш адрес:</div>
                    <div className={style.value}>{contacts.address || ""}</div>
                </div>
                <div className={style.block}>
                    <div className={style.label}>Как добраться:</div>
                    <div className={style.value}>{contacts.howToGet || ""}</div>
                </div>
                <div className={style.block}>
                    <div className={style.label}>Мы в соцсетях:</div>
                    <div className={style.value}>{contacts.social && Object.keys(contacts.social).map(item => {
                        let src = null;
                        switch (item) {
                            case 'facebook':
                                src = 'facebook.svg';
                                break;
                            case 'instagram':
                                src = 'instagram.svg';
                                break;
                        }
                        return <a href={contacts.social[item]}><img src={`svg/${src}`}/></a>
                    })}</div>
                </div>
            </div>
        </div>
            <div>
                {/*{contacts.map && <div className={style.map}><Map map={contacts.map}/></div>}*/}
            </div>
        </div>
    }
}

export default ContactsPage;
