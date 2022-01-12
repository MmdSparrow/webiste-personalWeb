import {makeStyles} from "@material-ui/core";
import ViewAutoPlay from "../components/Swipeable/SwipeableViews";
import CanvasConnection from "../layouts/Conncetion/Connection";
import HeaderNavbar from "../layouts/Header/Header";
import '../fonts/Fonts.css'
import Experience from "../layouts/Experience/Experience";
import Education from "../layouts/Education/Education";
import Contact from "../layouts/Contact/Contact";
import Courses from "../layouts/Courses/Courses";
import CustomHeader from "../layouts/Header/Header";

const useStyles=makeStyles(()=>({
    pageStyle:{
        // width:"100%",
        // backgroundSize:"cover",
        // position:"relative",
    },
    flexTwoColumn:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    sliderAndWelcome:{
        marginTop: "15rem",
        marginBottom:"11rem",
    },
    textDiv:{
        marginBottom:"16rem",
        marginLeft:"1rem",
    },
    text:{
        color: "white",
        fontSize: "66px",
        fontFamily: "roboto",
    },
    slider:{
        // marginRight:"2rem",
        // marginLeft:"19rem",
        width:"25rem",
        height: "2rem",
        marginLeft:"1rem",
        marginBottom:"23rem",
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
    marginRightHeader:{
      marginLeft:"1rem",
    },

}));


const MainPage=()=>{
    const classes = useStyles();



    return(

        <div className={classes.pageStyle}>
            <CanvasConnection/>

            <div className={classes.marginRightHeader}>
                <CustomHeader/>
            </div>

            <div>
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


        </div>
    );
}




export default MainPage;