import React from 'react';
import style from '../../styles/landingApp/components/title.less';

const Title = React.memo(({text, delimiter = true}) => {

    return <div className={style.Header}>
        {delimiter && <div className={style.Delimiter}/>}
        <div>{text}</div>
    </div>;
});

export default Title;
