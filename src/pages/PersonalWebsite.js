import {makeStyles} from "@material-ui/core";
import ViewAutoPlay from "../components/Swipeable/SwipeableViews";
import CanvasConnection from "../layouts/Conncetion/Connection";
import HeaderNavbar from "../layouts/Header/Header";
import '../fonts/Fonts.css'

const useStyles=makeStyles(()=>({
    canvasWrap:{
        // position:'relative',
        height:900,
    },
    flexTwoColumn:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
    },
    sliderAndWelcome:{
      marginTop: 200,
    },
    text:{
        color: "white",
        fontSize: "60px",
        fontFamily: "roboto",
    },
    slider:{
        marginRight:"6em",
        marginLeft:"25em",
        width:"20em",
        height: "2em",
    }

}));

const MainPage=()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    return(

        <div className={classes.canvasWrap}>
            <CanvasConnection/>
            <HeaderNavbar/>

            <article className={classes.flexTwoColumn+ " "+ classes.sliderAndWelcome}>

                <div>
                    <span className={classes.text}>
                        Hi,<br/>
                        I<span>'</span>m<span> Mohammad</span>
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