import React from 'react';
import style from '../styles/colors_tab.less';

class ColorsTab extends React.PureComponent {
    render() {
        const {colors} = this.props;
        if (!colors || !colors.length) return null;
        return <div className={style.colorsContainer}>
                {colors.map(item => <div className={style.color} key={item.ral} >
                    <div style={{"background-color": item.hexColor}} className={style.colorPick}/>
                    <div className={style.ral}>RAL {item.ral}</div>
                    <div className={style.name}>({item.humanReadableColor})</div>
                    <div className={style.coating}>{item.coating}</div>
                </div>)}
        </div>;
    }
}

export default ColorsTab;
