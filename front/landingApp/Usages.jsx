import React, {useState} from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/__colors.less';
import style from '../styles/users.less';
import Title from './components/Title';
import Slider from "react-slick";

// import "slick-carousel/slick/slick.less";
// import "slick-carousel/slick/slick-theme.less";

// const responsive = {
//     0: { items: 1 },
//     840: { items: 2 },
//     1024: { items: 3 },
//     1500: { items: 4 },
// };

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Usages = React.memo(() => {

    const items = [
        <div className={style.ImageContainer} data-value="1"><img src={'/images/usages/1.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="2"><img src={'/images/usages/2.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="3"><img src={'/images/usages/3.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="4"><img src={'/images/usages/4.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="5"><img src={'/images/usages/5.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="6"><img src={'/images/usages/6.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="7"><img src={'/images/usages/7.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="8"><img src={'/images/usages/8.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="9"><img src={'/images/usages/9.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="10"><img src={'/images/usages/10.jpg'} className={style.Image}/></div>,
        <div className={style.ImageContainer} data-value="11"><img src={'/images/usages/11.jpg'} className={style.Image}/></div>,
    ];

    const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
        return items.map((item, i) => (
            <div className={style.Thumbs} onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
                {item}
            </div>
        ));
    };

    const [mainIndex, setMainIndex] = useState(0);
    const [mainAnimation, setMainAnimation] = useState(false);
    const [thumbIndex, setThumbIndex] = useState(0);
    const [thumbAnimation, setThumbAnimation] = useState(false);
    const [thumbs] = useState(thumbItems(items, [setThumbIndex, setThumbAnimation]));

    const slideNext = () => {
        if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex + 1);
        }
    };

    const slidePrev = () => {
        if (!thumbAnimation && thumbIndex > 0) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex - 1);
        }
    };

    const syncMainBeforeChange = (e) => {
        setMainAnimation(true);
    };

    const syncMainAfterChange = (e) => {
        setMainAnimation(false);

        if (e.type === 'action') {
            setThumbIndex(e.item);
            setThumbAnimation(false);
        } else {
            setMainIndex(thumbIndex);
        }
    };

    const syncThumbs = (e) => {
        setThumbIndex(e.item);
        setThumbAnimation(false);

        if (!mainAnimation) {
            setMainIndex(e.item);
        }
    };

    // return [
    //     <Title text={'Використання'}/>,
    //     <AliceCarousel
    //         syncStateOnPropsUpdate={false}
    //         activeIndex={mainIndex}
    //         animationType="fadeout"
    //         animationDuration={800}
    //         disableDotsControls
    //         disableButtonsControls
    //         items={items}
    //         mouseTracking={!thumbAnimation}
    //         onSlideChange={syncMainBeforeChange}
    //         onSlideChanged={syncMainAfterChange}
    //         touchTracking={!thumbAnimation}
    //     />,
    //     <div className={style.Thumbs}>
    //         <AliceCarousel
    //             activeIndex={thumbIndex}
    //             // autoWidth
    //             disableDotsControls
    //             disableButtonsControls
    //             items={thumbs}
    //             mouseTracking={false}
    //             onSlideChanged={syncThumbs}
    //             touchTracking={!mainAnimation}
    //             responsive={responsive}
    //         />
    //         <div className={style.btnPrev} onClick={slidePrev}>&lang;</div>
    //         <div className={style.btnNext} onClick={slideNext}>&rang;</div>
    //     </div>
    // ]

    return (
        <div className={style.Usages}>
            <Title text={'Використання'}/>

            <Slider {...settings}>
                {items}
            </Slider>
        </div>
    );
});

export default Usages;
