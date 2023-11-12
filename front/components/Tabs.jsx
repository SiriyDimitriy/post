import React from 'react';

import style from '../styles/components/tabs.less';

class Tabs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: props.tabs[0].name,
        }
    }

    onTabClick(tab) {
        if (tab.content) {
            this.setState({activeTab: tab.name});
        }
    }

    render() {
        const {tabs} = this.props;
        const {activeTab} = this.state;

        return <div className={style.tabs}>
            <div className={style.tabsLabels}>
                {tabs.map(tab => {
                    let classNames = [style.tabsLabel];
                    if (tab.name === activeTab) {
                        classNames.push(style.active);
                    }
                    if (!tab.content) {
                        classNames.push(style.disabled);
                    }
                    return <div className={classNames.join(' ')} key={tab.name}
                                onClick={this.onTabClick.bind(this, tab)}>{tab.name}</div>
                })}
            </div>
            <div>
                {tabs.find(tab => tab.name === activeTab).content}
            </div>

        </div>
    }
}

export default Tabs;
