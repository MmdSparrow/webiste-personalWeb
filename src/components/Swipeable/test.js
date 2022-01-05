import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from 'docs/src/modules/components/Pagination';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
    root: {
        position: 'relative',
    },
    slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff',
    },
    slide1: {
        backgroundColor: '#FEA900',
    },
    slide2: {
        backgroundColor: '#B3DC4A',
    },
    slide3: {
        backgroundColor: '#6AC0FF',
    },
};

const textStyles={
    header:{

    },
    text:{

    }
}

const DemoAutoPlay=()=>{
    const [itemIndex, setItemIndex]= useState(0)

    const handleChange = (e) => {
        setItemIndex(e.target.value);
    }

    const  index  = itemIndex;

    return (
        <div style={styles.root}>
            <AutoPlaySwipeableViews index={index} onChangeIndex={handleChange}>
                <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
                <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
                <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
            </AutoPlaySwipeableViews>
            <Pagination dots={3} index={index} onChangeIndex={handleChange} />
        </div>
    );

}

export default DemoAutoPlay;