import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import jen from "assets/img/Jen.jpg";
import pichai from "assets/img/pichai.jpg";
import Zuckerberg from "assets/img/Zuckerberg.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>A.I Medicine in Tech Keynotes</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={jen} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Jen-Hsun Huang
                <br />
                <small className={classes.smallTitle}>-</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                "If there is one application where a lot of very complicated, messy and unstructured data is available, it is the field of medicine. And waht better application for deep learning than to improve our haelth, improve life?"
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={pichai} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Sundar Pichai
                <br />
                <small className={classes.smallTitle}>-</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                "It's very very difficult to have highly trained doctors available in many parts of the world. Deep learning did really good at detecting DR. We can see the promise again, of using machine learning."
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={Zuckerberg} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Mark Zuckerberg
                <br />
                <small className={classes.smallTitle}>-</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                "So , imagine that, soon every doctor around the world just gonna have the ability to snap a photo and as well as the best doctors in the world be able to diagnose your cancer. That's gonna save lives !" 
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
