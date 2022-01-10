import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';
import {ReactComponent as CLogo} from "../../assets/Icons/c.svg";
import {ReactComponent as JavaLogo} from "../../assets/Icons/java.svg";
import {ReactComponent as PythonLogo} from "../../assets/Icons/python.svg";
import {ReactComponent as JSLogo} from "../../assets/Icons/js.svg";
import {ReactComponent as MySqlLogo} from "../../assets/Icons/mysql.svg";
import {ReactComponent as Dota2Logo} from "../../assets/Icons/dota.svg";

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
    h2Style:{
        color: "#008000",
        fontSize: "40px",
        fontFamily: "roboto",
    },
    pStyle:{
        color:"white",
        fontSize: "20px",
        fontFamily: "roboto",
        lineHeight:1.6,
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
                        <h2 style={textStyles.h2Style}>
                            Full Stack Developer
                        </h2>
                        <p style={textStyles.pStyle}>
                            Prolific, full stack web developer with a passion for data science and artificial intelligence.<br/>
                             {/*<br/>*/}
                             {/*<br/>*/}
                             {/*<br/>*/}
                             {/*<br/>*/}
                             {/*<br/>*/}
                            {/*Linux <PythonLogo fill="green" stroke="green" width={"1.5rem"} height={"1.5rem"}/> <br/>*/}
                            {/*Git <PythonLogo fill="green" stroke="green" width={"1.5rem"} height={"1.5rem"}/> <br/>*/}
                        </p>

                        <ul style={textStyles.pStyle}>
                            <li>
                                C, C++ <CLogo fill="green" stroke="green" width={"2rem"} height={"2rem"}/>
                            </li>

                            <li>
                                Java (Spring / Spring Boot)  <JavaLogo fill="green" stroke="green" width={"2.5rem"} height={"2.5rem"}/>
                            </li>

                            <li>
                                Python (Django) <PythonLogo fill="green" stroke="green" width={"2.5rem"} height={"2.5rem"}/>
                            </li>

                            <li>
                                HTML, CSS, JavaScript (React) <JSLogo fill="green" stroke="green" width={"2rem"} height={"2rem"}/>
                            </li>

                            <li>
                                MySQL <MySqlLogo fill="green" stroke="green" width={"2.5rem"} height={"2.5rem"}/>
                            </li>
                        </ul>

                    </div>
                    <div style={Object.assign({}, styles.slide)}>
                        <h2 style={textStyles.h2Style}>
                            Math Teacher
                        </h2>
                        <p style={textStyles.pStyle}>
                            Number Theory Teacher at <a href={"http://mathhouse.org/"}>Isfahan Mathematics House</a>.
                        </p>
                    </div>
                    <div style={Object.assign({}, styles.slide)}>
                        <h2 style={textStyles.h2Style}>
                            Gamer
                        </h2>
                        <p style={textStyles.pStyle}>
                            Dota2 player <Dota2Logo width={"3rem"} height={"3rem"}/> <br/>
                            steam ID: 76561198999100637
                        </p>
                    </div>
                </AutoPlaySwipeableViews>
                <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />
            </div>
        );
    }
}

export default ViewAutoPlay;
