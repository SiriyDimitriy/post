import React from 'react';

import style from '../styles/components/item_slider.less';

const animationTypes = {
    fade: style.fade,
    move: style.move
}

class ItemSlider extends React.Component {

    constructor(props) {
        super(props);

        this.openFullImage = this.openFullImage.bind(this);

        this.state = {
            activeItem: props.images && props.images.length && props.images[0],
            animationClassName: false,
            zoomedImage: false,
        }
    }

    onItemClick(image) {
        this.setState({animationClassName: true});
        setTimeout(() => {
            this.setState({animationClassName: false, activeItem: image});
        }, 500); // consolidated with animation time in less
    }

    openFullImage() {
        this.setState({zoomedImage: true});
    }

    render() {
        const {images} = this.props;
        if(!images || !images.length) {
            return <div className={style.sliderContainer}>изображений нет</div>;
        }

        return <div className={style.sliderContainer}>
            <div className={style.fullImage}>
                <img src={`${this.state.activeItem.full_src}`}
                     onClick={this.openFullImage}
                     className={this.state.animationClassName ? animationTypes.move : '' }
                />
            </div>
            <div className={style.smallImages}>
                {images.map(image => <img src={`${image.src}`}
                                          onClick={this.onItemClick.bind(this, image)}
                                          key={image.src}/>)}
            </div>
            {this.state.zoomedImage && <div className={style.modal} onClick={() => this.setState({zoomedImage: false})}>
                <div className={style.zoomedImage}>
                    <img src={`${this.state.activeItem.full_src}`}/>
                </div>
            </div>}
        </div>
    }
}

export default ItemSlider;
