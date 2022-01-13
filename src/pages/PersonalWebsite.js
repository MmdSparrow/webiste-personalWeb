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
import $ from 'jquery'

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
        marginTop: "6rem",
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
        marginTop:"10rem",
    }
}));

// var i = 0;
// function move() {
//     if (i == 0) {
//         var elem = document.getElementById("experience");
//         var width = 1;
//         var interval = setInterval(frame, 50);
//
//         function frame() {
//             if (width >= 100) {
//                 // eslint-disable-next-line no-undef
//                 clearInterval(id);
//                 interval = 0;
//             } else {
//                 width++;
//                 elem.style.width = width + "%";
//             }
//         }
//     }
// }
// function sleep(ms) {
//     return new Promise(
//         resolve => setTimeout(resolve, ms)
//     );
// }

$(function(){
    $(window).scroll(function(){
        // console.log("scroll Top:");
        // console.log();
        const elements = document.getElementsByClassName('noneDisplay');
        // var testDiv = document.getElementById("experience");
        // console.log("offset top:");
        // console.log(testDiv.offsetTop);
        // console.log("scroll Top:");
        console.log($(window).scrollTop()+window.innerHeight);
        // console.log(elements.length)
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

        <div className={classes.pageStyle}>
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

                    {/*<div className={classes.partMargin}>*/}
                        <div className={"noneDisplay"}>
                                <Experience/>
                        </div>
                    {/*</div>*/}

                    {/*<div className={classes.partMargin}>*/}
                        <div className={"noneDisplay"}>
                            <Education/>
                        </div>
                    {/*</div>*/}

                    {/*<div className={classes.noneDisplay+" "+classes.partMargin}>*/}
                    {/*    <Portfolio/>*/}
                    {/*</div>*/}

                    {/*<div className={classes.partMargin}>*/}
                        <div className={"noneDisplay"}>
                                <Courses/>
                        </div>
                    {/*</div>*/}

                    {/*<div className={classes.partMargin}>*/}
                        <div className={"noneDisplay"}>
                                <Contact/>
                        </div>
                    {/*</div>*/}

                </section>



                <div className={classes.licenseDiv}>
                    © 2022
                </div>
            </div>


        </div>
    );
}




export default MainPage;