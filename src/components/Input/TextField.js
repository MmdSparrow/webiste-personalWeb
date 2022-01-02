import * as React from 'react';
// import React,{Component} from 'react';
import TextField from '@mui/material/TextField';

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
const BasicTextField=(props)=>{
    return (
        <div>
            <TextField error required id="outlined-d" label="test" variant="outlined" helperText="test...." />
        </div>
    );
}
// const basicTextField = (props)=> {
//     return (
//         <div>
//             <TextField error required id="outlined-d" label="test" variant="outlined" helperText="test...." />
//         </div>
//     );
// }
export default BasicTextField;


// textField.propTypes={
//     lable: PropTypes.string.isRequired,
//     isValid: PropTypes.bool,
//     errorMessage: PropTypes.string
// }
// textField.defaultTypes={
//     isValid: true
// }