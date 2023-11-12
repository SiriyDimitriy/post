import * as React from 'react';
import style from '../styles/components/magnifying_popup.less';
import {useDispatch, useSelector} from 'react-redux';
import {closeMagnifyingPopup} from '../actions/MagnifyPopupActions';
import {useRef} from 'react';

const MagnifyingPopup = React.memo(() => {
    const data = useSelector(state => state.magnifyingPopup);
    const dispatch = useDispatch();
    const image = useRef(null);

    if (!data.open) {
        return null;
    }

    const closePopupOnClickOutside = (e) => {
        if (image.current && e.target != image.current) {
            dispatch(closeMagnifyingPopup());
        }
    }

    return <div className={style.MagnifyingPopup} onClick={closePopupOnClickOutside}>
        <div className={style.RelativeContainer}>
            <img className={style.CrossIcon} onClick={() => dispatch(closeMagnifyingPopup())} src={"svg/close.svg"}/>
            <img className={style.Image} ref={image} src={data.src}/>
        </div>
    </div>
});

export default MagnifyingPopup;