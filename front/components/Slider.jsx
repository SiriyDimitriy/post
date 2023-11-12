import React from 'react';

import SliderStyle from '../styles/components/slider.less';

class Slider extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            slider: ["first", "second", "third", "fourth", "fifth"],
            activeIndex: 1,
            left: 0
        };

        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.clickIndicator = this.clickIndicator.bind(this);
    }

    prevSlide() {
        this.setState({
            activeIndex: this.state.activeIndex - 1,
            left: this.state.left + 400 // this.props.sliderWidth not working for some reason
        });

        if (this.state.activeIndex === 1) {
            this.setState({
                activeIndex: this.state.activeIndex + this.state.slider.length - 1,
                left: this.state.left - this.props.width * (this.state.slider.length - 1)
            })
        }
    }

    nextSlide() {
        this.setState({
            activeIndex: this.state.activeIndex + 1,
            left: this.state.left - this.props.width
        });

        if (this.state.activeIndex === this.state.slider.length) {
            this.setState({
                activeIndex: this.state.activeIndex - this.state.slider.length + 1,
                left: 0
            })
        }
    }

    clickIndicator(e) {
        this.setState({
            activeIndex: parseInt(e.target.textContent),
            left: this.props.width - parseInt(e.target.textContent) * this.props.width
        })
    }

    render() {
        const style = {
            left: this.state.left,
            width: this.props.width + 'px',
            height: this.props.height + 'px'
        };
        const {slider, activeIndex} = this.state;
        return (
            <div className={SliderStyle.super_super}>
            <div className={SliderStyle.super_wrapper}>
                <div className={SliderStyle.slider_wrapper}>
                    <ul className={SliderStyle.slider}>
                        {slider.map((item, index) => {
                            return <li style={style} key={index}
                                       className={index + 1 === activeIndex ? SliderStyle['slider-item'] : SliderStyle.hide}>{item}</li>
                        })
                        }
                    </ul>
                </div>
                <div className={SliderStyle.buttons_wrapper}>
                    <button className={SliderStyle.prev_button} onClick={this.prevSlide}/>
                    <button className={SliderStyle.next_button} onClick={this.nextSlide}/>
                </div>
                <div>
                    <ul className={SliderStyle.indicators}>
                        {slider.map((item, index) => {
                            return <li className={index + 1 === activeIndex ? SliderStyle.active_indicator : ''}
                                       key={index}
                                       onClick={this.clickIndicator}>{index + 1}</li>
                        })
                        }
                    </ul>
                </div>
            </div>
            </div>
        );
    }
}

export default Slider;
