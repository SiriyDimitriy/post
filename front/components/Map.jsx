import React from 'react';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import style from '../styles/components/map.less';

class GMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: null,
            selectedPlace: null
        }

        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
    }

    onMarkerClick(props, marker) {
        this.setState({showingInfoWindow: true, activeMarker: marker, selectedPlace: props});
    }

    onClose() {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    }

    onMapClicked() {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    render() {
        const {map} = this.props;

        return <div className={style.mapContainer}>
            <Map
                google={this.props.google}
                zoom={10}
                initialCenter={map.geo}
                onClick={this.onMapClicked}
            >
                <Marker onClick={this.onMarkerClick}
                        title={map.title}
                        name={map.title}
                        position={map.geo}/>
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}>
                    <div>
                        {this.state.selectedPlace && this.state.selectedPlace.name}
                    </div>
                </InfoWindow>
            </Map>
        </div>
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDWNe8nbXT808Y9VT3ei5JbVBR-jBK-Y0s")
})(GMap)
