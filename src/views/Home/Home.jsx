import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MapContainer from '../mapContainer/mapContainer.jsx'
import TruckCard from '../truckCard/TruckCard.jsx'
import BoxCard from '../boxCard/BoxCard.jsx'

import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import 'typeface-roboto';


class Home extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }


    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
      console.log('Home',this.props)
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>
                    <h1>Trucks</h1>

                    {this.props.trucks.map(truck=>(
                        <TruckCard truck={truck}/>
                    ))}
                    {this.props.boxes.map(box=>(
                        <BoxCard box={box}/>
                    ))}
                   

                    </Grid>

                    <Grid item lg={9}>
                    <MapContainer trucks={this.props.trucks}></MapContainer>
                    

                    </Grid>
                    
                </Grid>
                
          
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;