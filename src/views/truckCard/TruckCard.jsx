
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Grid from '@material-ui/core/Grid';
import moment from 'moment'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));


function TruckCard(props) {
    let lon=props.truck.location.lon;

    let _alertLocation=function(truck){
        alert(truck.temperature)
    }



  let truck=props.truck  
  //console.log(props)  
  const classes = useStyles();
  return (
    <div key={props.truck.time}>
      <Paper className={classes.root} >
        <Typography>
          Linfox 1
        </Typography>
       {/** <Typography component="p">
        Time {moment(props.truck.time).format('MMMM Do YYYY, h:mm:ss a')}
        </Typography> */}
        <Grid container>
        <Grid item xs={4}>Temp {truck.temperature}</Grid>
        <Grid item xs={4}>Hum {truck.humidity}</Grid>
        <Grid item xs={4}>Pres {truck.pressure}</Grid>


        </Grid>
      </Paper>
    </div>
  );
}


export default TruckCard;