import { ReactComponent as FanapLogo } from '../../assets/Images/fanap-green.svg';
import { ReactComponent as IMHLogo } from '../../assets/Images/mathhouse-green.svg';
import {makeStyles} from "@material-ui/core";
import '../../fonts/Fonts.css'
import WinkTitle from "../../components/WinkTitle/WinkTitle";
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
        fontSize:"42px",
        fontFamily:"roboto",
    },
    h4Style:{
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



const Experience=()=>{
    const classes=useStyles();
    return(
        <div>
            <WinkTitle title={"Experience"}/>
            <div className={classes.flexTwoColumn}>
                <div className={classes.flexColumn}>
                    <FanapLogo fill="green" stroke="green" width={"10rem"} height={"10rem"}/>
                    <h4 className={classes.h4Style}>
                        Fanap Soft
                    </h4>
                    <p className={classes.pStyle}>
                        <span className={classes.spanColor}>Backend developer</span> in:<br/>
                        &ensp; <span className={classes.spanColor}>></span> Digital School project<br/>
                        &ensp; <span className={classes.spanColor}>></span> Digital School project<br/>
                        Date: 2021/8/13 - present
                    </p>
                </div>
                <div className={classes.flexColumn}>
                    <IMHLogo fill="green" stroke="green" width={"10rem"} height={"10rem"}/>
                    <h4 className={classes.h4Style}>
                        Isfahan Mathematics House
                    </h4>
                    <p className={classes.pStyle}>
                        <span className={classes.spanColor}>Number Theory</span> teacher<br/>
                        Date: 2021/5/22 - present<br/>
                        To see my courses click <a href="#course">here</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Experience;