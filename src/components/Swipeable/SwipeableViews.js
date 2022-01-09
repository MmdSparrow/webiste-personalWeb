import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';
// import {typography} from "../../fonts/Typography";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
    root: {
        position: 'relative',
        backgroundColor: 'transition'
    },
    slide: {
        // padding: 15,
        // minHeight: 100,
        backgroundColor: 'transition'
    },
};
const textStyles={
    h2:{
        color: "#008000",
        fontSize: "40px",
        fontFamily: "roboto",
    },
    text:{
        color:"white",
        fontSize: "20px",
        fontFamily: "roboto",
    }
}

class ViewAutoPlay extends React.Component {
    state = {
        index: 0,
    };

    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };

    render() {
        const { index } = this.state;
        return (
            <div style={styles.root}>
                <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                    {/*<div style={Object.assign({}, styles.slide)}>*/}
                    {/*    <img src={ require('../../assets/Images/profile.jpeg') } width="300em" height="300em" />*/}
                    {/*</div>*/}
                    <div style={Object.assign({}, styles.slide)}>
                        <h2 style={textStyles.h2}>
                            Full Stack Developer
                        </h2>
                        <p style={textStyles.text}>
                            Prolific, full stack web developer with a passion for data science and artificial intelligence.<br/>
                            C, C++ (icon)   Java (Spring / Spring Boot) (icons)   python (Django) (icons)
                            HTML, CSS, JavaScript (React) (icons)
                            MySQL, Oracle (icons)
                            Linux (icons)
                            Git (icons)
                        </p>
                    </div>
                    <div style={Object.assign({}, styles.slide)}>
                        <h2 style={textStyles.h2}>
                            Math Teacher
                        </h2>
                        <p style={textStyles.text}>
                            Number Theory Teacher at <a href={"http://mathhouse.org/"}>Isfahan Mathematics House</a>.
                        </p>
                    </div>
                    <div style={Object.assign({}, styles.slide)}>
                        <h2 style={textStyles.h2}>
                            Gamer
                        </h2>
                        <p style={textStyles.text}>
                            Dota2 player (icons)
                            steam ID:
                        </p>
                    </div>
                </AutoPlaySwipeableViews>
                <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />
            </div>
        );
    }
}

export default ViewAutoPlay;
