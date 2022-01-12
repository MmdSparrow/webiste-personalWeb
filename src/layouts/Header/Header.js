import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';      //contact mail
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';  //download
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined'; 	                //course
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';                //education
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';      //work
import {makeStyles} from "@material-ui/core";
const COLOR_GREEN="#016b01";


const sxStyle={
    iconStyle:{
        color:"white",
        width:"1.8rem",
        height:"1.8rem",
    },
    iconButtonStyle:{
        '&:hover': {
            transform: "scale(1.15)",
        },
        // marginRight:"4rem",
    },
    downloadButtonStyle:{
        '&:hover': {
            transform: "scale(1.15)",
        },
    }

}

const useStyles=makeStyles(()=>({
    container:{
        backgroundColor: "transparent",
        // backgroundColor: COLOR_GREEN,
        // position:"fixed",
        display:"flex",
        flexDirection:"row",
        // flexWrap:"wrap",
        height:"100%",
        rowGap:"2em",
    },
    firstIcon:{
        marginLeft:"1rem",

    },
}));



const CustomHeader=()=> {
    const classes=useStyles();
    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `download.txt`;
        link.href = "./download.txt";
        link.click();
    };

    const scrollToRef = (value) => {
        document.getElementById(value).scrollIntoView({behavior:"smooth"});
    };

    return (
        <div className={classes.container}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={()=>scrollToRef('experience')}
                sx={sxStyle.iconButtonStyleFirst}
                className={classes.firstIcon}
            >
                <WorkOutlineOutlinedIcon sx={sxStyle.iconStyle} />
            </IconButton>

            <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={()=>scrollToRef('education')}
                sx={sxStyle.iconButtonStyle}

            >
                <SchoolOutlinedIcon sx={sxStyle.iconStyle} />
            </IconButton>

            <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={()=>scrollToRef('courses')}
                sx={sxStyle.iconButtonStyle}

            >
                <ClassOutlinedIcon sx={sxStyle.iconStyle}/>
            </IconButton>

            <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={()=>scrollToRef('contact')}
                sx={sxStyle.iconButtonStyle}

            >
                <ContactMailOutlinedIcon sx={sxStyle.iconStyle}/>
            </IconButton>

            <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={onDownload}
                sx={sxStyle.downloadButtonStyle}
            >
                <CloudDownloadOutlinedIcon sx={sxStyle.iconStyle}/>
            </IconButton>
        </div>
    );
}
export default CustomHeader;