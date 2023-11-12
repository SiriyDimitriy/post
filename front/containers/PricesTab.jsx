import React from 'react';

import style from '../styles/prices_tab.less';
import RadioButton from '../components/RadioButton';
import {getPropertiesWithSameValues, groupObjectsArrayByProperty} from '../utils/objectUtils';

class PricesTab extends React.Component {

    constructor(props) {
        super(props);
        this.renderGroup = this.renderGroup.bind(this);
    }


    renderGroup(group, i) {
        const {translations, onChoose, chosenCard} = this.props;

        let repeatingPropertiesWithValues = (group && group.length === 1) ? [] : getPropertiesWithSameValues(group);

        return <div className={style.prices} key={i}>
            {<img className={style.logo} src={group[0].logoSrc} alt={group[0].logoSrc}/>}
            <div className={style.commonProps}>{Object.keys(repeatingPropertiesWithValues).filter(cardProp => translations[cardProp])
                .map(prop => <div key={prop}>
                    <span className={style.field_name}>{translations[prop]}</span>:&nbsp;<span className={style.field_value}>{repeatingPropertiesWithValues[prop]}</span>
                </div>)}
            </div>

            <div className={style.options}>{
                group.map((groupItem, i) => (<div className={`${style.option} ${chosenCard === groupItem ? style.checked : ""}`}><RadioButton
                    key={i}
                    label={this.renderRadioButtonContent(repeatingPropertiesWithValues, translations, groupItem)}
                    checked={chosenCard === groupItem}
                    onClickHandler={() => onChoose(groupItem)}>
                </RadioButton></div>))
            }</div>
        </div>
    }

    renderRadioButtonContent(repeatingPropertiesWithValues, translations, groupItem) {
        return Object.keys(groupItem).filter(cardProp => translations[cardProp])
            .filter(cardProp => !Object.keys(repeatingPropertiesWithValues).includes(cardProp))
            .map(cardProp => {
                return (<div key={cardProp} className={cardProp === 'price' ? style.price_section : ''}>
                        <span className={style.field_name}>{translations[cardProp]}</span>:&nbsp;
                        <span className={style.field_value}>{groupItem[cardProp]}</span>
                    </div>
                );
            })
    }

    render() {
        const {item} = this.props;

        const groupedCards = groupObjectsArrayByProperty(item.price_cards, "producer");

        return (<div>
                <div>Выберите изготовителя, толщину и тип покрытия стали, от этого будет зависеть Ваша цена:</div>
                <div className={style.priceContainer}>
                    {Object.values(groupedCards).map((group, i) => this.renderGroup(group, i))}
                </div>
            </div>
        );
    }
}

export default PricesTab;
