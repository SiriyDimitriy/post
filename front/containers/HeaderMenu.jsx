import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';

import style from '../styles/menu.less';
import {config} from '../utils/domUtils';

const HeaderMenu = React.memo(({}) => {

    const phones = useSelector(store => (store.contacts && store.contacts.phones) || []);
    return (
        <div className={style.header}>
            <img className={style.logo} src={'images/logo-krof.png'}/>
            <div className={style.navMenu}>
                <NavLink key={1} to={'/'} exact={true}>Главная</NavLink>
                <NavLink key={2} to={'/contacts'}>Контакты</NavLink>
                <NavLink key={3} to={'/items'}>Каталог</NavLink>
            </div>
            <div className={style.headerContacts}>
                {phones.map(phone => config.isMobile
                    ? <a href={`tel:${phone}`} key={phone}>
                        <div className={style.contact}>{phone}</div>
                    </a>
                    : <div className={style.contact} key={phone}>{phone}</div>
                )}
            </div>
        </div>
    );
});

export default HeaderMenu;
