import {makeStyles} from "@material-ui/core";
import ViewAutoPlay from "../components/Swipeable/SwipeableViews";
import CanvasConnection from "../layouts/Conncetion/Connection";
import HeaderNavbar from "../layouts/Header/Header";
import '../fonts/Fonts.css'
import Experience from "../layouts/Experience/Experience";
import Education from "../layouts/Education/Education";
import Contact from "../layouts/Contact/Contact";

const useStyles=makeStyles(()=>({
    canvasWrap:{
        // position:'relative',
        height:"100%",
        // '@global': {
        //     '*::-webkit-scrollbar': {
        //         width: '1.3%',
        //         maxWidth: '5px'
        //     },
        //     '*::-webkit-scrollbar-thumb': {
        //         backgroundColor: 'white'
        //     },
        //     '*:focus': {
        //         outline: 'none'
        //     }
        // }
    },
    flexTwoColumn:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    sliderAndWelcome:{
      marginTop: "16rem",
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
    experienceDiv:{
        marginTop:"20rem",
    },


}));

const MainPage=()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();

    return(

        <div className={classes.canvasWrap}>

            <CanvasConnection/>

            <HeaderNavbar/>

            <article className={classes.flexTwoColumn+ " " + classes.sliderAndWelcome}>

                <div className={classes.textDiv}>
                    <span className={classes.text}>
                        Hi,<br/>
                        I<span className={classes.greenText}>'</span>m<span className={classes.greenText}> Mohammad Ali</span>
                    </span>
                </div>

                <div className={classes.slider}>
                    <ViewAutoPlay />
                </div>

            </article>

            <section className={classes.sectionStyle}>

                <div className={classes.experienceDiv}>
                    <Experience/>
                </div>

                <div>
                    <Education/>
                </div>

                {/*<div>*/}
                {/*    <Contact/>*/}
                {/*</div>*/}

            </section>

        </div>


    );
}




export default MainPage;