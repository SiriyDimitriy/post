import React from 'react';
import style from '../styles/features_tab.less';

class FeaturesTab extends React.Component {
    render() {
        const {item, translations} = this.props;
        const descrItems = [];
        item.description_items && Object.keys(item.description_items).length
            && Object.keys(item.description_items).forEach((curValue, i) => {
            const translation = translations[curValue];
            descrItems.push(<li key={i}>{translation || ""} {item.description_items[curValue] || ""}</li>);
        });
        return (
            <div className={style.features}>
                <ul>{descrItems}</ul>
            </div>
        );
    }
}

export default FeaturesTab;
