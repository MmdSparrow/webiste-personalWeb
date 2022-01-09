import CustomForm from "../../components/EmailForm/Form";
import WinkTitle from "../../components/WinkTitle/WinkTitle";
import {makeStyles} from "@material-ui/core";


const useStyles=makeStyles(()=>({
    divCustomForm:{
        display:"flex",
        justifyContent:"flex-start",
        width:"60rem",
        marginLeft:'2rem',
    },
}));


const Contact=()=>{
    const classes=useStyles();
    return(
        <div>
            <WinkTitle title={"Contact"}/>
            <div className={classes.divCustomForm}>
                <CustomForm/>
            </div>
        </div>
    );
}
export default Contact;