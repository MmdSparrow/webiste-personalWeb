import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';
import typography from "../../fonts/Typography";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
    root: {
        position: 'relative',
        backgroundColor: 'transition'
    },
    slide: {
        padding: 15,
        minHeight: 100,
        backgroundColor: 'transition'
    },
};

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
        const classes=typography;
        return (
            <div style={styles.root}>
                <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                    <div style={Object.assign({}, styles.slide)}>
                        <img src={ require('../../assets/Images/profile.jpeg') } width="300em" height="300em" />
                    </div>
                    <div style={Object.assign({}, styles.slide)}>
                        <h2>
                            Full Stack Developer
                        </h2>
                        <p>
                            test test test test test
                        </p>
                    </div>
                    <div style={Object.assign({}, styles.slide)}>
                        <h2>
                            Math Teacher
                        </h2>
                        <p>
                            test test test test test
                        </p>
                    </div>
                    <div style={Object.assign({}, styles.slide)}>
                        <h2>
                            Gamer
                        </h2>
                        <p>
                            test test test test test
                        </p>
                    </div>
                </AutoPlaySwipeableViews>
                <Pagination dots={4} index={index} onChangeIndex={this.handleChangeIndex} />
            </div>
        );
    }
}

export default ViewAutoPlay;
