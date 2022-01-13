import { ReactComponent as FanapLogo } from '../../assets/Icons/fanap-green.svg';
import { ReactComponent as IMHLogo } from '../../assets/Icons/mathhouse-green.svg';
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
        lineHeight:1.6,
    },
}));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const Experience=()=>{
    const classes=useStyles();
    return(
        <div>
            <WinkTitle id={"experience"} title={"Experience"}/>
            <div className={classes.flexTwoColumn}>
                <div className={classes.flexColumn}>
                    <FanapLogo fill="green" stroke="green" width={"10rem"} height={"10rem"}/>
                    <h3 className={classes.h3Style}>
                        Fanap Soft
                    </h3>
                    <p className={classes.pStyle}>
                        <span className={classes.spanColor}>Backend developer</span> in:<br/>
                        &ensp; <span className={classes.spanColor}>></span> Digital School project<br/>
                        &ensp; <span className={classes.spanColor}>></span> Digital School project<br/>
                        Date: 2021/8/13 - present <br/>
                        Website: (website)
                    </p>
                </div>
                <div className={classes.flexColumn}>
                    <IMHLogo fill="green" stroke="green" width={"10rem"} height={"10rem"}/>
                    <h3 className={classes.h3Style}>
                        Isfahan Mathematics House
                    </h3>
                    <p className={classes.pStyle}>
                        <span className={classes.spanColor}>Number Theory</span> teacher<br/>
                        Date: 2021/5/22 - present<br/>
                        Website: (website) <br/>
                        To see my courses click <a href="#courses">here</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Experience;