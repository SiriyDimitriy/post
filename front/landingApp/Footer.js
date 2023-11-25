import React from 'react';
import style from '../styles/landingApp/footer.less';

const Footer = React.memo(() => {

    return <div className={style.Footer}>
        <div className={style.FooterInner}>
            <div className={style.ContactName}>
                <img className={style.LogoImage} src={'/images/post-logo.png'}/>
            </div>

            <div className={style.Info}>
                <img className={style.Icon} src={'/svg/services/location.svg'}/>
                <span>м.Київ</span>
            </div>

            <div className={style.Info}>
                <img className={style.Icon} src={'/svg/services/schedule.svg'}/>
                <span>без вихідних, 24/7</span>
            </div>

            <div className={style.ContactPhones}>
                <a href="https://api.whatsapp.com/send?phone=+380955291236">
                    <img src={'/svg/services/whatsapp.svg'} className={style.PhoneIcon}/>
                </a>

                <a href="https://signal.me/#p/+380955291236">
                    <img src={'/svg/services/signal.svg'} className={style.PhoneIcon}/>
                </a>
            </div>
        </div>
    </div>;
});

export default Footer;
