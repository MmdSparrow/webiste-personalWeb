import {makeStyles} from "@material-ui/core";
import ViewAutoPlay from "../components/Swipeable/SwipeableViews";
import CanvasConnection from "../layouts/Conncetion/Connection";
import HeaderNavbar from "../layouts/Header/Header";
import '../fonts/Fonts.css'
import Experience from "../layouts/Experience/Experience";
import Education from "../layouts/Education/Education";
import Contact from "../layouts/Contact/Contact";
import Courses from "../layouts/Courses/Courses";

const useStyles=makeStyles(()=>({
    canvasWrap:{
        height:"100%",
    },
    flexTwoColumn:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    flexColumn:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // flexWrap: 'wrap',

    },
    sliderAndWelcome:{
        // marginTop: "14rem",
        marginBottom:"27rem",
    },
    textDiv:{
        // marginLeft:"15rem",
        marginBottom:"3rem",
    },
    text:{
        color: "white",
        fontSize: "70px",
        fontFamily: "roboto",
    },
    slider:{
        // marginRight:"2rem",
        // marginLeft:"19rem",
        width:"25rem",
        height: "2rem",
    },
    greenText:{
        color: "#008000FF"
    },
    sectionStyle:{
        marginLeft:"3rem",
    },
    partMargin:{
        marginTop:"10rem",
    },
    contactDiv:{
        marginRight:"1rem",
        width:"100%",
    },
    licenseDiv:{
        display:"flex",
        justifyContent:"flex-end",
        marginRight:"1rem",
        paddingBottom:"1rem",
        fontFamily:"roboto",
        fontSize:"20px",
        fontWeight:"bold",
        color:"white",
        marginTop:"3rem",
    },

}));

const MainPage=()=>{
    const classes = useStyles();

    return(

        <div className={classes.canvasWrap}>

            <CanvasConnection/>
            {/*<HeaderNavbar/>*/}
            <article className={classes.flexTwoColumn+ " " + classes.sliderAndWelcome}>

                <div className={classes.textDiv}>
                    <span className={classes.text}>
                        Hi<span className={classes.greenText}>,</span><br/>
                        I<span className={classes.greenText}>'</span>m<span className={classes.greenText}> Mohammad Ali</span>
                    </span>
                </div>

                <div className={classes.slider}>
                    <ViewAutoPlay />
                </div>

            </article>

            <section className={classes.sectionStyle}>

                <div className={classes.partMargin}>
                    <Experience/>
                </div>

                <div className={classes.partMargin}>
                    <Education/>
                </div>

                {/*<div>*/}
                {/*    <Portfolio/>*/}
                {/*</div>*/}

                <div>
                    <Courses/>
                </div>

                <div className={classes.partMargin + " " + classes.contactDiv}>
                    <Contact/>
                </div>



            </section>


            <div className={classes.licenseDiv}>
                © 2022
            </div>
        </div>
    );
}




export default MainPage;