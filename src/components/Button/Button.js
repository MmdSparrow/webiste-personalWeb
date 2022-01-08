import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const sxStyles={
    bottomStyle:{
        backgroundColor:"#008000",
        '&:hover': {
            backgroundColor:"#026702",
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor:"#008000",
            // borderColor: '#005cbf',
        },
        '&:focus': {
            backgroundColor:"#008000",
        },
    },

};

const CustomButton=()=> {
    return (
        <Button
            variant="contained"
            endIcon={<SendIcon />}
            sx={sxStyles.bottomStyle}
        >
            Send
        </Button>
    );
}
export default CustomButton;