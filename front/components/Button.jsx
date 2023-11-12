import React from 'react';
import ButtonStyles from '../styles/components/button.less';

class ActionButton extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(e) {
        const {onClick} = this.props;

        onClick && onClick();
    }

    render() {
        const {type, text, actionType, loading, disabled, className, reactDndDragProps} = this.props;

        let btnClass = `button `;

        if (type === 'submit' || type === 'success') {
            btnClass = `${ButtonStyles.button} ${ButtonStyles.button_success}`;
        }

        if (type === 'default') {
            btnClass = `${ButtonStyles.button} ${ButtonStyles.button_default}`;
        }

        if (disabled) {
            btnClass = `${ButtonStyles.button} ${ButtonStyles.button_disabled}`;
        }

        if (!type) {
            btnClass = `${ButtonStyles.button} ${ButtonStyles.button_primary}`;
        }

        if (className) {
            btnClass = `${btnClass} ${className}`;
        }

        return (
            <button className={btnClass}
                    disabled={loading || disabled}
                    onClick={this.onClickHandler}
                    type={actionType}
                    {...reactDndDragProps}>
                {loading ? <Loader radius='15px' color='white'/> : text}
            </button>
        );
    }
}

export default ActionButton;
