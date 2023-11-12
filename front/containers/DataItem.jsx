import React from 'react';

import connect from 'redux-connect-decorator';
import {withRouter} from 'react-router';
import style from '../styles/data_item.less';
import ItemSlider from '../components/ItemSlider';
import Tabs from '../components/Tabs';
import {fetchAdditionalElements, fetchCatalog, fetchColors} from '../actions/MainActions';
import {markVisited} from '../utils/cookiesUtils';
import PricesTab from './PricesTab';
import FeaturesTab from './FeaturesTab';
import ColorsTab from "./ColorsTab";
import AccessoriesTab from "./AccessoriesTab";

@withRouter
@connect(store => ({
    items: store.items,
    phone: store.contacts.phones && store.contacts.phones[0],
    itemPropertiesNames: store.itemPropertiesNames,
    colors: store.colors,
    additionalElements: store.additionalElements
}), {
    fetchCatalog,
    fetchColors,
    fetchAdditionalElements
})
class DataItemPage extends React.Component {

    constructor(props) {
        super(props);
        this.renderPrice = this.renderPrice.bind(this);
        this.state = {
            item: null,
            chosenPriceCard: null
        };
    }

    componentDidMount() {
        if (!this.props.items.length) {
            this.props.fetchCatalog();
        } else {
            this.fillInitialState(this.props);
        }
        this.props.fetchColors();
        this.props.fetchAdditionalElements();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.items !== this.props.items) {
            this.fillInitialState(nextProps);
        }
    }

    fillInitialState(props) {
        const item = props.items.find(item => item.id === props.location.pathname.substring('/items/'.length));
        const chosenPriceCard = item.price_cards[0];
        this.setState({item, chosenPriceCard});
        markVisited(item);
    }

    descriptionTabContent() {
        const {item} = this.state;

        return <div>
            {item.description}
        </div>;
    }

    renderPrice() {
        const {phone, chosenPriceCard} = this.state;
        const {itemPropertiesNames} = this.props;

        return chosenPriceCard && <div className={style.description_price}>{Object.keys(chosenPriceCard)
            .filter(cardProp => itemPropertiesNames[cardProp])
            .map(cardProp => <div key={cardProp} className={cardProp === 'price' ? style.price_section : ''}>
                <span className={style.field_name}>{itemPropertiesNames[cardProp]}</span>:&nbsp;
                <span className={style.field_value}>{chosenPriceCard[cardProp]}</span>
            </div>)}
        </div>

        // return (
        //     item.price && phone &&
        //     <div className={[style.descriptionBlock, style.price].join(' ')}>
        //         <span>Цена: {item.price}</span>
        //         {config.isMobile && phone && <a href={`tel:${phone}`}>
        //             <button className={style.call}>Позвонить</button>
        //         </a>}
        //     </div>
        // );
    }

    colorsTabContent() {
        return <ColorsTab colors={this.props.colors}/>
    }

    pricesTabContent() {
        const {item, chosenPriceCard} = this.state;
        const {itemPropertiesNames} = this.props;
        return <PricesTab item={item} translations={itemPropertiesNames}
                          chosenCard={chosenPriceCard}
                          onChoose={(card) => this.setState({chosenPriceCard: card})}/>
    }

    accessoriesTabContent() {
        const {additionalElements} = this.props;
        return <AccessoriesTab additionalElements={additionalElements} />
    }

    featuresTabContent() {
        return <FeaturesTab item={this.state.item} translations={this.props.itemPropertiesNames}/>;
    }

    render() {
        const {item} = this.state;
        if (item === null) {
            return null;
        }

        const tabs = [
            {
                name: 'Цены',
                content: this.pricesTabContent()
            },
            {
                name: 'Описание',
                content: this.descriptionTabContent()
            },
            {
                name: 'Характеристики',
                content: this.featuresTabContent()
            },
            {
                name: 'Цвета',
                content: this.colorsTabContent()
            },
            {
                name: 'Доборные элементы',
                content: this.accessoriesTabContent()
            },
        ];

        return <div className={style.dataItem}>
            <div className={style.container}>
                <ItemSlider images={item.images}/>
                <div className={style.description}>
                    <div className={style.descriptionCaption}>{item.name}</div>
                    {this.renderPrice()}
                    {/*{item.promo && <div className={[style.descriptionBlock, style.promo].join(' ')}>{item.promo}</div>}*/}
                </div>
            </div>
            <Tabs tabs={tabs}/>
        </div>;
    }
}

export default DataItemPage;
