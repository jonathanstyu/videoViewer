import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "@grid-float-breakpoint: 768px;body": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "carousel-horizontal": {
        "overflowY": "hidden",
        "overflowX": "scroll",
        "whiteSpace": "nowrap"
    },
    "carousel-horizontal divhorizontal-card": {
        "marginLeft": 10,
        "marginRight": 10,
        "display": "inline-block",
        "verticalAlign": "top",
        "width": "33%",
        "whiteSpace": "initial"
    }
});