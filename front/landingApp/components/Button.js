import React from 'react';
import style from '../../styles/landingApp/components/button.less';

const Button = React.memo(({children, className, onClickHandler}) => {

    return <div className={`${style.Button} ${className || ''}`} onClick={onClickHandler}>
        {children}
    </div>;
});

export default Button;
