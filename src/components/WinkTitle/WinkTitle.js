import {makeStyles} from "@material-ui/core";
import '../../fonts/Fonts.css'
const COLOR_GREEN="#008000"

setInterval(function(){
    const arrayElements = document.getElementsByClassName('wink');
    console.log("size........................");
    console.log(arrayElements.length);
    console.log("size........................");
    for (let i = 0; i < arrayElements.length; i++) {
        changeState(arrayElements[i]);
    }
},800);

function changeState(item) {
    console.log("log: "+item.style.visibility);
    if(item.style.visibility==="hidden"){
        item.style.visibility="visible";
    } else {
        item.style.visibility="hidden";
    }
}

const useStyles=makeStyles(()=>({
    h3Style:{
        color:"white",
        fontSize:"42px",
        fontFamily:"roboto",
    },
    spanColor:{
        color:COLOR_GREEN,
        fontFamily: "roboto",
    },
}));

const WinkTitle=(props)=>{
    const classes=useStyles();
    return(
        <h3 id={"experience"} className={classes.h3Style}>
            <span className={classes.spanColor}>&</span> {props.title} <span className={"wink "+classes.spanColor}>|</span>
        </h3>
    );
}
export default WinkTitle;