import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={12}>
          <h2 className={classes.title}>Contact us</h2>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4} style={{
    display: 'flex',
    color:' #999',
    alignItems: 'center',
    justifyContent: 'center'
              }}>
              <i className="fas fa-envelope fa-lg" /> <span>&nbsp;&nbsp;&nbsp;ai@smartmediscan.com</span>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} style={{
    display: 'flex',
    color:' #999',
    alignItems: 'center',
    justifyContent: 'center'
              }}>
              <i className="fas fa-phone fa-lg" /> <span>&nbsp;&nbsp;&nbsp;0724086663</span>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} style={{
    display: 'flex',
    color:' #999',
    alignItems: 'center',
    justifyContent: 'center'
              }}>
              <i className="fas fa-map-marker-alt fa-lg" /> <span>&nbsp;&nbsp;&nbsp;Calea Vitan 231 , Bucuresti , RO</span>
              </GridItem>
              
            </GridContainer>
          <form>
            <GridContainer  cs={12} sm={12} md={12}>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary">Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
