import * as React from 'react';
import TextField from '@mui/material/TextField';
import  {styled} from '@mui/material/styles';
import '../../App.css'
const COLOR_GREEN="#338800"
const COLOR_RED="#c50a1c"

const CssGreenTextField = styled(TextField)({
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
});

const CssRedTextField = styled(TextField)({
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
});

const CustomTextField=(props)=>{
    if(props.isValid){
        return (
            <CssGreenTextField required id="outlined-d" label={props.label} variant="outlined" margin="normal" InputLabelProps = {{style: {color: COLOR_GREEN},}}/>
        );
    }
    else {
        return (
            <CssRedTextField error required id="outlined-d" label={props.label} variant="outlined" helperText={props.message} margin="normal"/>
        );
    }
}
export default CustomTextField;
