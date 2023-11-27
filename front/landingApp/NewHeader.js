import React, { useState } from 'react';
import style from '../styles/landingApp/newHeader.less';
import Title from './components/Title';
import Button from './components/Button';
import ModalWindow from '../components/ModalWindow/ModalWindow';
// import Alert from 'react-s-alert';

const NewHeader = React.memo(({ config }) => {

    const promoCards = [{
        label: 'Зроблено з ненавистю до рашистів',
        image: '/svg/services/explosion.svg',
    },{
        label: '50% від виробництва передається безкоштовно за запитом від ВЧ (фінансує виробництво той, хто може)',
        image: '/svg/services/tax.svg',
    },{
        label: 'Розробка та постійне вдосконалення',
        image: '/svg/services/arrow-up-graph.svg',
    },{
        label: 'Легкість та міцність конструкції',
        image: '/svg/services/feather.svg',
    }, {
        label: 'Повна комплектація, готова до застосування',
        image: '/svg/services/complete.svg',
    },{
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

        // if (!name || !phone || (!name && !phone)) {
        //     Alert.error("Заповніть обов\'язкові поля (ім\'я та телефон)");
        //     return;
        // }

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
        <img className={style.MainImage} src={'/images/posts-main-image.jpg'}/>
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
                <h1 className={style.ContactName}>
                    Телескопічні мачти "Плечі Атласа"
                </h1>
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
                <div>Безпосередньо розробник та виробник телескопічних щогл</div>
                <div className={style.Delimiter}/>
            </div>

            <div className={style.Warning}>
                <img src={'/svg/services/megaphone.svg'} className={style.MegaphoneIcon}/>
                <div>Креслення і опис конструкції  щогли є об'єктом авторського права, що зареєстроване в Україні за свідоцтвом № 120675 від 20.06.2023. Загальна конструкція щогли, її оригіналні деталі та взули є об'єктом інтелектуальної власності - корисною моделлю України, на який подана заявка № u 2023 04578 від 28.09.2023, що буде засвічдено свідоцтвом України на корисну модель "Розкладна мобільна телескопічна щогла". Будь-які факти неправомірного використання конструкції ціє щогли  переслідуватимуться відповідно до чинного законодавства України, в т.ч. за допомогою МВС, АМК та судових органів.</div>
                <div className={style.Delimiter}/>
            </div>

            <h2 className={style.Header}>Телескопічні щогли "Плечі Атласа"</h2>

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
