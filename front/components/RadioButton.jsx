import React from 'react';
import RadioButtonStyles from '../styles/components/radio_button.less';

class RadioButton extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const {label, onClickHandler, checked} = this.props;

        return (
            <section className={RadioButtonStyles.wrapper} onClick={onClickHandler}>
                <img src={`svg/${checked ? "radio_button_checked.svg" : "radio_button_unchecked.svg"}`}/>
                <div className={RadioButtonStyles.label}>{label}</div>
            </section>
        );
    }
}

export default RadioButton;