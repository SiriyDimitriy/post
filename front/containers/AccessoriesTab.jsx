import React from 'react';
import style from '../styles/accessories_tab.less';
import {openMagnifyingPopup} from '../actions/MagnifyPopupActions';
import {useDispatch, useSelector} from 'react-redux';
import {config} from '../utils/domUtils';

const AccessoriesTab = React.memo(({additionalElements}) => {
    const dispatch = useDispatch();
    const phone = useSelector(store => store.contacts.phones && store.contacts.phones[0]);

    if (!additionalElements || !additionalElements.length) return null;
    return <div className={style.accessoriesContainer}>
        {additionalElements.map(item => <div className={style.accessoriesItem} key={item.name}>
            <img className={style.image} src={item.src} onClick={() => dispatch(openMagnifyingPopup(item.src))}/>
            <div className={style.title}>{item.name}</div>
            <div className={style.additionalInfo}>Толщина стали: {item.steel_sickness}</div>
            <div className={style.Price}>Цену уточняйте</div>
            {config.isMobile && phone && <a href={`tel:${phone}`}>
                             <button className={style.Call}>Позвонить</button>
                         </a>}
        </div>)}
    </div>;

});

export default AccessoriesTab;
