import React from 'react';
import style from '../styles/landingApp/footer.less';

const Footer = React.memo(({config}) => {

    return <div className={style.Footer}>
        <div className={style.FooterInner}>
            <div className={style.ContactName}>
                <img className={style.LogoImage} src={config.logoImg}/>
            </div>
            <div className={style.ContactPhones}>
                <a href="tel:+380632938167">
                    <div className={style.ContactPhone}>
                        <img src={'/svg/services/phone.svg'} className={style.PhoneIcon}/>
                        +380963095377
                    </div>
                </a>
                <a href="tel:+380996163334">
                    <div className={style.ContactPhone}>
                        <img src={'/svg/services/phone.svg'} className={style.PhoneIcon}/>
                        +380936471572
                    </div>
                </a>
                <a href="tel:+380979066763">
                    <div className={style.ContactPhone}>
                        <img src={'/svg/services/phone.svg'} className={style.PhoneIcon}/>
                        +380668423770
                    </div>
                </a>
            </div>
        </div>
    </div>;
});

export default Footer;
