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

const Construction = React.memo(() => {

    const items = [
        <div className={style.ImageContainer} data-value="1"><img src={'/images/details/details1.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="2"><img src={'/images/details/details2.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="3"><img src={'/images/details/details3.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="4"><img src={'/images/details/details4.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="5"><img src={'/images/details/details5.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="6"><img src={'/images/details/details6.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="7"><img src={'/images/details/details7.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="8"><img src={'/images/details/details8.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="9"><img src={'/images/details/details9.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="10"><img src={'/images/details/details10.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="11"><img src={'/images/details/details11.jpg'} className={style.Image}/></div>,
    ];

    return (
        <div className={style.Usages}>
            <Title text={'Конструкція'}/>

            <Slider {...settings}>
                {items}
            </Slider>
        </div>
    );
});

export default Construction;
