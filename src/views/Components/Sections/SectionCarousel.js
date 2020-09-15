import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from 'assets/img/1.jpeg'; // with import
import image2 from 'assets/img/2.jpeg'; // with import
import image3 from 'assets/img/3.jpeg'; // with import
import image4 from 'assets/img/4.jpeg'; // with import

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel(props) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img
                    src={image1} 
                    alt="Image1" 
                    className="slick-image" 
                  />
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Image2"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img
                    src={image3}
                    alt="Image3"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img
                    src={image4}
                    alt="Image4"
                    className="slick-image"
                  />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
