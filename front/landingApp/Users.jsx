import React, {useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/__colors.less';
import style from '../styles/users.less';
import Title from './components/Title';

const responsive = {
    0: { items: 1 },
    840: { items: 2 },
    1024: { items: 3 },
    1500: { items: 4 },
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
        <Title text={'Користувачі'}/>,
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
                responsive={responsive}
            />
            <div className={style.btnPrev} onClick={slidePrev}>&lang;</div>
            <div className={style.btnNext} onClick={slideNext}>&rang;</div>
        </div>
    ]
});

export default Users;
