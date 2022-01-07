import {makeStyles} from "@material-ui/core";
import ViewAutoPlay from "../components/Swipeable/SwipeableViews";
import CanvasConnection from "../layouts/Conncetion/Connection";
import HeaderNavbar from "../layouts/Header/Header";
import '../fonts/Fonts.css'

const useStyles=makeStyles(()=>({
    canvasWrap:{
        // position:'relative',
        height:900,
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
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    sliderAndWelcome:{
      marginTop: "14%",
    },
    textDiv:{
        marginLeft:"15%",
        marginBottom:"3%",
    },
    text:{
        color: "white",
        fontSize: "70px",
        fontFamily: "roboto",
    },
    slider:{
        marginRight:"2%",
        marginLeft:"19%",
        width:"25em",
        height: "2em",
    },
    greenText:{
        color: "#008000FF"
    }

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

            <section>

            </section>

        </div>


    );
}




export default MainPage;