import {makeStyles} from "@material-ui/core";
import ViewAutoPlay from "../components/Swipeable/SwipeableViews";
import CanvasConnection from "../layouts/Conncetion/Connection";
import '../fonts/Fonts.css'
import Experience from "../layouts/Experience/Experience";
import Education from "../layouts/Education/Education";
import Contact from "../layouts/Contact/Contact";
import Courses from "../layouts/Courses/Courses";
import CustomHeader from "../layouts/Header/Header";
import $ from 'jquery'
import CustomFooter from "../layouts/Footer/Footer";

const useStyles=makeStyles(()=>({
    flexTwoColumn:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    sliderAndWelcome:{
        marginTop: "4rem",
        paddingBottom:"11rem",
    },
    textDiv:{
        marginBottom:"16rem",
        marginLeft:"1rem",
    },
    text:{
        color: "white",
        fontSize: "62px",
        fontFamily: "roboto",
    },
    slider:{
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
    partMargin:{
        paddingBottom:"10rem",
    }
}));

$(function(){
    $(window).scroll(function(){
        const elements = document.getElementsByClassName('noneDisplay');
        for(let i=0; i<elements.length; i++) {
            if($(window).scrollTop()+window.innerHeight>=elements[i].offsetTop) {
                elements[i].style.marginTop=0;
                elements[i].style.opacity=1;
            }
            else {
                elements[i].style.marginTop="150px";
                elements[i].style.opacity=0;
            }
        }
    });
});


const MainPage=()=>{
    const classes = useStyles();

    return(

        <div>
            <CanvasConnection/>

            <div>
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

                    <div className={"noneDisplay "+classes.partMargin}>
                            <Experience/>
                    </div>

                    <div className={"noneDisplay "+classes.partMargin}>
                        <Education/>
                    </div>

                    {/*<div className={classes.noneDisplay+" "+classes.partMargin}>*/}
                    {/*    <Portfolio/>*/}
                    {/*</div>*/}

                    <div className={"noneDisplay "+classes.partMargin}>
                            <Courses/>
                    </div>

                    <div className={"noneDisplay "}>
                            <Contact/>
                    </div>

                </section>

                <CustomFooter/>
            </div>


        </div>
    );
}




export default MainPage;