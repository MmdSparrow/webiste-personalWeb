import {makeStyles} from "@material-ui/core";
const COLOR_GREEN="#008000"


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

// setInterval(function(){
//     const arrayElements = document.getElementById('wink');
//     // arrayElements[test,test,t];
//     changeState(arrayElements);
//     // arrayElements.forEach(changeState());
// },800);
//
// function changeState(item) {
//     console.log("log: "+item.style.visibility);
//     if(item.style.visibility==="hidden"){
//         item.style.visibility="visible";
//     } else {
//         item.style.visibility="hidden";
//     }
// }

const Education=()=>{
    const classes=useStyles();
    return(
        <div>
            <h3 id={"education"} className={classes.h3Style}>
                {/*Experience<span className={"wink "+classes.span}>|</span>*/}
                <span className={classes.spanColor}>& </span>Education<span id={"wink"} className={classes.spanColor}> |</span>
            </h3>
            <div>

            </div>
        </div>
    );
}
export default Education;