import React, {useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/__colors.less';
import style from '../styles/users.less';
import Title from './components/Title';

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

    return [
        <Title text={'Конструкція та деталі'}/>,
        <AliceCarousel
            syncStateOnPropsUpdate={false}
            activeIndex={mainIndex}
            animationType="fadeout"
            animationDuration={800}
            disableDotsControls
            disableButtonsControls
            items={items}
            mouseTracking={!thumbAnimation}
            onSlideChange={syncMainBeforeChange}
            onSlideChanged={syncMainAfterChange}
            touchTracking={!thumbAnimation}
        />,
        <div className={style.Thumbs}>
            <AliceCarousel
                activeIndex={thumbIndex}
                autoWidth
                disableDotsControls
                disableButtonsControls
                items={thumbs}
                mouseTracking={false}
                onSlideChanged={syncThumbs}
                touchTracking={!mainAnimation}
            />
            <div className={style.btnPrev} onClick={slidePrev}>&lang;</div>
            <div className={style.btnNext} onClick={slideNext}>&rang;</div>
        </div>
    ]
});

export default Construction;
