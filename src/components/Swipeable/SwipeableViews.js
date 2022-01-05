import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
    root: {
        position: 'relative',
        backgroundColor: "#ffab0d"
    },
    slide: {
        padding: 15,
        minHeight: 100,
        color: '#e50707',
    },
};

class DemoAutoPlay extends React.Component {
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
                    <div style={Object.assign({}, styles.slide)}>
                        {/*<image />*/}
                        my image...............................
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
                <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />
            </div>
        );
    }
}

export default DemoAutoPlay;
