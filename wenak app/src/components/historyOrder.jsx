import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SimpleRating from "./rating";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import PersonIcon from "@material-ui/icons/Person";
// import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import ScheduleIcon from "@material-ui/icons/Schedule";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "auto",
    textAlign: "left"
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "60%",
    maxHeight: "60%"
  },
  button1: {
    "& > *": {
      margin: theme.spacing(1),
      //   paddingTop: "10px",
      //   textAlign: "right"
      float: "right",
      marginRight: "35px"
    }
  },
  rate: {
    maxWidth: "auto",
    maxHeight: "auto"
  },
  view: {
    color: "#FFFFFF",
    backgroundColor: "#4caf50",
    width: "130px",
    height: " 40px"
  },
  reject: {
    color: "#FFFFFF",
    backgroundColor: "#e53935"
  },
  details: {
    padding: "10px",
    marginTop: "15px"
  },
  icons: {
    color: "#bdbdbd"
  },
  orderDetails: {
    //   padding:"",
    marginBottom: "5px"
  }
}));

export default function ComplexGrid2() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://image.flaticon.com/icons/svg/713/713342.svg"
              />
            </ButtonBase>
          </Grid>
          <Grid className={classes.details} item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <div className={classes.orderDetails}>
                  <Typography gutterBottom variant="subtitle1">
                    <PersonIcon className={classes.icons} /> user_id:
                  </Typography>
                </div>
                <div className={classes.orderDetails}>
                  <Typography variant="body2" gutterBottom>
                    <LocationOnIcon className={classes.icons} /> Location:
                  </Typography>
                </div>
                <div className={classes.orderDetails}>
                  <Typography variant="body2">
                    <ScheduleIcon className={classes.icons} /> Time:
                  </Typography>
                </div>
                <div className={classes.orderDetails}>
                  <Typography variant="body2">
                    <BeenhereIcon className={classes.icons} /> state:
                  </Typography>
                </div>
                <div className={classes.orderDetails}>
                  <Typography variant="body2">
                    {/* <DirectionsBikeIcon /> */}
                  </Typography>
                </div>
              </Grid>
              {/* <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  Remove
                </Typography>
              </Grid> */}
            </Grid>
          </Grid>
          <div style={{ marginBottom: "5px" }}>
            <SimpleRating />

            <div
              style={{ float: "right", marginRight: "31px", fontSize: "39px" }}
            >
              <Grid item>
                <Typography
                  variant="subtitle1"
                  style={{ marginRight: "26px", fontSize: "25px" }}
                >
                  $19.00
                </Typography>
              </Grid>
            </div>

            <div className={classes.button1}>
              <Button
                className={classes.view}
                variant="contained"
                color="#4caf50"
              >
                View Order
              </Button>
              {/* <Button
            className={classes.reject}
            variant="contained"
            color="#e53935"
          >
            Reject
          </Button> */}
            </div>
          </div>
        </Grid>
      </Paper>
    </div>
  );
}