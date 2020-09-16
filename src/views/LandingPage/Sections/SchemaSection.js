import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
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

import schema from "assets/img/schema.jpeg";
const useStyles = makeStyles(styles);

export default function SchemaSection() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section, classes.zoom)}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
        <img src={schema}
        style={{maxWidth: '100%', maxHeight: '100%'}}
                    alt="Image1" 
                    className="slick-image" />
        </GridItem>
      </GridContainer>
    </div>
  );
}
