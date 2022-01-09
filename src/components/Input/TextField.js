import * as React from 'react';
import TextField from '@mui/material/TextField';
import '../../App.css'
const COLOR_GREEN="#008000"
const COLOR_RED="#c50a1c"

const sxStyles={
    textFieldTrue:{
        color:"white",
        width:"100%",
        // color: COLOR_GREEN,
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: COLOR_GREEN,
            },
            '&:hover fieldset': {
                borderColor: COLOR_GREEN,
            },
            '&.Mui-focused fieldset': {
                borderColor: COLOR_GREEN,
            },
        },
    },
    textFieldFalse:{
        color:"white",
        width:"100%",
        // color: COLOR_RED,
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: COLOR_RED,
            },
            '&:hover fieldset': {
                borderColor: COLOR_RED,
            },
            '&.Mui-focused fieldset': {
                borderColor: COLOR_RED,
            },
        },
    },
    whiteColor:{
        input: {
            color: "white"
        }
    },

};

const CustomTextField=(props)=>{
    const classes=sxStyles;
    if(props.isValid){
        return (
            <TextField
                required
                id="outlined-d"
                label={props.label}
                variant="outlined"
                sx={classes.textFieldTrue}
                InputLabelProps = {{style: {color: "white"},}}
                InputProps={{
                    className: classes.whiteColor
                }}
            />
        );
    }
    else {
        return (
            <TextField
                error
                helperText={props.message}
                required
                id="outlined-d"
                label={props.label}
                variant="outlined"
                sx={classes.textFieldFalse}
                InputLabelProps = {{style: {color: "white"},}}
                InputProps={{
                    className: classes.whiteColor
                }}
            />
        );
    }
}
export default CustomTextField;
