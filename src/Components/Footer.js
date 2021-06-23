import React from "react";



//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#e8ede1",
    color:"",
    marginTop: 40,
    height: "auto",
    textAlign: "center",
  },
  innerCont: {
    margin: "74px  80px ",
  },
  resources: {
    margin: "60px 40px 10px 40px",
  },
  buttonStyleOne: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "#5a5c5a",
    },
  },
  buttonStyleTwo: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    marginLeft: 10,
    marginTop: 8,
    "&:hover": {
      backgroundColor: "#5a5c5a",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid container direction="row" className={classes.container}>
      <Grid item xs={12} sm={4} className={classes.innerCont}>
        
          <Grid container direction="row">
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" component="p">
                Company
              </Typography>
              <Typography variant="body1" component="p">
                <br />
                - About <br />
                - Blog <br />
                - Careers <br />
                - Contact <br />
                - Report Fraud <br />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" component="p">
                For You
              </Typography>
              <Typography variant="body1" component="p">
                <br />
                - Privacy <br />
                - Terms <br />
                - Security <br />
                - Sitemap <br />
                - Code of conduct <br />
              </Typography>
            </Grid>
          </Grid>
        
          <>
    
        
          </>
        
      </Grid>
      <Grid item xs={12} sm={3} className={classes.innerCont}>
      <Typography variant="h4" component="p">
      Jomato for Business
    </Typography>
    <Typography variant="body1" component="p">
      Get more out of your business, without losing focus on what is
      most important — delighting your customers
    </Typography>
    <br />
    <br />
    <Button className={classes.buttonStyleOne}>Get Started</Button>
      </Grid>
      
    </Grid>
  );
}
