import * as React from 'react';
// import React,{Component} from 'react';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import '../../App.css'
import {createTheme, makeStyles, withStyles} from "@material-ui/core";

// import PropTypes from  'prop-types'

// export const textField=(props)=>{
//     return (
//         <TextField required id="outlined-d" label={props.lable} variant="outlined" />
//     );
// }
//
// export const errorTextField=(props)=>{
//     return (
//         <TextField error required id="outlined-basic" label={props.lable} variant="outlined" helperText={props.erroeMessage}/>
//     );
// }

// export default function textFieldd(){
//     return (
//         <TextField required id="outlined-d" label="test" variant="outlined" />
//     );
// }

// const textField=(props)=>{
//     if(props.isValid){
//         return (
//             <TextField required id="outlined-d" label={props.label} variant="outlined" />
//         );
//     }else {
//         return (
//             <TextField error required id="outlined-d" label={props.label} variant="outlined" helperText={props.errorMessage} />
//         );
//     }
//
// }
// function BasicTextField(props){
//     return (
//         <div>
//             <TextField error required id="outlined-d" label="test" variant="outlined" helperText="test...." />
//         </div>
//     );
// }

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#43A047',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#43A047',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#43A047',
        },
        '&:hover fieldset': {
            borderColor: '#43A047',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#43A047',
        },
    },
});


// const classes = useStyles();

const AAbasicTextField=(props)=>{


    if(props.isValid){
        return (
            <CssTextField required id="outlined-d" label={props.label} variant="outlined" margin="normal" className="test" InputLabelProps={{className:'test__label'}}/>
        );
    }
    else {
        return (
            <CssTextField error required id="outlined-d" label={props.label} variant="outlined" helperText={props.message} margin="normal"/>
        );
    }
}

export default AAbasicTextField;
// const basicTextField = (props)=> {
//     return (
//         <div>
//             <TextField error required id="outlined-d" label="test" variant="outlined" helperText="test...." />
//         </div>
//     );
// }



// textField.propTypes={
//     lable: PropTypes.string.isRequired,
//     isValid: PropTypes.bool,
//     errorMessage: PropTypes.string
// }
// textField.defaultTypes={
//     isValid: true
// }