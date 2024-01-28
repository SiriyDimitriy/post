import React, {useState} from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/__colors.less';
import style from '../styles/users.less';
import Title from './components/Title';
import Slider from 'react-slick';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Users = React.memo(() => {

    const items = [
        <div className={style.ImageContainer} data-value="1"><img src={'/images/users/user1.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="2"><img src={'/images/users/user2.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="3"><img src={'/images/users/user3.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="4"><img src={'/images/users/user4.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="5"><img src={'/images/users/user5.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="6"><img src={'/images/users/user6.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="7"><img src={'/images/users/user7.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="8"><img src={'/images/users/user8.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="9"><img src={'/images/users/user9.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="10"><img src={'/images/users/user10.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="11"><img src={'/images/users/user11.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="12"><img src={'/images/users/user12.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="13"><img src={'/images/users/user13.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="14"><img src={'/images/users/user14.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="15"><img src={'/images/users/user15.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="16"><img src={'/images/users/user16.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="17"><img src={'/images/users/user17.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="18"><img src={'/images/users/user18.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="19"><img src={'/images/users/user19.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="20"><img src={'/images/users/user20.jpg'} className={style.Image}/></div>,
    ];

    return (
        <div className={style.Usages}>
            <Title text={'Користувачі'}/>

            <Slider {...settings}>
                {items}
            </Slider>
        </div>
    );
});

export default Users;
