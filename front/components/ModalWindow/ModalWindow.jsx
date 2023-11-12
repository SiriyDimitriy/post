import React from 'react';
import ModalPageStyles from './ModalWindow.less';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class ModalWindow extends React.PureComponent {

    renderModal() {
        const { show, onClose, renderModalHeader, modalButtons, renderModalContent } = this.props;

        if (!show) {
            return null;
        }

        return (
            <div className={ModalPageStyles.modal_dialog}>
                <div className={ModalPageStyles.modal_content}>
                    <div className={ModalPageStyles.header}>
                        {renderModalHeader()}
                        <div className={ModalPageStyles.close} onClick={onClose}>
                            <img src={'/svg/close.svg'} className={ModalPageStyles.cancel_icon}/>
                        </div>
                    </div>
                    <div className={ModalPageStyles.content}>{renderModalContent()}</div>
                    <div className={ModalPageStyles.footer}>
                        {modalButtons}
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const modalRoot = document.getElementById('mount');

        return (
            ReactDOM.createPortal(this.renderModal(), modalRoot)
        );
    }
}

ModalWindow.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.object,
};

export default ModalWindow;