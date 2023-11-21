import React, { useState } from 'react';
import style from '../styles/landingApp/newHeader.less';
import Title from './components/Title';
import Button from './components/Button';
import ModalWindow from '../components/ModalWindow/ModalWindow';
import Alert from 'react-s-alert';

const NewHeader = React.memo(({ config }) => {

    const promoCards = [{
        label: 'Зроблено з ненавистю до рашистів',
        image: '/svg/services/explosion.svg',
    },{
        label: 'Розробка та постійне вдосконалення',
        image: '/svg/services/arrow-up-graph.svg',
    }, {
        label: 'Ціни по собівартості матеріалів та робіт',
        image: '/svg/services/discount.svg',
    }, {
        label: 'Практична та легка в користуванні конструкція',
        image: '/svg/services/fingers.svg',
    }];

    const [visibleModal, setModalVisibility] = useState(false);
    const [name, setUserName] = useState('');
    const [phone, setUserPhone] = useState('');
    const [comment, setUserComment] = useState('');

    const openModal = () => {
        setModalVisibility(true);
    };

    const sendCallRequest = () => {
        const requestBody = {
            name: name,
            phone: phone,
            comment: comment
        };

        if (!name || !phone || (!name && !phone)) {
            Alert.error("Заповніть обов\'язкові поля (ім\'я та телефон)");
            return;
        }

        fetch('/api/feedback/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody),
            })
            .then((res) => {
                return {res: res.json(), status: res.status};
            })
            .then((data) => {
                if (data.status === 200) {
                    Alert.success('Ваш запит відправлено, очікуйте дзвінка менеджера.');
                    setModalVisibility(false);
                }
            })
    };

    const ModalHeader = () => <section className={style.ModalHeader}>Замовити зворотній дзвінок</section>;

    const ModalButtons = [
        <Button className={style.SubmitButton} onClickHandler={sendCallRequest}>Замовити</Button>,
        <Button className={style.CancelButton} onClickHandler={() => setModalVisibility(false)}>Відмінити</Button>,
    ];

    const ModalContent = () => <div className={style.FormFields}>
        <div className={style.FormField}>
            <header>Ваше ім'я:</header>
            <input className={style.InputField} value={name} onChange={(e) => setUserName(e.target.value)}/>
        </div>

        <div className={style.FormField}>
            <header>Ваш телефон:</header>
            <input className={style.InputField}
                   type={'tel'} name={'phone'}
                   pattern={'/+[0-9]{3}-[0-9]{2}-[0-9]{3}/'}
                   required={true} value={phone}
                   onChange={(e) => setUserPhone(e.target.value)}/>
        </div>

        <div className={style.FormField}>
            <header>Коментар:</header>
            <textarea className={style.InputField}
                      rows={3}
                      value={comment}
                      onChange={(e) => setUserComment(e.target.value)}/>
        </div>
    </div>;

    return <div className={style.Header}>
        <img className={style.MainImage} src={'/images/post-logo.png'}/>
        <svg viewBox="0 0 100 150" preserveAspectRatio="none" className={style.MobileBackground}>
            <polygon points="0,0 0,145 100,50 100,0"/>
            <polygon points="0,145 0,150 100,50 100,45" fill={'#F3EFEB'}/>
        </svg>
        <div className={style.HeaderInner}>

            <div className={style.Contacts}>
                <div className={style.ContactName}>
                    <a href="/metalTail.html">
                        <img className={style.LogoImage} src={'/images/post-logo.png'}/>
                    </a>
                </div>
                <div className={style.ContactName}>
                    Плечі Атласа
                </div>
                <div className={style.ContactPhones}>
                    <a href="https://api.whatsapp.com/send?phone=+380955291236">
                        <img src={'/svg/services/whatsapp.svg'} className={style.PhoneIcon}/>
                    </a>

                    <a href="https://signal.me/#p/+380955291236">
                        <img src={'/svg/services/signal.svg'} className={style.PhoneIcon}/>
                    </a>
                </div>
                {/*<Button className={style.BackCall} onClickHandler={openModal}>Зворотній дзвінок</Button>*/}
            </div>

            <div className={style.SaleDepartment}>
                <img src={'/svg/services/megaphone.svg'} className={style.MegaphoneIcon}/>
                <div>Безпосередньо розробник та виробник щогл</div>
                <div className={style.Delimiter}/>
            </div>

            <Title text={'Телескопічні щогли "Плечі Атласа"'} delimiter={false}/>

            <div className={style.Retail}>{'Виготовлення телескопічних щогл різної довжини та конфігурації'}</div>

            <div className={style.PromoCards}>
                {promoCards.map(({ label, image }) => <div key={label} className={style.PromoCard}>
                    <img src={image} className={style.PromoIcon}/>
                    <span>{label}</span>
                </div>)}
            </div>

            <div className={style.MakeOrder}>
                <div className={style.AdvertiseText}>{'Тримаємо небо.'}</div>
                <Button onClickHandler={openModal}>Залишити заявку</Button>
            </div>

        </div>

        <ModalWindow show={visibleModal}
                     onClose={() => setModalVisibility(false)}
                     renderModalHeader={ModalHeader}
                     modalButtons={ModalButtons}
                     renderModalContent={ModalContent}
        />
    </div>;
});

export default NewHeader;
