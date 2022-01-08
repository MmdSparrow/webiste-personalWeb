import * as React from 'react';
import TextField from '@mui/material/TextField';
const COLOR_GREEN="#008000"


const sxStyles={
    textFieldTrue:{
        width:"100%",
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
        width:"100%",
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

};


const CustomTextArea=(props)=> {
    // const [value, setValue] = React.useState('Controlled');
    //
    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };
    if(props.isValid){
        return (
            <TextField
                required
                id="outlined-multiline-flexible"
                label="Message"
                multiline
                minRows={5}
                // onChange={handleChange}
                sx={sxStyles.textFieldTrue}
                InputLabelProps = {{style: {color: "white"},}}
            />
        );
    }else {
        return (
            <TextField
                error
                id="outlined-multiline-flexible"
                label="Message"
                multiline
                minRows={5}
                // onChange={handleChange}
                sx={sxStyles.textFieldFalse}
                InputLabelProps = {{style: {color: "white"},}}
            />
        );
    }


}

export default CustomTextArea;