import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const CustomButton=()=> {
    return (
        <Button variant="contained" endIcon={<SendIcon />}>
            Send
        </Button>
    );
}
export default CustomButton;