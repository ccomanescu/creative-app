import { container, title } from "assets/jss/material-kit-react.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  backgroundNoRepeatRight: {
    backgroundSize: "50%",
    "@media (min-width: 576px)": {
      backgroundSize: "45%"
    },
    "@media (min-width: 768px)": {
      backgroundSize: "40%"
    },
    "@media (min-width: 992px)": {
      backgroundSize: "30%"
    },
    "@media (min-width: 1500px)": {
      backgroundSize: "25%"
    },
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgb(0, 0, 0)"
  },
  blackBackground: {
    backgroundColor: "rgb(0, 0, 0)"
  },
  whiteText: {
    color: "rgb(255, 255, 255)"
  },
  backgroundLogo: {
    backgroundImage: "url(assets/img/logo.PNG)",
  }
};

export default landingPageStyle;
