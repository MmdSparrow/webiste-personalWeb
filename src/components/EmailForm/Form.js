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

    },
    rowMargin:{
        marginBottom:"0.7rem",
    },
    columnMargin:{
        marginRight:"1rem",
    },
    fullWidth:{
      width:"99%",
    },
    halfWidth:{
        width:"49%",
    },
    nearFullWidth:{
      width:"98.2%",
    },
}));

const CustomForm=()=>{
    const classes=useStyles();
    return(

        <form className={classes.flexColumn + " " +classes.fullWidth}>

            <div className={classes.flexTwoColumn + " " +classes.fullWidth}>

                <div className={classes.columnMargin + " " + classes.rowMargin + " " +classes.halfWidth}>
                    <CustomTextField isValid={true} label={"Name"}/>
                </div>

                <div className={classes.rowMargin + " " + classes.rowMargin + " " +classes.halfWidth}>
                    <CustomTextField isValid={true} label={"Email Address"}/>
                </div>

            </div>

            <div className={classes.rowMargin + " " +classes.nearFullWidth}>
                <CustomTextField isValid={true} label={"Subject"}/>
            </div>

            <div className={classes.rowMargin + " " +classes.nearFullWidth}>
                <CustomTextArea isValid={true} label={"Message"}/>
            </div>

            <div>
                <CustomButton/>
            </div>
        </form>


    );

}

export default CustomForm;