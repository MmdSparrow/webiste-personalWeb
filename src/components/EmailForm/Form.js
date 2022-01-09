import CustomButton from "../Button/Button";
import CustomTextField from "../Input/TextField";
import CustomTextArea from "../Input/TextArea";
import {makeStyles} from "@material-ui/core";


const useStyles=makeStyles(()=>({
    flexTwoColumn:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    flexColumn:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // flexWrap: 'wrap',
        width:'100%',
    },
    divHalf:{
        width:"49.7%",
    },
    rowMargin:{
        marginBottom:"10px",
    },
    columnMargin:{
        marginRight:"5px",
    }
}));

const CustomForm=()=>{
    const classes=useStyles();
    return(
        <form className={classes.flexColumn}>

            <div className={classes.flexTwoColumn + " " + classes.rowMargin}>

                <div className={classes.divHalf + " " + classes.columnMargin}>
                    <CustomTextField isValid={true} label={"Name"}/>
                </div>

                <div className={classes.divHalf}>
                    <CustomTextField isValid={true} label={"Email Address"}/>
                </div>

            </div>

            <div className={classes.rowMargin}>
                <CustomTextField isValid={true} label={"Subject"}/>
            </div>

            <div className={classes.rowMargin}>
                <CustomTextArea isValid={true} label={"Message"}/>
            </div>

            <div>
                <CustomButton/>
            </div>
        </form>
    );

}

export default CustomForm;