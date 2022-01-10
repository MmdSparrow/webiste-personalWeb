import WinkTitle from "../../components/WinkTitle/WinkTitle";
import {makeStyles} from "@material-ui/core";
const COLOR_GREEN="#008000"


const useStyles=makeStyles(()=>({
    flexTwoColumn:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    flexColumn:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:"center",
        marginBottom:"3rem",
    },
    h3Style:{
        color:"white",
        fontSize:"30px",
        marginBottom:"0.7em",
        fontFamily: "roboto",
    },
    spanColor:{
        color:COLOR_GREEN,
        fontFamily: "roboto",
    },
    pStyle:{
        fontSize:"20px",
        color:"white",
        marginTop:"0",
    },
}));



const Courses=()=>{
    const classes=useStyles();

    return(
        <div>
            <WinkTitle id={"courses"} title={"Courses"}/>
            <div className={classes.flexTwoColumn}>

                <div className={classes.flexColumn}>
                    <img src={require('../../assets/Images/course-summer-1400.jpg')} alt="number theory" width="400rem" height="400rem" />
                    <h3 className={classes.h3Style}>
                        Number Theory
                    </h3>
                    <p className={classes.pStyle}> <a href="http://mathhouse.org/" title="Isfahan Mathematics House">Isfahan Mathematics House website</a></p>
                </div>

                <div className={classes.flexColumn}>
                    <img src={require('../../assets/Images/course-fall-1400.jpg')} alt="number theory" width="400rem" height="400rem" />
                    <h3 className={classes.h3Style}>
                        Number Theory
                    </h3>
                    <p className={classes.pStyle}> <a href="http://mathhouse.org/" title="Isfahan Mathematics House">Isfahan Mathematics House website</a></p>
                </div>

            </div>
        </div>
    );
}

export default Courses;