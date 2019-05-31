
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


function BoxCard(props) {


  let box=props.box
  let missingBox = props.missingBox  
  //console.log(props)  
  const classes = useStyles();
  return (
    <div key={props.box.id}>
      <Paper className={classes.root} >
      <Typography className="margin-bottom">
          Boxes
        </Typography>
        <Typography className="margin-bottom">
          Box Id: {box.id}
        </Typography>
       {/** <Typography component="p">
        Time {moment(props.truck.time).format('MMMM Do YYYY, h:mm:ss a')}
        </Typography> */}
        <Grid container>
        <Grid item xs={6} className="margin-bottom">Truck: {box.truck}</Grid>
        <Grid item xs={6} className="margin-bottom">Status: {
            box.delivered?'Delivered':'Not Delivered'
        }</Grid>
        <Grid item xs={6} className="red-color margin-bottom">{missingBox?'Box is Missing':''}</Grid>
        </Grid>
      </Paper>
    </div>
  );
}


export default BoxCard;