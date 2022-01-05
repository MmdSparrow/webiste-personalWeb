import CanvasConnection from "../layouts/conncetion/Connection";
import {makeStyles} from "@material-ui/core";

const useStyles=makeStyles(()=>({
    background:{
        backgroundImage: "linear-gradient(-30deg, transparent 73%, rgb(0,0,0, 0.5) 5%, rgb(0, 128, 0, 0.6) 60%, rgb(0, 128, 0, 1) 100%)",
        // height:890,
    },
    // canvasWrap:{
    //     position:'relative',
    // },
    // overlay:{
    //     backgroundImage: "linear-gradient(-30deg, transparent 73%, rgb(0,0,0, 0.5) 5%, rgb(0, 128, 0, 0.6) 60%, rgb(0, 128, 0, 1) 100%)",
    //     position:'absolute',
    //     top:0,
    //     left:0,
    //     height:1000,
    //     width: 1000
    // }
}));

const Body=()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return(

        <CanvasConnection/>

        // <div>
        //     <CanvasConnection/>
        //
        // </div>
    );
}




export default Body;