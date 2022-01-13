import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';      //contact mail
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';  //download
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined'; 	                //course
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';                //education
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';      //work
import {makeStyles} from "@material-ui/core";


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
    firstIconButtonStyle:{
        '&:hover': {
            transform: "scale(1.15)",
        },
        marginLeft:"1rem",
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
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignContent:"flex-start",
        flexWrap:"wrap",
        width:"100%",
        height:"10rem",
        columnGap:"2rem",
        backgroundImage:"linear-gradient(-8deg, transparent 70%, rgb(0, 0, 0, 0.5) 5%, rgb(0, 128, 0, 0.6) 60%, rgb(0, 128, 0, 1) 100%)",
    },
}));


const CustomHeader=()=> {
    const classes=useStyles();
    const onDownload = () => {
        const link = document.createElement("a");
        link.download = 'SayedMohammadAli-Mirkazemi_resume';
        link.href = '../../assets/SayedMohammadAli-Mirkazemi_resume.pdf';
        link.click();
    };

    const scrollToRef = (value) => {
        window.scrollTo({top: (document.getElementById(value).offsetTop-170), behavior: 'smooth'});
    };

    return (
        <div className={classes.container}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={()=>scrollToRef('experience')}
                sx={sxStyle.firstIconButtonStyle}
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
                // onClick={onDownload}
                download
                href={'../../assets/SayedMohammadAli-Mirkazemi_resume.pdf'}
                sx={sxStyle.downloadButtonStyle}
            >
                <CloudDownloadOutlinedIcon sx={sxStyle.iconStyle}/>
            </IconButton>
        </div>
    );
}
export default CustomHeader;