import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk facts</h2>
          <h5 className={classes.description}>
          Radiologists today are under increasing work pressure. In a survey of 50 radiologists practicing in the United States, 90% reported their workload had increased over the
 last 3 years, and 28% said it had increased by more than 20% . The primary reason, cited by 78% of those who reported a heavier workload was the increasing 
number of scans. As the academic literature affirms, the more scans conducted, the greater the need for radiologists to read them quickly yet accurately.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer  justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <ReactPlayer
          width="100%"
          height="200%"
          controls="true"
            url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
          />
        </GridItem>
        {/* hidden because of double height... fml */}
        <GridItem xs={12} sm={12} md={8} style={{visibility: 'hidden'}}>
          <ReactPlayer
          width="100%"
          height="200%"
          controls="true"
            url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
          />
        </GridItem>
      </GridContainer>
      <div style={{clear:'both'}}></div> 
    </div>
  );
}
