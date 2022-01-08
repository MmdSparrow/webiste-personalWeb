import { ReactComponent as FanapLogo } from '../../assets/Images/fanap-green.svg';
import { ReactComponent as IMHLogo } from '../../assets/Images/mathhouse-green.svg';
import {makeStyles} from "@material-ui/core";
import '../../fonts/Fonts.css'
const COLOR_GREEN="#008000"

const useStyles=makeStyles(()=>({
    canvasWrap:{
        // position:'relative',
        height:"100em",
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
    flexColumn:{
        display: 'flex',
        flexDirection: 'column',
    },
    sliderAndWelcome:{
        marginTop: "16rem",
    },
    textDiv:{
        marginLeft:"15rem",
        marginBottom:"3rem",
    },
    text:{
        color: "white",
        fontSize: "70px",
        fontFamily: "roboto",
    },
    slider:{
        marginRight:"2rem",
        marginLeft:"19rem",
        width:"25rem",
        height: "2rem",
    },
    greenText:{
        color: "#008000FF"
    },
    h3Style:{
        color:"white",
        fontSize:"42px",
        fontFamily:"roboto",
    },
    h4Style:{
        color:"white",
        fontSize:"30px",
        display:"flex",
        justifyContent:"center",
        marginBottom:"0.7em",
        fontFamily: "roboto",
    },
    spanColor:{
        color:COLOR_GREEN,
        fontFamily: "roboto",
        // visibility: "hidden",
    },
    logoDiv:{
        display:"flex",
        justifyContent:"center",
    },
    pStyle:{
        fontSize:"20px",
        color:"white",
        display:"flex",
        justifyContent:"center",
        marginTop:"0",
    }

}));

setInterval(function(){
    const arrayElements = document.getElementById('wink');
    // arrayElements[test,test,t];
    changeState(arrayElements);
    // arrayElements.forEach(changeState());
},800);

function changeState(item) {
    console.log("log: "+item.style.visibility);
    if(item.style.visibility==="hidden"){
        item.style.visibility="visible";
    } else {
        item.style.visibility="hidden";
    }
}

const Experience=()=>{
    const classes=useStyles();
    return(
        <div>
            <h3 id={"experience"} className={classes.h3Style}>
                {/*Experience<span className={"wink "+classes.span}>|</span>*/}
                <span className={classes.spanColor}>& </span>Experience<span id={"wink"} className={classes.spanColor}> |</span>
            </h3>
            <div className={classes.flexTwoColumn}>
                <div className={classes.flexColumn}>
                    <div className={classes.logoDiv}>
                        <FanapLogo fill="green" stroke="green" width={"10rem"} height={"10rem"}/>
                    </div>
                    <h4 className={classes.h4Style}>
                        Fanap Soft
                    </h4>
                    <p className={classes.pStyle}>
                        Backend developer in :
                        {/*<span className={classes.spanColor}> :</span>*/}
                        {/*<span className={classes.spanColor}>#</span>*/}
                        <br/>&nbsp;&nbsp;Digital School project<br/>
                        date:2021/8/13 - present
                    </p>
                </div>
                <div className={classes.flexColumn}>
                    <div className={classes.logoDiv}>
                        <IMHLogo fill="green" stroke="green" width={"10rem"} height={"10rem"}/>
                    </div>
                    <h4 className={classes.h4Style}>
                        Isfahan Mathematics House
                    </h4>
                    <p>

                    </p>
                </div>
            </div>
        </div>
    );
}
export default Experience;