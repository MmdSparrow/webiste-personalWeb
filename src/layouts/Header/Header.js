import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';      //contact mail
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';  //download
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined'; 	                //course
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';                //education
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';      //work
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';                  //speed
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';    //person

const sxStyles={
    bottomNavigation:{
        position: 'relative',
        display:"flex",
        // justifyContent: 'space-evenly',
        width: '40em',
        backgroundColor: 'transparent',
    },
    bottomNavigationAction:{
        color: "#efeaea",
        '&:hover': {
            transform: "scale(1.15)",
        },
        '&.MuiBottomNavigationAction-root.Mui-selected':{
            transform: "scale(1.15)",
            color: '#000000'
        }
    }
};

const HeaderNavbar=()=> {

    const [value, setValue] = React.useState('');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation sx={sxStyles.bottomNavigation} value={value} onChange={handleChange}>
            <BottomNavigationAction
                sx={sxStyles.bottomNavigationAction}
                label="about"
                value="about"
                icon={<PermIdentityOutlinedIcon />}
            />
            <BottomNavigationAction
                sx={sxStyles.bottomNavigationAction}
                label="skill"
                value="skill"
                icon={<SpeedOutlinedIcon />}
            />
            <BottomNavigationAction
                sx={sxStyles.bottomNavigationAction}
                label="experience"
                value="experience"
                icon={<WorkOutlineOutlinedIcon />}
            />
            <BottomNavigationAction
                sx={sxStyles.bottomNavigationAction}
                label="education"
                value="education"
                icon={<SchoolOutlinedIcon />}
            />
            <BottomNavigationAction
                sx={sxStyles.bottomNavigationAction}
                label="courses"
                value="courses"
                icon={<ClassOutlinedIcon />}
            />
            <BottomNavigationAction
                sx={sxStyles.bottomNavigationAction}
                label="contact"
                value="contact"
                icon={<ContactMailOutlinedIcon />}
            />
            <BottomNavigationAction
                sx={sxStyles.bottomNavigationAction}
                label="download"
                value="download"
                icon={<CloudDownloadOutlinedIcon />}
            />
        </BottomNavigation>
    );
}
export default HeaderNavbar;