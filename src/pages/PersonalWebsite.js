import {makeStyles} from "@material-ui/core";
import ViewAutoPlay from "../components/Swipeable/SwipeableViews";
import CanvasConnection from "../layouts/Conncetion/Connection";
import HeaderNavbar from "../layouts/Header/Header";

const useStyles=makeStyles(()=>({
    background:{
        position: "absolute",
        height: "100vh",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0,
    },
    canvasWrap:{
        // position:'relative',
        height:900,
    },
    overlay:{
        // backgroundImage: "linear-gradient(-30deg, transparent 73%, rgb(0,0,0, 0.5) 5%, rgb(0, 128, 0, 0.6) 60%, rgb(0, 128, 0, 1) 100%)",
        position:'relative',
        height:1000,
        width: 1000
    },
    test:{
        backgroundColor:'#d22e2e',
        color:'#d22e2e',
    },
    test2:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        // backgroundColor:'#d22e2e',
        color:'#d22e2e',
    },

}));

const MainPage=()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    return(

        <div className={classes.canvasWrap}>
            <CanvasConnection/>
            <HeaderNavbar/>

            <article>
            {/*    <div>*/}
            {/*        <span>*/}
            {/*            Hi,*/}
            {/*            <br> I<span>'</span>m <span>Mohammad</span></br>*/}
            {/*        </span>*/}
            {/*    </div>*/}
            {/*    <ViewAutoPlay/>*/}

            </article>
            {/*<section>*/}

            {/*</section>*/}

        </div>


    );
}




export default MainPage;