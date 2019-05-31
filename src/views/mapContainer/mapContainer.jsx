import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Map, InfoWindow, Marker, GoogleApiWrapper, DirectionsService } from 'google-maps-react';




//import Modal from 'components/modalSelectPark/modalSelectPark.jsx'

let dummyActiveMarker = {
    title: '',
    energy: '',
    costPark: '',
    costEnergy: '',
    status: ''
}


export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            selectedPlace: {},
            mylocation: { position: { lat: 0, lng: 0 } },
            trucks: []
        };
    }

    myLocation = (position) => {
        //console.log(position)
        var positionMarker = {
            position: { lat: position.coords.latitude, lng: position.coords.longitude },
            name: 'myPosition',
            title: 'The marker`s title will appear as a tooltip.'
        }
        let tempState = this.state;
        tempState.mylocation = positionMarker;
        this.setState(tempState)
        //console.log(this.state)


    }

    componentDidMount() {
        console.log(this.props)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.myLocation);
            //console.log(position)
        } else {
            alert('Geolocation is not supported by this browser')
        }

    }


    componentWillReceiveProps(props) {
        // console.log('will recive',props)
        this.setState({ trucks: props.trucks });
    }




    stlye = {
        display: 'none'
    }
    render() {

        //console.log('props',this.state)
        const style = {
            width: '100%',
            height: '100%'
        }
        return (

            <Map
                google={this.props.google}
                style={style}
                initialCenter={{
                    lat: -37.8136,
                    lng: 144.9631
                }}
                zoom={15}
            >
                {this.state.trucks.map(truck => (
                
                    <Marker
                        position={{lat:truck.location.lat,lng:truck.location.lon}}
                        


                    />
                ))}


            </Map>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAiJrRei0vrS2xpbSsUOWFk5eF0mW8Xf_M')
})(MapContainer)